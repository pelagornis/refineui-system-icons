# Scripts

Shared scripts for RefineUI System Icons. Run from repo root.

## Source of truth

- **`fonts/icon-mapping.json`** – Unicode/codepoint for each icon (size, style). Used by font CSS, metadata sync, and Android XML.

## Generate (outputs source/assets)

| Script | Purpose |
|--------|---------|
| `generate-metadata.js` | Root metadata from assets + fonts (legacy). |
| `generate_font_css.py` | Font CSS from `icon-mapping.json` (root `fonts/*.css`). |
| `generate_platforms.py` | Orchestrates: Android XML, iOS Swift, Flutter Dart, Web packages. |
| `generate_android_xml.py` | Android drawable XMLs (unicode from icon-mapping). |
| `generate_ios_swift.py` | iOS Swift icon code. |
| `generate_flutter_dart.py` | Flutter Dart icon code. |
| `generate_web_icons.py` | React, Web, CDN, React Native package source. |

## Sync

| Script | Purpose |
|--------|---------|
| `sync-web-icons-unicode.js` | Syncs `unicodeMapping` in all 4 package `metadata.json` from `fonts/icon-mapping.json`. |

## Build

| Script | Purpose |
|--------|---------|
| `build_fonts.py` | TTF → WOFF2/WOFF, then font CSS. |
| `build_platforms.py` | Build React Native, Flutter, iOS, Android, web-test. |
| `build_all.py` | Full pipeline: metadata → font CSS → generate platforms → npm build → fonts → platform builds. |

## Release / other

| Script | Purpose |
|--------|---------|
| `release_all_platforms.py` | Release packaging for all platforms. |
| `release.sh` | Tag-based release (patch/minor/major). |
| `version_bump.py` | Bump version across package.json and platform files. |
| `figma_icon_extractor.py` | Extract icons from Figma. |
| `test_release.py` | Test that release scripts exist and run. |

## Shared

- **`_lib.py`** – `run_command()`, `ROOT_DIR`, `SCRIPTS_DIR`. Used by build_* and generate_platforms.
