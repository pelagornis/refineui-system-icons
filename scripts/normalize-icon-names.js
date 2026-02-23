#!/usr/bin/env node
/**
 * One-time: Normalize icon "name" in fonts/icon-mapping.json and metadata/metadata.json
 * Replaces spaces with hyphens and lowercases (e.g. "Local language" -> "local-language").
 * Run from repo root: node scripts/normalize-icon-names.js
 */

const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");

function toCanonicalName(name) {
  if (typeof name !== "string") return name;
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

// 1. fonts/icon-mapping.json
const iconMappingPath = path.join(projectRoot, "fonts", "icon-mapping.json");
if (fs.existsSync(iconMappingPath)) {
  const data = JSON.parse(fs.readFileSync(iconMappingPath, "utf8"));
  let changed = 0;
  for (const key of Object.keys(data.icons || {})) {
    const entry = data.icons[key];
    if (entry.name) {
      const canonical = toCanonicalName(entry.name);
      if (canonical !== entry.name) {
        entry.name = canonical;
        changed++;
      }
    }
  }
  fs.writeFileSync(iconMappingPath, JSON.stringify(data, null, 2), "utf8");
  console.log("fonts/icon-mapping.json: normalized", changed, "name(s)");
}

// 2. metadata/metadata.json (root) - normalize "name" only (path stays for asset resolution)
const rootMetaPath = path.join(projectRoot, "metadata", "metadata.json");
if (fs.existsSync(rootMetaPath)) {
  const data = JSON.parse(fs.readFileSync(rootMetaPath, "utf8"));
  const icons = data.assets?.icons || [];
  let changed = 0;
  for (const icon of icons) {
    if (icon.name) {
      const canonical = toCanonicalName(icon.name);
      if (canonical !== icon.name) {
        icon.name = canonical;
        changed++;
      }
    }
  }
  fs.writeFileSync(rootMetaPath, JSON.stringify(data, null, 2), "utf8");
  console.log("metadata/metadata.json: normalized", changed, "name(s)");
}

console.log("Done.");
