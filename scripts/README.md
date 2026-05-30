# Scripts

RefineUI System Icons 빌드·릴리즈 스크립트. **repo root**에서 실행합니다.

## Source of truth

| 경로 | 역할 |
|------|------|
| `assets/*/svg/*.svg` | 원본 SVG |
| `fonts/icon-mapping.json` | unicode, css_class, name (**핵심**) |
| `figma_cache.json` | Figma 추출 캐시 |

## Canonical 빌드 (로컬 / CI)

```bash
npm run build:all
```

내부 순서:

1. `generate:metadata` (legacy, optional)
2. `generate:icon-mapping` — assets → icon-mapping.json
3. `generate:ttf` → `build:fonts` → `copy:fonts`
4. `generate:platforms` — Android, iOS, Flutter, Web packages **src**
5. `sync:web-icons-unicode` — icon-mapping → package metadata.json
6. `build:icon-cdn` — CDN SVG 복사
7. `npm run build` — packages dist
8. `build_platforms.py` — example 앱 빌드 (optional)

신규 아이콘 반영 시 Figma 추출:

```bash
npm run extract:figma:cache          # figma_cache.json 기반
# 또는
npm run extract:figma                # Figma REST API
# 토큰 만료 시: sync_figma_cache_from_metadata.py + download_mcp_assets.py
npm run build:all
```

---

## Figma → assets

| Script | Purpose |
|--------|---------|
| `figma_icon_extractor.py` | Figma REST / cache / build-cache |
| `sync_figma_cache_from_metadata.py` | Desktop MCP metadata → figma_cache.json |
| `download_mcp_assets.py` | MCP asset URL → SVG (REST 403 fallback) |

npm: `extract:figma`, `extract:figma:cache`, `extract:figma:build-cache`

---

## Font / unicode

| Script | npm | Purpose |
|--------|-----|---------|
| `generate_icon_mapping.py` | `generate:icon-mapping` | assets → icon-mapping.json |
| `generate_ttf_from_svg.py` | `generate:ttf` | SVG → TTF (glyph centering) |
| `generate_font_css.py` | `generate:fonts` | icon-mapping → CSS |
| `build_fonts.py` | `build:fonts` | TTF → WOFF2/WOFF + CSS |
| `copy_fonts_to_packages.py` | `copy:fonts` | fonts → web/react/rn/flutter |
| `sync-web-icons-unicode.js` | `sync:web-icons-unicode` | icon-mapping → 4 package metadata |

---

## Platform generation

| Script | npm / 호출 | Purpose |
|--------|------------|---------|
| `generate_platforms.py` | `generate:platforms` | **오케스트레이터** |
| `generate_android_xml.py` | `generate:android` | Android drawable XML |
| `generate_ios.py` | `generate:ios` | iOS font constants + xcassets |
| `generate_font_platform_icons.py` | (via platforms/ios) | Flutter Dart + iOS Swift font enum |
| `generate_ios_assets.py` | (via platforms/ios) | iOS Assets.xcassets |
| `generate_flutter_dart.py` | `generate:flutter` | Flutter catalog |
| `generate_web_icons.py` | `generate:web-icons` | react / web / rn / cdn **src** |

---

## Build / release

| Script | npm | Purpose |
|--------|-----|---------|
| `build_all.py` | `build:all` | 전체 파이프라인 |
| `build_platforms.py` | `build:platforms` | example 앱 빌드 (web, flutter, …) |
| `version_bump.py` | `version:bump` | 버전 일괄 bump |
| `release.sh` | — | tag 릴리즈 |
| `release_all_platforms.py` | `release:all` | 멀티 플랫폼 릴리즈 |

---

## Legacy / optional

| Script | Note |
|--------|------|
| `generate-metadata.js` | `metadata/metadata.json` 생성. icon-mapping + package metadata가 주력 |
| `normalize-icon-names.js` | 1회성 name 정규화. 필요 시 수동 실행 |
| `test_release.py` | 릴리즈 스크립트 smoke test |

---

## Shared

- **`_lib.py`** — `run_command()`, `ROOT_DIR`, `SCRIPTS_DIR`

## Removed (2025)

- `generate_ios_swift.py` — xcassets 스캔 기반 구 generator. `generate_ios.py`로 대체
- `packages/react-icons/scripts/*` — `generate_web_icons.py`로 통합
