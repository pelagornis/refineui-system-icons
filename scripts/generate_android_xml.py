#!/usr/bin/env python3
"""
RefineUI System Icons - Android XML Generator
Generates Android XML drawable files.
Uses fonts/icon-mapping.json for correct unicode per icon/size/style.
"""

import json
import sys
from pathlib import Path


def load_icon_mapping(project_root):
    """Load icon-mapping.json (source of truth for unicode)."""
    path = project_root / "fonts" / "icon-mapping.json"
    if not path.exists():
        return None
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def get_icon_names_from_mapping(icon_mapping):
    """
    Extract unique icon names from icon-mapping.json css_class.
    css_class format: ic_refineui_<name>_<size>_<style>  e.g. ic_refineui_local_language_24_regular
    Returns sorted list of <name> (supports names with underscores, e.g. local_language).
    """
    if not icon_mapping or not icon_mapping.get("icons"):
        return None
    names = set()
    for css_class in icon_mapping["icons"].keys():
        if not css_class.startswith("ic_refineui_"):
            continue
        parts = css_class[len("ic_refineui_"):].split("_")
        if len(parts) >= 3:
            # last two are size and style
            name = "_".join(parts[:-2])
            names.add(name)
    return sorted(names)


def generate_android_xml():
    """Generates Android XML drawable files."""
    print("🤖 Android XML generation started...")
    
    project_root = Path(__file__).parent.parent
    android_dir = project_root / "android"
    icon_mapping = load_icon_mapping(project_root)
    if not icon_mapping:
        print("⚠️  fonts/icon-mapping.json not found; unicode will be wrong (size as codepoint).")
    
    ICON_NAMES = get_icon_names_from_mapping(icon_mapping)
    if not ICON_NAMES:
        print("⚠️  No icon names from icon-mapping; cannot generate Android XML.")
        return False
    
    if not android_dir.exists():
        print(f"❌ Android directory not found: {android_dir}")
        return False
    
    # Icon sizes
    ICON_SIZES = [16, 20, 24, 28, 32, 48]
    
    # Styles
    ICON_STYLES = ['regular', 'filled']
    
    # Create drawable directory
    drawable_dir = android_dir / "app" / "src" / "main" / "res" / "drawable"
    drawable_dir.mkdir(parents=True, exist_ok=True)

    # Remove invalid drawables (Android allows only [a-z0-9_]; hyphens are invalid)
    for f in drawable_dir.glob("ic_refineui_*.xml"):
        if "-" in f.stem:
            f.unlink()

    # Generate XML files for each icon
    # Android resource names must be [a-z0-9_]; hyphens are invalid
    total_files = 0
    for icon_name in ICON_NAMES:
        android_name = icon_name.replace("-", "_")
        for size in ICON_SIZES:
            for style in ICON_STYLES:
                xml_content = generate_xml_content(icon_name, size, style, icon_mapping)
                xml_filename = f"ic_refineui_{android_name}_{size}_{style}.xml"
                xml_path = drawable_dir / xml_filename
                
                with open(xml_path, 'w', encoding='utf-8') as f:
                    f.write(xml_content)
                
                total_files += 1
    
    print(f"✅ Android XML generation completed: {total_files} files")
    return True

def generate_xml_content(icon_name: str, size: int, style: str, icon_mapping: dict = None) -> str:
    """Generates XML drawable content. Uses icon-mapping.json unicode when available."""
    css_class = f"ic_refineui_{icon_name}_{size}_{style}"
    unicode_codepoint = None
    if icon_mapping and icon_mapping.get("icons") and css_class in icon_mapping["icons"]:
        unicode_codepoint = icon_mapping["icons"][css_class].get("unicode")
    if unicode_codepoint is None:
        unicode_codepoint = 0xF0000 + size  # fallback (wrong but avoids crash)
    # Use actual Unicode character so XML is valid UTF-8
    text_char = chr(int(unicode_codepoint))
    
    xml_content = f"""<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="{size}dp"
    android:height="{size}dp"
    android:viewportWidth="{size}"
    android:viewportHeight="{size}">
    
    <text
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="{text_char}"
        android:textSize="{size}sp"
        android:textColor="@android:color/black"
        android:fontFamily="RefineUI-System-Icons-{style.title()}"
        android:gravity="center" />
        
</vector>"""
    
    return xml_content

if __name__ == "__main__":
    success = generate_android_xml()
    sys.exit(0 if success else 1)
