#!/usr/bin/env python3
"""RefineUI System Icons - Full build: metadata, fonts, platforms, packages."""
import sys

from _lib import SCRIPTS_DIR, run_command


def main():
    print("🎯 RefineUI System Icons full build\n")

    # 1. Metadata & mapping (icon-mapping.json is source of truth for unicode)
    run_command("npm run generate:metadata", "Metadata generation", required=False)
    run_command("npm run generate:icon-mapping", "Icon mapping from assets")

    # 2. Fonts — build and copy before npm package build so dist includes latest fonts
    run_command("npm run generate:ttf", "TTF from SVGs", required=False)
    run_command("npm run build:fonts", "Font build (WOFF2/WOFF + CSS)", required=False)
    run_command("npm run copy:fonts", "Copy fonts to packages", required=False)

    # 3. Platform sources & package metadata
    run_command("npm run generate:platforms", "Platform file generation")
    run_command("npm run sync:web-icons-unicode", "Sync package metadata unicode")

    # 4. Icon CDN SVG files, then all npm package dist builds
    run_command("npm run build:icon-cdn", "Icon CDN SVG build", required=False)
    run_command("npm run build", "Packages build")

    # 5. Optional native example app builds
    run_command(f"python3 {SCRIPTS_DIR}/build_platforms.py", "Platform example builds", required=False)

    print("🎉 Full build completed!")
    return 0


if __name__ == "__main__":
    sys.exit(main())
