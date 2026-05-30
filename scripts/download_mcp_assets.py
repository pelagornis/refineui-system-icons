#!/usr/bin/env python3
"""Download SVG assets from Figma MCP asset URLs into assets/ structure."""

import json
import re
import sys
from pathlib import Path

import requests

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))
from figma_icon_extractor import _cache_key_to_path  # noqa: E402


def normalize_svg(svg_text: str, size: int) -> str:
    svg_text = re.sub(r'fill="var\(--fill-0,\s*black\)"', 'fill="black"', svg_text)
    svg_text = re.sub(
        r'<svg[^>]*>',
        f'<svg width="{size}" height="{size}" viewBox="0 0 {size} {size}" fill="none" xmlns="http://www.w3.org/2000/svg">',
        svg_text,
        count=1,
    )
    return svg_text


def download_one(cache_key: str, asset_url: str, assets_root: Path) -> bool:
    match = re.match(r"^(.+)_(\d+)_(regular|filled)$", cache_key)
    if not match:
        print(f"⚠️  Skip invalid key: {cache_key}")
        return False

    _, size, _ = match.group(1), match.group(2), match.group(3)
    _, file_path = _cache_key_to_path(cache_key, assets_root)

    try:
        response = requests.get(asset_url, timeout=30)
        response.raise_for_status()
        svg = normalize_svg(response.text, int(size))
        file_path.parent.mkdir(parents=True, exist_ok=True)
        file_path.write_text(svg, encoding="utf-8")
        print(f"✅ {cache_key} -> {file_path.relative_to(ROOT)}")
        return True
    except Exception as exc:
        print(f"❌ {cache_key}: {exc}")
        return False


def main():
    manifest_path = ROOT / "scripts" / "mcp_asset_manifest.json"
    if not manifest_path.exists():
        print(f"❌ Manifest not found: {manifest_path}")
        sys.exit(1)

    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    assets_root = ROOT / "assets"
    ok = sum(download_one(key, url, assets_root) for key, url in manifest.items())
    print(f"🎉 Downloaded {ok}/{len(manifest)} icons")
    sys.exit(0 if ok == len(manifest) else 1)


if __name__ == "__main__":
    main()
