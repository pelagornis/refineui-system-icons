#!/usr/bin/env python3
"""RefineUI System Icons - Full build: metadata, fonts, platforms, packages."""
import sys
from pathlib import Path

from _lib import ROOT_DIR, SCRIPTS_DIR, run_command


def main():
    print("🎯 RefineUI System Icons full build\n")
    run_command("npm run generate:metadata", "Metadata generation")
    run_command("npm run generate:ttf", "TTF from SVGs", required=False)
    run_command(f"python3 {SCRIPTS_DIR}/generate_platforms.py", "Platform file generation")
    run_command("npm run build", "Packages build")
    run_command(f"python3 {SCRIPTS_DIR}/build_fonts.py", "Font build (WOFF2/WOFF + CSS)")
    run_command(f"python3 {SCRIPTS_DIR}/copy_fonts_to_packages.py", "Copy fonts to web/react-native/flutter packages")
    run_command(f"python3 {SCRIPTS_DIR}/build_platforms.py", "Platform builds", required=False)
    print("🎉 Full build completed!")
    return 0


if __name__ == "__main__":
    sys.exit(main())
