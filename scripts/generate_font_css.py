#!/usr/bin/env python3
"""
RefineUI System Icons - Font CSS Generator
Generates CSS from fonts/icon-mapping.json (source of truth for unicode).
"""

import json
import sys
from pathlib import Path


def generate_font_css():
    """Generates font CSS using icon-mapping.json for correct unicode."""
    project_root = Path(__file__).parent.parent
    fonts_dir = project_root / "fonts"
    icon_mapping_path = fonts_dir / "icon-mapping.json"

    if not fonts_dir.exists():
        print(f"❌ Font directory not found: {fonts_dir}")
        return False
    if not icon_mapping_path.exists():
        print(f"❌ icon-mapping.json not found: {icon_mapping_path}")
        return False

    with open(icon_mapping_path, "r", encoding="utf-8") as f:
        icon_mapping = json.load(f)

    # Find font files (by stem: refineui-system-icons-regular, refineui-system-icons-filled)
    ttf_files = list(fonts_dir.glob("*.ttf"))
    woff2_files = list(fonts_dir.glob("*.woff2"))
    woff_files = list(fonts_dir.glob("*.woff"))
    font_files = ttf_files + woff2_files + woff_files
    if not font_files:
        print("❌ Font files not found.")
        return False

    # Build icon classes from icon-mapping (correct unicode per class)
    icons_by_style = {"regular": [], "filled": []}
    for css_class, entry in icon_mapping.get("icons", {}).items():
        style = entry.get("style")
        if style not in icons_by_style:
            continue
        unicode_val = entry.get("unicode")
        if unicode_val is not None:
            hex_part = hex(int(unicode_val))[2:].upper()
            if len(hex_part) <= 4:
                hex_part = hex_part.zfill(4)
            content_hex = "\\" + hex_part
        else:
            content_hex = (entry.get("unicode_hex") or "").strip()
            if content_hex and not content_hex.startswith("\\"):
                content_hex = "\\" + content_hex
        icons_by_style[style].append((css_class, content_hex, entry.get("name"), entry.get("size")))

    # Font type for src
    def font_type(p):
        if p.suffix == ".ttf":
            return "truetype"
        if p.suffix == ".woff2":
            return "woff2"
        if p.suffix == ".woff":
            return "woff"
        return "truetype"

    for font_file in font_files:
        font_name = font_file.stem
        font_family = font_name.replace("-", " ").title()
        is_regular = "regular" in font_name.lower()
        is_filled = "filled" in font_name.lower()
        style = "regular" if is_regular else ("filled" if is_filled else None)
        if style is None:
            continue

        css_file = font_file.with_suffix(".css")
        ft = font_type(font_file)
        css_content = f"""/* RefineUI System Icons Font CSS - {font_family} */
@font-face {{
    font-family: '{font_family}';
    src: url('./{font_file.name}') format('{ft}');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}}

/* Icon classes (from icon-mapping.json) */
"""
        for css_class, content_hex, _name, _size in icons_by_style.get(style, []):
            if not content_hex:
                continue
            css_content += f""".{css_class}:before {{
    font-family: '{font_family}';
    font-weight: normal;
    font-style: normal;
    content: "{content_hex}";
}}
"""
        css_file.write_text(css_content, encoding="utf-8")
        print(f"✅ {css_file.name} generated")

    print("🎉 Font CSS generation completed!")
    return True


if __name__ == "__main__":
    success = generate_font_css()
    sys.exit(0 if success else 1)
