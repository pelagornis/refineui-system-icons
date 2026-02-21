#!/usr/bin/env python3
"""
RefineUI System Icons - Generate TTF from SVGs using fonts/icon-mapping.json.
Run with: fontforge -script scripts/generate_ttf_from_svg.py
Requires: fontforge, and assets/*/svg/*.svg (paths in icon-mapping via css_class = stem).
Outputs: fonts/refineui-system-icons-regular.ttf, fonts/refineui-system-icons-filled.ttf
"""
from __future__ import print_function

import json
import os
import sys

# When run with fontforge -script, fontforge is already in path
try:
    import fontforge
except ImportError:
    print("Run with: fontforge -script scripts/generate_ttf_from_svg.py", file=sys.stderr)
    sys.exit(1)

# Paths: script lives in scripts/, project root is parent
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(SCRIPT_DIR)
FONTS_DIR = os.path.join(ROOT, "fonts")
ASSETS_DIR = os.path.join(ROOT, "assets")
ICON_MAPPING_PATH = os.path.join(FONTS_DIR, "icon-mapping.json")

FONT_NAME = "RefineUI System Icons"
STYLES = ("regular", "filled")
OUTPUT_NAMES = {"regular": "refineui-system-icons-regular.ttf", "filled": "refineui-system-icons-filled.ttf"}


def find_svg_by_stem():
    """Build map: filename stem (no .svg) -> absolute path."""
    stem_to_path = {}
    if not os.path.isdir(ASSETS_DIR):
        return stem_to_path
    for dirpath, _dirnames, filenames in os.walk(ASSETS_DIR):
        for f in filenames:
            if f.endswith(".svg"):
                stem = f[:-4]
                stem_to_path[stem] = os.path.join(dirpath, f)
    return stem_to_path


def load_icon_mapping():
    with open(ICON_MAPPING_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def build_style_glyphs(icons_obj):
    """Return dict: style -> list of (css_class, unicode_int)."""
    by_style = {"regular": [], "filled": []}
    for css_class, entry in (icons_obj or {}).items():
        style = entry.get("style")
        if style not in by_style:
            continue
        u = entry.get("unicode")
        if u is None:
            continue
        by_style[style].append((css_class, int(u)))
    return by_style


def generate_style_font(style, glyph_list, stem_to_path, font_family_name):
    """Create one TTF for the given style."""
    font = fontforge.font()
    font.familyname = font_family_name
    font.fullname = font_family_name
    font.fontname = font_family_name.replace(" ", "-")
    font.version = "1.0"

    added = 0
    missing = []
    for css_class, unicode_val in glyph_list:
        svg_path = stem_to_path.get(css_class)
        if not svg_path or not os.path.isfile(svg_path):
            missing.append(css_class)
            continue
        try:
            glyph = font.createChar(unicode_val)
            glyph.importOutlines(svg_path)
            added += 1
        except Exception as e:
            print("  Warning: {} (unicode {}): {}".format(css_class, unicode_val, e), file=sys.stderr)

    if missing:
        print("  Missing SVG for {} glyphs (e.g. {})".format(len(missing), missing[:3]), file=sys.stderr)
    out_path = os.path.join(FONTS_DIR, OUTPUT_NAMES[style])
    font.generate(out_path)
    print("  Generated {} ({} glyphs)".format(out_path, added))
    return added


def main():
    if not os.path.isfile(ICON_MAPPING_PATH):
        print("icon-mapping.json not found: {}".format(ICON_MAPPING_PATH), file=sys.stderr)
        sys.exit(1)
    if not os.path.isdir(FONTS_DIR):
        os.makedirs(FONTS_DIR)

    data = load_icon_mapping()
    stem_to_path = find_svg_by_stem()
    print("Found {} SVGs under assets/".format(len(stem_to_path)))

    by_style = build_style_glyphs(data.get("icons"))
    styles_config = data.get("styles") or {}
    for style in STYLES:
        glyph_list = by_style.get(style, [])
        if not glyph_list:
            print("No glyphs for style: {}".format(style))
            continue
        font_family = (styles_config.get(style) or {}).get("font_family") or "RefineUI-System-Icons-{}".format(style.title())
        print("Building {} ({} glyphs)...".format(style, len(glyph_list)))
        generate_style_font(style, glyph_list, stem_to_path, font_family)

    print("TTF generation done.")
    return 0


if __name__ == "__main__":
    sys.exit(main() or 0)
