#!/usr/bin/env python3
"""
RefineUI System Icons - Android XML Generator
Converts assets/*/svg/*.svg into VectorDrawable XML for app + library modules.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
APP_DRAWABLE = ROOT / "android" / "app" / "src" / "main" / "res" / "drawable"
LIB_DRAWABLE = ROOT / "android" / "library" / "src" / "main" / "res" / "drawable"

ICON_SIZES = [16, 20, 24, 28, 32, 48]
ICON_STYLES = ["regular", "filled"]
SVG_NAME_RE = re.compile(r"^ic_refineui_(.+)_(\d+)_(regular|filled)\.svg$", re.I)


def strip_ns(text: str) -> str:
    return re.sub(r'\sxmlns="[^"]+"', "", text, count=1)


def build_stem_index() -> dict[str, Path]:
    """stem -> svg path"""
    index: dict[str, Path] = {}
    if not ASSETS.exists():
        return index
    for svg in ASSETS.rglob("*.svg"):
        index[svg.stem] = svg
    return index


def find_svg(index: dict[str, Path], icon_name: str, size: int, style: str) -> Path | None:
    """icon_name may use _ or - ; try both."""
    variants = {
        f"ic_refineui_{icon_name}_{size}_{style}",
        f"ic_refineui_{icon_name.replace('_', '-')}_{size}_{style}",
        f"ic_refineui_{icon_name.replace('-', '_')}_{size}_{style}",
    }
    for stem in variants:
        if stem in index:
            return index[stem]
    return None


def parse_svg_paths(svg_path: Path) -> tuple[float, float, list[dict]]:
    text = strip_ns(svg_path.read_text(encoding="utf-8"))
    root = ET.fromstring(text)
    vb = root.get("viewBox")
    if vb:
        parts = [float(x) for x in vb.replace(",", " ").split()]
        vw, vh = parts[2], parts[3]
    else:
        vw = float(root.get("width") or 24)
        vh = float(root.get("height") or vw)

    paths: list[dict] = []

    def walk(el, inherited_fill_rule=None):
        tag = el.tag.split("}")[-1] if isinstance(el.tag, str) else ""
        fr = el.get("fill-rule") or el.get("clip-rule") or inherited_fill_rule
        if tag == "mask":
            # Prefer mask content as geometry when present (legacy Figma exports)
            for child in list(el):
                walk(child, fr)
            return
        if tag == "circle" and el.get("fill", "black").lower() != "none":
            cx = float(el.get("cx") or 0)
            cy = float(el.get("cy") or 0)
            r = float(el.get("r") or 0)
            if r > 0:
                d = f"M {cx-r:g} {cy:g} A {r:g} {r:g} 0 1 1 {cx+r:g} {cy:g} A {r:g} {r:g} 0 1 1 {cx-r:g} {cy:g} Z"
                paths.append({"d": d, "evenodd": False, "masked": False})
            return
        if tag == "path" and el.get("d"):
            fill = (el.get("fill") or "black").strip()
            if fill.lower() == "none":
                return
            # Skip light-gray Figma duplicates when a mask sibling pattern exists
            if fill.upper() == "#D9D9D9":
                return
            paths.append(
                {
                    "d": el.get("d"),
                    "evenodd": (fr or "").lower() == "evenodd",
                    "masked": el.get("mask") is not None,
                }
            )
        for child in list(el):
            walk(child, fr)

    walk(root)

    # If we still have a masked black path AND unmasked paths, drop the masked
    # full-rect filler (Figma stroke) when unmasked geometry exists — assets
    # should already be flattened; this is a safety net.
    unmasked = [p for p in paths if not p["masked"]]
    if unmasked and any(p["masked"] for p in paths):
        paths = unmasked

    return vw, vh, paths


def svg_d_to_android(d: str) -> str:
    """SVG path data is largely compatible; normalize separators for Android."""
    d = d.strip()
    d = re.sub(r"[,\s]+", " ", d)
    d = re.sub(r"\s*([MmLlHhVvCcSsQqTtAaZz])\s*", r"\1", d)
    # re-add space after commands for readability / AAPT friendliness
    d = re.sub(r"([MmLlHhVvCcSsQqTtAaZz])", r" \1 ", d)
    d = re.sub(r"\s+", " ", d).strip()
    return d


def vector_xml(size: int, vw: float, vh: float, paths: list[dict]) -> str:
    lines = [
        '<?xml version="1.0" encoding="utf-8"?>',
        '<vector xmlns:android="http://schemas.android.com/apk/res/android"',
        f'    android:width="{size}dp"',
        f'    android:height="{size}dp"',
        f'    android:viewportWidth="{vw:g}"',
        f'    android:viewportHeight="{vh:g}">',
    ]
    if not paths:
        # empty stub — avoid silent circle placeholder
        lines.append("    <!-- no paths found in source SVG -->")
    for p in paths:
        fill_type = ' android:fillType="evenOdd"' if p["evenodd"] else ""
        d = svg_d_to_android(p["d"])
        lines.append(
            f'    <path android:fillColor="#FF000000"{fill_type} android:pathData="{d}"/>'
        )
    lines.append("</vector>")
    lines.append("")
    return "\n".join(lines)


def icon_names_from_assets(index: dict[str, Path]) -> list[str]:
    names: set[str] = set()
    for stem in index:
        m = SVG_NAME_RE.match(stem + ".svg")
        if not m:
            continue
        names.add(m.group(1).replace("-", "_").lower())
    return sorted(names)


def generate_android_xml() -> bool:
    print("🤖 Android XML generation started...")
    index = build_stem_index()
    if not index:
        print("❌ No SVGs under assets/")
        return False

    names = icon_names_from_assets(index)
    print(f"  {len(names)} icons, {len(index)} SVG files")

    APP_DRAWABLE.mkdir(parents=True, exist_ok=True)
    LIB_DRAWABLE.mkdir(parents=True, exist_ok=True)

    # Remove hyphenated invalid resource names in app drawable
    for f in APP_DRAWABLE.glob("ic_refineui_*.xml"):
        if "-" in f.stem:
            f.unlink()

    total = 0
    missing = 0
    empty = 0
    for icon_name in names:
        android_name = icon_name.replace("-", "_")
        for size in ICON_SIZES:
            for style in ICON_STYLES:
                svg = find_svg(index, icon_name, size, style)
                if not svg:
                    missing += 1
                    continue
                vw, vh, paths = parse_svg_paths(svg)
                if not paths:
                    empty += 1
                xml = vector_xml(size, vw, vh, paths)
                app_path = APP_DRAWABLE / f"ic_refineui_{android_name}_{size}_{style}.xml"
                lib_path = LIB_DRAWABLE / f"{android_name}_{size}_{style}.xml"
                app_path.write_text(xml, encoding="utf-8")
                lib_path.write_text(xml, encoding="utf-8")
                total += 2

    print(f"✅ Android XML done: wrote {total} files ({missing} size/style gaps, {empty} empty-path SVGs)")
    return True


if __name__ == "__main__":
    sys.exit(0 if generate_android_xml() else 1)
