#!/usr/bin/env node
/**
 * RefineUI System Icons - Metadata Generator
 * assets 폴더에서 아이콘 정보를 추출하여 metadata.json을 생성합니다.
 */

const fs = require("fs-extra");
const path = require("path");

class MetadataGenerator {
  constructor() {
    this.projectRoot = path.resolve(__dirname, "..");
    this.assetsDir = path.join(this.projectRoot, "assets");
    this.metadataFile = path.join(
      this.projectRoot,
      "metadata",
      "metadata.json"
    );
    this.fontsDir = path.join(this.projectRoot, "fonts");
  }

  async generateMetadata() {
    console.log("📋 메타데이터 생성 시작...");

    try {
      // 1. assets 폴더에서 아이콘 정보 추출
      const iconAssets = await this.extractIconAssets();
      console.log(`📁 ${iconAssets.length}개의 아이콘 assets 발견`);

      // 2. 폰트에서 아이콘 정보 추출
      const fontIcons = await this.extractFontIcons();
      console.log(`🔤 ${fontIcons.length}개의 폰트 아이콘 발견`);

      // 3. 메타데이터 생성
      const metadata = {
        version: "1.0.0",
        generatedAt: new Date().toISOString(),
        totalIcons: iconAssets.length + fontIcons.length,
        assets: {
          count: iconAssets.length,
          icons: iconAssets,
        },
        fonts: {
          count: fontIcons.length,
          icons: fontIcons,
        },
        platforms: {
          react: true,
          "react-native": true,
          web: true,
          flutter: true,
          ios: true,
          android: true,
        },
      };

      // 4. 메타데이터 파일 저장
      await fs.ensureDir(path.dirname(this.metadataFile));
      await fs.writeJson(this.metadataFile, metadata, { spaces: 2 });

      console.log("✅ 메타데이터 생성 완료!");
      console.log(`📊 총 ${metadata.totalIcons}개 아이콘`);
      console.log(`📁 Assets: ${metadata.assets.count}개`);
      console.log(`🔤 Fonts: ${metadata.fonts.count}개`);

      return metadata;
    } catch (error) {
      console.error("❌ 메타데이터 생성 실패:", error);
      throw error;
    }
  }

  async extractIconAssets() {
    const icons = [];

    try {
      if (await fs.pathExists(this.assetsDir)) {
        const iconDirs = await fs.readdir(this.assetsDir);

        for (const iconDir of iconDirs) {
          const iconPath = path.join(this.assetsDir, iconDir);
          const stats = await fs.stat(iconPath);

          if (stats.isDirectory()) {
            const iconInfo = await this.getIconInfo(iconPath, iconDir);
            if (iconInfo) {
              icons.push(iconInfo);
            }
          }
        }
      }
    } catch (error) {
      console.warn("⚠️  Assets 폴더 읽기 실패:", error.message);
    }

    return icons;
  }

  async extractFontIcons() {
    const icons = [];

    try {
      if (await fs.pathExists(this.fontsDir)) {
        const fontFiles = await fs.readdir(this.fontsDir);

        for (const fontFile of fontFiles) {
          if (fontFile.endsWith(".css")) {
            const cssPath = path.join(this.fontsDir, fontFile);
            const cssContent = await fs.readFile(cssPath, "utf8");

            // CSS에서 아이콘 클래스 추출
            const iconClasses = this.extractIconClassesFromCSS(cssContent);
            icons.push(...iconClasses);
          }
        }
      }
    } catch (error) {
      console.warn("⚠️  Fonts 폴더 읽기 실패:", error.message);
    }

    return icons;
  }

  async getIconInfo(iconPath, iconName) {
    try {
      const files = await fs.readdir(iconPath);
      const svgFiles = files.filter((file) => file.endsWith(".svg"));
      const pngFiles = files.filter((file) => file.endsWith(".png"));

      return {
        name: iconName,
        path: path.relative(this.projectRoot, iconPath),
        files: {
          svg: svgFiles.length,
          png: pngFiles.length,
          total: files.length,
        },
        formats: svgFiles.length > 0 ? ["svg"] : [],
      };
    } catch (error) {
      console.warn(`⚠️  아이콘 정보 추출 실패 (${iconName}):`, error.message);
      return null;
    }
  }

  extractIconClassesFromCSS(cssContent) {
    const icons = [];
    const iconClassRegex = /\.ic_refineui_([^_]+)_\d+_(regular|filled):before/g;
    let match;

    while ((match = iconClassRegex.exec(cssContent)) !== null) {
      const iconName = match[1];
      const style = match[2];

      icons.push({
        name: iconName,
        style: style,
        type: "font",
        class: match[0],
      });
    }

    return icons;
  }
}

// 메인 실행
async function main() {
  try {
    const generator = new MetadataGenerator();
    await generator.generateMetadata();
  } catch (error) {
    console.error("❌ 메타데이터 생성 실패:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = MetadataGenerator;
