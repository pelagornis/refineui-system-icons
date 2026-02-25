#!/usr/bin/env python3
"""
RefineUI System Icons - Generate icon-mapping.json from assets/*/svg
Scans assets for ic_refineui_*.svg, assigns unicode codepoints, writes fonts/icon-mapping.json.
Run BEFORE generate:ttf so TTF and CSS include all icons from assets.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSETS_DIR = ROOT / "assets"
FONTS_DIR = ROOT / "fonts"
ICON_MAPPING_PATH = FONTS_DIR / "icon-mapping.json"
UNICODE_START = 0xF0000  # 983040, Private Use Area


def find_all_svg_stems():
    """Scan assets/*/svg/*.svg, return list of (stem, name, size, style)."""
    stems = []
    pattern = re.compile(r"^ic_refineui_(.+)_(\d+)_(regular|filled)\.svg$", re.I)
    if not ASSETS_DIR.exists():
        return stems
    for svg_path in ASSETS_DIR.rglob("*.svg"):
        stem = svg_path.stem
        m = pattern.match(svg_path.name)
        if not m:
            continue
        name_part, size, style = m.group(1), m.group(2), m.group(3).lower()
        # name: "navigation" or "add-square" -> keep hyphenated
        name = name_part.replace("_", "-").lower()
        stems.append((stem, name, size, style))
    return sorted(stems, key=lambda x: (x[1], int(x[2]), x[3]))  # name, size, style


def build_icon_mapping():
    """Build icon-mapping from assets. Merge with existing to preserve unicode for known icons."""
    stems = find_all_svg_stems()
    css_class_to_entry = {}

    # Load existing for unicode preservation
    if ICON_MAPPING_PATH.exists():
        with open(ICON_MAPPING_PATH, "r", encoding="utf-8") as f:
            existing = json.load(f)
        css_class_to_entry = dict(existing.get("icons", {}))
        unicode_start = existing.get("unicode_start", UNICODE_START)
    else:
        unicode_start = UNICODE_START

    # Find max unicode in use (for new icons)
    max_unicode = unicode_start - 1
    for entry in css_class_to_entry.values():
        u = entry.get("unicode")
        if u is not None and int(u) > max_unicode:
            max_unicode = int(u)
    next_unicode = max_unicode + 1

    # Add missing icons from assets
    added = 0
    for stem, name, size, style in stems:
        css_class = stem  # ic_refineui_navigation_16_regular
        if css_class in css_class_to_entry:
            continue
        css_class_to_entry[css_class] = {
            "name": name,
            "size": size,
            "style": style,
            "unicode": next_unicode,
            "unicode_hex": f"\\{hex(next_unicode)[2:].upper().zfill(6)}",
            "css_class": css_class,
        }
        next_unicode += 1
        added += 1

    # Build output
    regular_count = sum(1 for e in css_class_to_entry.values() if e.get("style") == "regular")
    filled_count = sum(1 for e in css_class_to_entry.values() if e.get("style") == "filled")
    output = {
        "font_name": "RefineUI System Icons",
        "version": "0.1.1",
        "unicode_start": unicode_start,
        "styles": {
            "regular": {"font_family": "RefineUI-System-Icons-Regular", "count": regular_count},
            "filled": {"font_family": "RefineUI-System-Icons-Filled", "count": filled_count},
        },
        "icons": {k: v for k, v in sorted(css_class_to_entry.items())},
    }
    return output, added


def main():
    print("📋 Generating icon-mapping from assets...")
    FONTS_DIR.mkdir(parents=True, exist_ok=True)
    output, added = build_icon_mapping()
    with open(ICON_MAPPING_PATH, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    total = len(output["icons"])
    print(f"✅ icon-mapping.json: {total} icons (신규 {added}개)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
