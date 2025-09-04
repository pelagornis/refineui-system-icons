#!/usr/bin/env node
/**
 * RefineUI System Icons - Metadata Generator
 * Extracts icon information from assets folder to generate metadata.json.
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
    console.log("📋 Metadata generation started...");

    try {
      // 1. Extract icon information from assets folder
      const iconAssets = await this.extractIconAssets();
      console.log(`📁 Found ${iconAssets.length} icon assets`);

      // 2. Extract icon information from fonts
      const fontIcons = await this.extractFontIcons();
      console.log(`🔤 Found ${fontIcons.length} font icons`);

      // 3. Generate metadata
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

      // 4. Save metadata file
      await fs.ensureDir(path.dirname(this.metadataFile));
      await fs.writeJson(this.metadataFile, metadata, { spaces: 2 });

      console.log("✅ Metadata generation completed!");
      console.log(`📊 Total ${metadata.totalIcons} icons`);
      console.log(`📁 Assets: ${metadata.assets.count}`);
      console.log(`🔤 Fonts: ${metadata.fonts.count}`);

      return metadata;
    } catch (error) {
      console.error("❌ Metadata generation failed:", error);
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
      console.warn("⚠️  Failed to read Assets folder:", error.message);
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

            // Extract icon classes from CSS
            const iconClasses = this.extractIconClassesFromCSS(cssContent);
            icons.push(...iconClasses);
          }
        }
      }
    } catch (error) {
      console.warn("⚠️  Failed to read Fonts folder:", error.message);
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
      console.warn(
        `⚠️  Failed to extract icon info (${iconName}):`,
        error.message
      );
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

// Main execution
async function main() {
  try {
    const generator = new MetadataGenerator();
    await generator.generateMetadata();
  } catch (error) {
    console.error("❌ Metadata generation failed:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = MetadataGenerator;
