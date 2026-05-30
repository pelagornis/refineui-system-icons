#!/usr/bin/env python3
"""Generate Flutter and iOS font-based icon constants from fonts/icon-mapping.json."""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ICON_MAPPING_PATH = ROOT / "fonts" / "icon-mapping.json"
ASSETS_DIR = ROOT / "assets"


def canonical_css_class(name: str, size: str, style: str) -> str:
    return f"ic_refineui_{name}_{size}_{style}"


def entry_preference_score(entry: dict, asset_stems: set[str]) -> tuple[int, str]:
    css_class = entry["css_class"]
    score = 0
    if css_class in asset_stems:
        score += 2
    if css_class == canonical_css_class(entry["name"], entry["size"], entry["style"]):
        score += 1
    return score, css_class


def load_entries():
    data = json.loads(ICON_MAPPING_PATH.read_text(encoding="utf-8"))
    asset_stems = {path.stem for path in ASSETS_DIR.rglob("*.svg")} if ASSETS_DIR.exists() else set()
    by_key: dict[tuple[str, str, str], dict] = {}

    for css_class, entry in sorted((data.get("icons") or {}).items()):
        name = entry.get("name")
        size = entry.get("size")
        style = entry.get("style")
        unicode_val = entry.get("unicode")
        if not name or size is None or not style or unicode_val is None:
            continue

        candidate = {
            "css_class": css_class,
            "name": name,
            "size": str(size),
            "style": style.lower(),
            "unicode": int(unicode_val),
        }
        key = (candidate["name"], candidate["size"], candidate["style"])
        existing = by_key.get(key)
        if existing is None or entry_preference_score(candidate, asset_stems) > entry_preference_score(
            existing, asset_stems
        ):
            by_key[key] = candidate

    entries = sorted(by_key.values(), key=lambda entry: (entry["name"], int(entry["size"]), entry["style"]))
    if len(entries) != len(data.get("icons") or {}):
        skipped = len(data.get("icons") or {}) - len(entries)
        print(f"ℹ️  Deduplicated {skipped} duplicate icon-mapping entries")
    return entries


def dart_const_name(name: str, size: str, style: str) -> str:
    return f"{name.replace('-', '_')}_{size}_{style}"


def swift_case_name(name: str, size: str, style: str) -> str:
    parts = [p for p in re.split(r"[\s\-]+", name) if p]
    base = parts[0] + "".join(p.capitalize() for p in parts[1:])
    return f"{base}{size}{style.capitalize()}"


def swift_resource_name(name: str, size: str, style: str) -> str:
    slug = name.replace("-", "_")
    return f"ic_refineui_{slug}_{size}_{style}"


def display_name(name: str) -> str:
    return " ".join(part.capitalize() for part in name.split("-"))


def generate_flutter(entries):
    icons_out = ROOT / "flutter" / "lib" / "src" / "refineui_icons.dart"
    catalog_out = ROOT / "flutter" / "lib" / "src" / "refineui_icon_catalog.dart"
    icon_lines = [
        "import 'package:flutter/widgets.dart';",
        "",
        "/// RefineUI System Icons (constant style)",
        "class RefineUIIcons {",
        "\tRefineUIIcons._();",
        "",
        "\tstatic const String _kFontPkg = 'refineui_system_icons';",
        "\tstatic const String _regularFamily = 'RefineUI-System-Icons-Regular';",
        "\tstatic const String _filledFamily = 'RefineUI-System-Icons-Filled';",
        "",
    ]
    catalog_lines = [
        "import 'package:flutter/widgets.dart';",
        "",
        "import 'refineui_icons.dart';",
        "",
        "class RefineUIIconDescriptor {",
        "\tconst RefineUIIconDescriptor({",
        "\t\trequired this.name,",
        "\t\trequired this.size,",
        "\t\trequired this.style,",
        "\t\trequired this.displayName,",
        "\t\trequired this.iconData,",
        "\t});",
        "",
        "\tfinal String name;",
        "\tfinal int size;",
        "\tfinal String style;",
        "\tfinal String displayName;",
        "\tfinal IconData iconData;",
        "}",
        "",
        "class RefineUIIconCatalog {",
        "\tRefineUIIconCatalog._();",
        "",
        "\tstatic const List<RefineUIIconDescriptor> all = [",
    ]
    for entry in entries:
        family = "_filledFamily" if entry["style"] == "filled" else "_regularFamily"
        const = dart_const_name(entry["name"], entry["size"], entry["style"])
        icon_lines.append(
            f"\tstatic const IconData {const} = IconData({entry['unicode']}, fontFamily: {family}, fontPackage: _kFontPkg);"
        )
        catalog_lines.append(
            "\t\tRefineUIIconDescriptor("
            f"name: '{entry['name']}', "
            f"size: {entry['size']}, "
            f"style: '{entry['style']}', "
            f"displayName: '{display_name(entry['name'])}', "
            f"iconData: RefineUIIcons.{const}"
            "),"
        )
    icon_lines.append("}")
    icon_lines.append("")
    catalog_lines.extend(["\t];", "}", ""])
    icons_out.write_text("\n".join(icon_lines), encoding="utf-8")
    catalog_out.write_text("\n".join(catalog_lines), encoding="utf-8")
    print(f"✅ Flutter: {icons_out.name} ({len(entries)} icons)")
    print(f"✅ Flutter: {catalog_out.name} ({len(entries)} entries)")


def generate_ios(entries):
    out = ROOT / "ios" / "Sources" / "RefineUIIcons.swift"
    lines = [
        "//",
        "//  Copyright (c) Pelagornis.",
        "//  Licensed under the MIT license.",
        "//",
        "",
        "import Foundation",
        "",
        "/// RefineUI System Icons",
        "@objc public enum RefineUIIcons: Int, Equatable, CaseIterable {",
    ]
    for i, entry in enumerate(entries):
        case = swift_case_name(entry["name"], entry["size"], entry["style"])
        lines.append(f"    case {case} = {i}")
    lines.extend(
        [
            "",
            "    public var resourceString: String {",
            "        switch self {",
        ]
    )
    for entry in entries:
        case = swift_case_name(entry["name"], entry["size"], entry["style"])
        resource = swift_resource_name(entry["name"], entry["size"], entry["style"])
        lines.append(f'        case .{case}: return "{resource}"')
    lines.extend(["        }", "    }", "}", ""])
    out.write_text("\n".join(lines), encoding="utf-8")
    print(f"✅ iOS: {out.name} ({len(entries)} icons)")


def main() -> int:
    if not ICON_MAPPING_PATH.exists():
        print(f"❌ Missing {ICON_MAPPING_PATH}")
        return 1
    entries = load_entries()
    if not entries:
        print("❌ No icon-mapping entries found")
        return 1
    generate_flutter(entries)
    generate_ios(entries)
    return 0


if __name__ == "__main__":
    sys.exit(main())
