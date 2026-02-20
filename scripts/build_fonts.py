#!/usr/bin/env python3
"""RefineUI System Icons - Convert TTF to WOFF2/WOFF and generate font CSS."""
import sys
from pathlib import Path

from _lib import ROOT_DIR, SCRIPTS_DIR, run_command


def main():
    print("🎨 Font build\n")
    fonts_dir = ROOT_DIR / "fonts"
    if not fonts_dir.exists():
        print(f"❌ Font directory not found: {fonts_dir}")
        return 1
    for ttf in fonts_dir.glob("*.ttf"):
        woff2 = ttf.with_suffix(".woff2")
        if not woff2.exists():
            run_command(f"ttf2woff2 {ttf}", f"WOFF2: {ttf.name}", required=False)
        woff = ttf.with_suffix(".woff")
        if not woff.exists():
            run_command(f"ttf2woff {ttf}", f"WOFF: {ttf.name}", required=False)
    run_command(f"python3 {SCRIPTS_DIR}/generate_font_css.py", "Font CSS generation")
    print("🎉 Font build completed!")
    return 0


if __name__ == "__main__":
    sys.exit(main())
