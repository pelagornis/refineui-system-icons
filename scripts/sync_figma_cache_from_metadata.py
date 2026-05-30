#!/usr/bin/env python3
"""
Sync figma_cache.json from Figma Desktop get_metadata XML export.

Usage:
  1. Export System Icons page metadata via Figma Desktop MCP to a file
  2. python3 scripts/sync_figma_cache_from_metadata.py path/to/metadata.xml
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CACHE_PATH = ROOT / "figma_cache.json"
SKIP = {"Row", "Column", "Content", "System Icons", "Placeholder"}


def parse_variants(text: str) -> dict[str, str]:
    results: dict[str, str] = {}
    lines = text.splitlines()
    i = 0
    while i < len(lines):
        m = re.search(r'<frame id="([^"]+)" name="([^"]+)"', lines[i])
        if m and "Size=" not in lines[i]:
            name = m.group(2)
            if (
                name not in SKIP
                and not re.match(r"^[A-Z]$", name)
                and not re.match(r"^\d+,\s*\w+", name)
            ):
                block: list[str] = []
                i += 1
                while i < len(lines) and "</frame>" not in lines[i]:
                    block.append(lines[i])
                    i += 1
                content = "\n".join(block)
                if "Size=" in content:
                    for sm in re.finditer(
                        r'<symbol id="([^"]+)" name="Size=(\d+),\s*Theme=(Regular|Filled)"',
                        content,
                        re.I,
                    ):
                        sid, size, theme = sm.group(1), sm.group(2), sm.group(3).lower()
                        results[f"{name}_{size}_{theme}"] = sid
        i += 1
    return results


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/sync_figma_cache_from_metadata.py <metadata.xml>")
        return 1

    meta_path = Path(sys.argv[1])
    if not meta_path.exists():
        print(f"❌ File not found: {meta_path}")
        return 1

    variants = parse_variants(meta_path.read_text(encoding="utf-8"))
    cache = json.loads(CACHE_PATH.read_text(encoding="utf-8")) if CACHE_PATH.exists() else {}

    added = 0
    updated = 0
    for key, node_id in variants.items():
        if key not in cache:
            cache[key] = {"node_id": node_id, "file_hash": "", "last_modified": ""}
            added += 1
        elif cache[key].get("node_id") != node_id:
            cache[key]["node_id"] = node_id
            updated += 1

    CACHE_PATH.write_text(json.dumps(cache, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"✅ figma_cache.json synced: +{added} new, {updated} updated, total {len(cache)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
