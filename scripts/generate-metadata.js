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
        // Asset folders are the source of truth; font entries are derived glyphs.
        totalIcons: iconAssets.length,
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
      // Glyphs live under `assets/<Icon>/svg/` (and optional png/). Count
      // recursively so metadata matches what designers see on disk.
      const svgFiles = await this.listFilesRecursive(iconPath, ".svg");
      const pngFiles = await this.listFilesRecursive(iconPath, ".png");
      const sizes = new Set();
      const styles = new Set();
      for (const file of svgFiles) {
        const match = /_(\d+)_(regular|filled)\.svg$/i.exec(file);
        if (match) {
          sizes.add(Number(match[1]));
          styles.add(match[2].toLowerCase());
        }
      }

      return {
        name: iconName,
        path: path.relative(this.projectRoot, iconPath),
        files: {
          svg: svgFiles.length,
          png: pngFiles.length,
          total: svgFiles.length + pngFiles.length,
        },
        sizes: [...sizes].sort((a, b) => a - b),
        styles: [...styles].sort(),
        formats: svgFiles.length > 0 ? ["svg"] : pngFiles.length > 0 ? ["png"] : [],
      };
    } catch (error) {
      console.warn(
        `⚠️  Failed to extract icon info (${iconName}):`,
        error.message
      );
      return null;
    }
  }

  async listFilesRecursive(dir, extension) {
    const out = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        out.push(...(await this.listFilesRecursive(full, extension)));
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith(extension)) {
        out.push(full);
      }
    }
    return out;
  }

  extractIconClassesFromCSS(cssContent) {
    const icons = [];
    const iconClassRegex = /\.ic_refineui_(.+?)_(\d+)_(regular|filled):before/g;
    let match;

    while ((match = iconClassRegex.exec(cssContent)) !== null) {
      const iconName = match[1];
      const size = Number(match[2]);
      const style = match[3];

      icons.push({
        name: iconName,
        size,
        style: style,
        type: "font",
        class: match[0].replace(/:before$/, ""),
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
