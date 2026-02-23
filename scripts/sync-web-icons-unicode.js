#!/usr/bin/env node
/**
 * Syncs unicodeMapping in all icon packages' metadata.json
 * from fonts/icon-mapping.json (source of truth for font glyph codepoints).
 * Creates missing icon entries (e.g. "Local language") so names with spaces are included.
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

/** name -> slug (e.g. "Local language" -> "local-language") */
function nameToSlug(name) {
  return String(name)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}

/** Build per-icon-name aggregate from icon-mapping for creating missing entries */
function buildNameToMapping(iconMapping) {
  const byName = new Map();
  for (const [cssClass, entry] of Object.entries(iconMapping.icons || {})) {
    const { name: iconName, size, style, unicode, unicode_hex, css_class } = entry;
    if (!iconName || size === undefined || !style || unicode === undefined) continue;

    if (!byName.has(iconName)) {
      byName.set(iconName, {
        sizes: new Set(),
        styles: new Set(),
        unicodeMapping: {},
      });
    }
    const agg = byName.get(iconName);
    agg.sizes.add(Number(size));
    agg.styles.add(style);
    if (!agg.unicodeMapping[size]) agg.unicodeMapping[size] = {};
    agg.unicodeMapping[size][style] = {
      unicode: Number(unicode),
      unicodeHex: unicode_hex || "\\F" + unicode.toString(16).toUpperCase().padStart(4, "0"),
      cssClass: css_class || cssClass,
    };
  }
  return byName;
}

/** Ensure metadata.icons has an entry for every icon name in icon-mapping (create if missing) */
function ensureMissingIcons(metadata, nameToMapping) {
  const supportedSizes = metadata.supportedSizes || [16, 20, 24, 28, 32, 48];
  const supportedStyles = metadata.supportedStyles || ["regular", "filled"];
  let added = 0;
  for (const [iconName, agg] of nameToMapping) {
    if (metadata.icons[iconName]) continue;
    const sizes = Array.from(agg.sizes).sort((a, b) => a - b);
    const styles = Array.from(agg.styles);
    metadata.icons[iconName] = {
      name: iconName,
      slug: nameToSlug(iconName),
      size: sizes.length ? sizes : supportedSizes,
      style: styles.length ? styles : supportedStyles,
      keyword: "refineui-icon",
      description: `Icon: ${iconName}.`,
      files: [],
      unicodeMapping: agg.unicodeMapping,
    };
    added++;
  }
  return added;
}

function syncOne(iconMapping, metadataPath, nameToMapping) {
  const name = path.basename(path.dirname(path.dirname(metadataPath)));
  if (!fs.existsSync(metadataPath)) {
    console.log(`⏭️  ${name}: no metadata.json, skip`);
    return { updated: 0, skipped: 0, added: 0 };
  }

  const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
  const added = ensureMissingIcons(metadata, nameToMapping);

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
  return { updated, skipped, added };
}

function main() {
  if (!fs.existsSync(iconMappingPath)) {
    console.error("❌ Not found:", iconMappingPath);
    process.exit(1);
  }

  const iconMapping = JSON.parse(fs.readFileSync(iconMappingPath, "utf8"));
  const nameToMapping = buildNameToMapping(iconMapping);
  console.log("🔄 Syncing unicodeMapping from fonts/icon-mapping.json\n");

  let totalUpdated = 0;
  let totalAdded = 0;
  for (const metadataPath of metadataPaths) {
    const pkgName = path.basename(path.dirname(path.dirname(metadataPath)));
    const { updated, skipped, added } = syncOne(iconMapping, metadataPath, nameToMapping);
    totalUpdated += updated;
    totalAdded += added;
    console.log(`   ${pkgName}: updated ${updated}, skipped ${skipped}${added ? `, added ${added}` : ""}`);
  }

  console.log("\n✅ Done. Total mappings updated:", totalUpdated);
  if (totalAdded) console.log("   New icon entries added:", totalAdded);
}

main();
