#!/usr/bin/env python3
"""Extract a version section from flutter/CHANGELOG.md for GitHub Releases."""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CHANGELOG = ROOT / "flutter" / "CHANGELOG.md"


def extract_section(version: str) -> str:
    if not CHANGELOG.exists():
        return f"## {version}\n\n- Release {version}\n"

    lines = CHANGELOG.read_text(encoding="utf-8").splitlines()
    header = f"## {version}"
    start = next((i for i, line in enumerate(lines) if line.strip() == header), None)
    if start is None:
        return f"## {version}\n\n- Release {version}\n"

    end = len(lines)
    for j in range(start + 1, len(lines)):
        if lines[j].startswith("## "):
            end = j
            break
    return "\n".join(lines[start:end]).strip() + "\n"


def build_release_notes(version: str) -> str:
    changelog = extract_section(version).rstrip()
    footer = f"""
### Installation

**npm**
```bash
npm install @refineui/react-icons@{version}
npm install @refineui/web-icons@{version}
npm install @refineui/icon-cdn@{version}
npm install @refineui/react-native-icons@{version}
```

**Flutter**
```yaml
dependencies:
  refineui_system_icons: ^{version}
```

**Android**
```gradle
implementation 'com.pelagornis:refineui-system-icons:{version}'
```

**iOS (Swift Package Manager)**
```swift
.package(url: "https://github.com/pelagornis/refineui-system-icons.git", from: "{version}")
```
"""
    return f"{changelog}\n{footer}"


def main() -> int:
    if len(sys.argv) < 2:
        print(
            "Usage: python3 scripts/extract_changelog_section.py <version> [output_path]",
            file=sys.stderr,
        )
        return 1

    version = sys.argv[1]
    notes = build_release_notes(version)
    if len(sys.argv) >= 3:
        out = Path(sys.argv[2])
        out.write_text(notes, encoding="utf-8")
        print(f"Wrote {out}")
    else:
        print(notes, end="")
    return 0


if __name__ == "__main__":
    sys.exit(main())
