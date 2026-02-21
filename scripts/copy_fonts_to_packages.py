#!/usr/bin/env python3
"""
RefineUI System Icons - Copy root fonts/ to all packages that use them.
Run after generate:ttf + build:fonts so web, react-icons, react-native-icons, flutter use the same font build.
"""
import shutil
import sys
from pathlib import Path

from _lib import ROOT_DIR

FONTS_DIR = ROOT_DIR / "fonts"

# (destination dir, list of glob patterns for files to copy)
COPY_TARGETS = [
    # Web / React: woff2, woff, css (bundle uses woff2; css has unicode from icon-mapping)
    (ROOT_DIR / "packages" / "web-icons" / "fonts", ["*.woff2", "*.woff", "*.css"]),
    (ROOT_DIR / "packages" / "react-icons" / "fonts", ["*.woff2", "*.woff", "*.css"]),
    (ROOT_DIR / "packages" / "react-native-icons" / "fonts", ["*.woff2", "*.woff", "*.css"]),
    # Flutter: TTF only (pubspec references .ttf)
    (ROOT_DIR / "flutter" / "lib" / "fonts", ["*.ttf"]),
]


def main():
    if not FONTS_DIR.is_dir():
        print(f"❌ Fonts directory not found: {FONTS_DIR}")
        return 1
    print("📋 Copying root fonts to packages...\n")
    for dest_dir, patterns in COPY_TARGETS:
        if not dest_dir.parent.exists():
            print(f"⏭️  Skip (parent missing): {dest_dir}")
            continue
        dest_dir.mkdir(parents=True, exist_ok=True)
        copied = 0
        for pattern in patterns:
            for src in FONTS_DIR.glob(pattern):
                shutil.copy2(src, dest_dir / src.name)
                copied += 1
                print(f"  {dest_dir.name}/ {src.name}")
        if copied:
            print(f"✅ {dest_dir.relative_to(ROOT_DIR)} ({copied} files)\n")
    print("🎉 Copy fonts to packages completed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
