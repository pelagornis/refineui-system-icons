#!/usr/bin/env python3
"""RefineUI System Icons - Convert TTF to WOFF2/WOFF (fonttools) and generate font CSS."""
import sys
from pathlib import Path

from _lib import ROOT_DIR, SCRIPTS_DIR, run_command


def convert_to_otf(ttf_path: Path, otf_path: Path) -> bool:
    """Convert TTF to OTF using fontforge."""
    import subprocess
    try:
        cmd = [
            "fontforge", "-lang=ff", "-c",
            "Open($argv[1]); Generate($argv[2])",
            str(ttf_path.resolve()),
            str(otf_path.resolve()),
        ]
        subprocess.run(cmd, check=True, capture_output=True)
        print(f"  ✅ OTF: {ttf_path.name}")
        return True
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print(f"  ⚠️ OTF failed: {e}")
        return False


def convert_with_fonttools(ttf_path: Path, woff_path: Path, woff2_path: Path) -> bool:
    """Convert TTF to WOFF and WOFF2 using fonttools. Returns True if at least one succeeded."""
    try:
        from fontTools.ttLib import TTFont
    except ImportError:
        return False
    ok = False
    try:
        font = TTFont(ttf_path)
        font.flavor = "woff2"
        font.save(woff2_path)
        font.close()
        print(f"  ✅ WOFF2: {ttf_path.name}")
        ok = True
    except Exception as e:
        print(f"  ⚠️ WOFF2 failed: {e}")
    try:
        font = TTFont(ttf_path)
        font.flavor = "woff"
        font.save(woff_path)
        font.close()
        print(f"  ✅ WOFF: {ttf_path.name}")
        ok = True
    except Exception as e:
        print(f"  ⚠️ WOFF failed: {e}")
    return ok


def main():
    print("🎨 Font build\n")
    fonts_dir = ROOT_DIR / "fonts"
    if not fonts_dir.exists():
        print(f"❌ Font directory not found: {fonts_dir}")
        return 1

    for ttf in sorted(fonts_dir.glob("*.ttf")):
        woff2 = ttf.with_suffix(".woff2")
        woff = ttf.with_suffix(".woff")
        otf = ttf.with_suffix(".otf")
        # OTF (fontforge)
        convert_to_otf(ttf, otf)
        # WOFF2, WOFF (fonttools)
        if convert_with_fonttools(ttf, woff, woff2):
            continue
        # Fallback to CLI if fonttools failed or not installed
        if not woff2.exists():
            run_command(f"ttf2woff2 {ttf}", f"WOFF2: {ttf.name}", required=False)
        if not woff.exists():
            run_command(f"ttf2woff {ttf}", f"WOFF: {ttf.name}", required=False)

    run_command(f"python3 {SCRIPTS_DIR}/generate_font_css.py", "Font CSS generation")
    print("🎉 Font build completed!")
    return 0


if __name__ == "__main__":
    sys.exit(main())
