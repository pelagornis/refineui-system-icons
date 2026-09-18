#!/usr/bin/env python3
"""Flatten SVGs for icon-font import: remove Figma masks, picosvg evenodd → nonzero-safe paths.

Writes flattened copies under fonts/.svg-flat/ mirroring css_class stem names.
Used by generate_ttf_from_svg.py before FontForge importOutlines.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
FLAT_DIR = ROOT / "fonts" / ".svg-flat"

try:
    from picosvg.svg import SVG as PicoSVG
except ImportError:
    PicoSVG = None  # type: ignore


def _strip_ns(text: str) -> str:
    return re.sub(r'\sxmlns="[^"]+"', "", text, count=1)


def flatten_figma_mask(src: Path) -> str | None:
    """If SVG has a Figma inside-stroke <mask>, return mask child paths as black fills."""
    text = src.read_text(encoding="utf-8")
    if "<mask" not in text:
        return None
    root = ET.fromstring(_strip_ns(text))
    w, h, vb = root.get("width"), root.get("height"), root.get("viewBox")
    mask = next((ch for ch in list(root) if ch.tag == "mask"), None)
    if mask is None:
        return None
    parts = []
    for pe in list(mask):
        if pe.tag != "path" or not pe.get("d"):
            continue
        attrs = f'd="{pe.get("d")}" fill="black"'
        if pe.get("fill-rule"):
            attrs += f' fill-rule="{pe.get("fill-rule")}"'
        if pe.get("clip-rule"):
            attrs += f' clip-rule="{pe.get("clip-rule")}"'
        parts.append(f"<path {attrs}/>")
    if not parts:
        return None
    return (
        f'<svg width="{w}" height="{h}" viewBox="{vb}" fill="none" '
        f'xmlns="http://www.w3.org/2000/svg">\n'
        + "\n".join(parts)
        + "\n</svg>\n"
    )


def picosvg_text(svg_text: str) -> str:
    if PicoSVG is None:
        return svg_text
    # picosvg wants a file-like / path — use fromstring via temp write
    import tempfile

    with tempfile.NamedTemporaryFile("w", suffix=".svg", delete=False, encoding="utf-8") as f:
        f.write(svg_text)
        tmp = Path(f.name)
    try:
        return PicoSVG.parse(str(tmp)).topicosvg().tostring()
    finally:
        tmp.unlink(missing_ok=True)


def flatten_file(src: Path, dest: Path) -> bool:
    text = src.read_text(encoding="utf-8")
    masked = flatten_figma_mask(src)
    if masked is not None:
        text = masked
    try:
        text = picosvg_text(text)
    except Exception as e:
        print(f"  picosvg skip {src.name}: {e}", file=sys.stderr)
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(text if text.endswith("\n") else text + "\n", encoding="utf-8")
    return True


def flatten_all_assets() -> int:
    FLAT_DIR.mkdir(parents=True, exist_ok=True)
    n = 0
    for svg in sorted(ASSETS.rglob("*.svg")):
        dest = FLAT_DIR / f"{svg.stem}.svg"
        flatten_file(svg, dest)
        n += 1
        if n % 500 == 0:
            print(f"  flattened {n}...")
    print(f"Flattened {n} SVGs → {FLAT_DIR}")
    return n


if __name__ == "__main__":
    if PicoSVG is None:
        print("Install picosvg: pip3 install picosvg", file=sys.stderr)
        sys.exit(1)
    flatten_all_assets()
