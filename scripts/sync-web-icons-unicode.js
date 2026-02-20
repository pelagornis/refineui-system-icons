#!/usr/bin/env node
/**
 * Syncs unicodeMapping in all icon packages' metadata.json
 * from fonts/icon-mapping.json (source of truth for font glyph codepoints).
 *
 * Packages: web-icons, react-icons, react-native-icons, icon-cdn
 * Run from repo root: node scripts/sync-web-icons-unicode.js
 */

const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const iconMappingPath = path.join(projectRoot, "fonts", "icon-mapping.json");

const metadataPaths = [
  path.join(projectRoot, "packages", "web-icons", "src", "metadata.json"),
  path.join(projectRoot, "packages", "react-icons", "src", "metadata.json"),
  path.join(projectRoot, "packages", "react-native-icons", "src", "metadata.json"),
  path.join(projectRoot, "packages", "icon-cdn", "src", "metadata.json"),
];

function syncOne(iconMapping, metadataPath) {
  const name = path.basename(path.dirname(path.dirname(metadataPath)));
  if (!fs.existsSync(metadataPath)) {
    console.log(`⏭️  ${name}: no metadata.json, skip`);
    return { updated: 0, skipped: 0 };
  }

  const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
  let updated = 0;
  let skipped = 0;

  for (const [cssClass, entry] of Object.entries(iconMapping.icons)) {
    const { name: iconName, size, style, unicode, unicode_hex, css_class } = entry;
    if (!iconName || size === undefined || !style || unicode === undefined) continue;

    const iconData = metadata.icons[iconName];
    if (!iconData) {
      skipped++;
      continue;
    }
    if (!iconData.unicodeMapping) iconData.unicodeMapping = {};
    const sizeKey = String(size);
    if (!iconData.unicodeMapping[sizeKey]) iconData.unicodeMapping[sizeKey] = {};
    const prev = iconData.unicodeMapping[sizeKey][style];
    const next = {
      unicode: Number(unicode),
      unicodeHex: unicode_hex || "\\F" + unicode.toString(16).toUpperCase().padStart(4, "0"),
      cssClass: css_class || cssClass,
    };
    if (prev && prev.unicode === next.unicode) continue;
    iconData.unicodeMapping[sizeKey][style] = next;
    updated++;
  }

  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2), "utf8");
  return { updated, skipped };
}

function main() {
  if (!fs.existsSync(iconMappingPath)) {
    console.error("❌ Not found:", iconMappingPath);
    process.exit(1);
  }

  const iconMapping = JSON.parse(fs.readFileSync(iconMappingPath, "utf8"));
  console.log("🔄 Syncing unicodeMapping from fonts/icon-mapping.json\n");

  let totalUpdated = 0;
  for (const metadataPath of metadataPaths) {
    const pkgName = path.basename(path.dirname(path.dirname(metadataPath)));
    const { updated, skipped } = syncOne(iconMapping, metadataPath);
    totalUpdated += updated;
    console.log(`   ${pkgName}: updated ${updated}, skipped ${skipped}`);
  }

  console.log("\n✅ Done. Total mappings updated:", totalUpdated);
}

main();
