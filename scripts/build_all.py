#!/usr/bin/env python3
"""RefineUI System Icons - Full build: metadata, fonts, platforms, packages."""
import sys
from pathlib import Path

from _lib import ROOT_DIR, SCRIPTS_DIR, run_command


def main():
    print("🎯 RefineUI System Icons full build\n")
    run_command("npm run generate:metadata", "Metadata generation")
    run_command(f"python3 {SCRIPTS_DIR}/generate_font_css.py", "Font CSS generation")
    run_command(f"python3 {SCRIPTS_DIR}/generate_platforms.py", "Platform file generation")
    run_command("npm run build", "Packages build")
    run_command(f"python3 {SCRIPTS_DIR}/build_fonts.py", "Font build")
    run_command(f"python3 {SCRIPTS_DIR}/build_platforms.py", "Platform builds", required=False)
    print("🎉 Full build completed!")
    return 0


if __name__ == "__main__":
    sys.exit(main())
