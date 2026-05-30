#!/usr/bin/env python3
"""Generate missing iOS Assets.xcassets imagesets from assets/*/svg."""

import json
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSETS_DIR = ROOT / "assets"
XCASSETS = ROOT / "ios" / "Resources" / "Assets.xcassets"
SVG_PATTERN = re.compile(r"^ic_refineui_(.+)_(\d+)_(regular|filled)$", re.I)

CONTENTS_JSON = """{{
  "images": [
    {{
      "idiom": "universal",
      "filename": "{filename}"
    }}
  ],
  "info": {{
    "author": "xcode",
    "version": 1
  }},
  "properties": {{
    "template-rendering-intent": "template",
    "preserves-vector-representation": true
  }}
}}
"""


def ios_resource_stem(name_part: str, size: str, style: str) -> str:
    return f"ic_refineui_{name_part.replace('-', '_')}_{size}_{style.lower()}"


def create_imageset(imageset_dir: Path, svg_path: Path, ios_filename: str) -> None:
    imageset_dir.mkdir(parents=True, exist_ok=True)
    shutil.copy2(svg_path, imageset_dir / ios_filename)
    (imageset_dir / "Contents.json").write_text(
        CONTENTS_JSON.format(filename=ios_filename),
        encoding="utf-8",
    )


def generate_ios_assets() -> int:
    if not ASSETS_DIR.exists():
        print(f"❌ Assets directory not found: {ASSETS_DIR}")
        return 1
    if not XCASSETS.exists():
        print(f"❌ iOS asset catalog not found: {XCASSETS}")
        return 1

    created = 0
    skipped = 0

    for svg_path in sorted(ASSETS_DIR.rglob("*.svg")):
        match = SVG_PATTERN.match(svg_path.stem)
        if not match:
            continue

        name_part, size, style = match.group(1), match.group(2), match.group(3).lower()
        ios_stem = ios_resource_stem(name_part, size, style)
        imageset_dir = XCASSETS / f"{ios_stem}.imageset"
        if imageset_dir.exists():
            skipped += 1
            continue

        ios_filename = f"{ios_stem}.svg"
        create_imageset(imageset_dir, svg_path, ios_filename)
        created += 1

    print(f"✅ iOS assets: created {created}, already present {skipped}")
    return 0


if __name__ == "__main__":
    sys.exit(generate_ios_assets())
