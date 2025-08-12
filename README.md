# Refine UI System Icons

Refine UI System Icons are a collection of modern icons from Pelagornis.

![Official](https://img.shields.io/badge/project-official-green.svg?colorA=303033&colorB=226af6&label=Pelagornis)
[![License](https://img.shields.io/github/license/pelagornis/refineui-system-icons)](https://github.com/pelagornis/refineui-system-icons/blob/main/LICENSE)

## 🚀 Figma 아이콘 자동 추출 시스템

Microsoft Fluent UI System Icons 구조를 참고하여 설계된 확장 가능한 아이콘 추출 시스템입니다.

### ✨ 주요 기능

- **Figma API 자동 추출**: Figma 파일에서 System Icons 자동 검색 및 추출
- **다중 플랫폼 지원**: Web, iOS, Android, Flutter
- **크기별 분류**: 16x16, 20x20, 24x24, 32x32, 48x48
- **플랫폼별 네이밍**: Web(kebab-case), iOS(camelCase), Android(snake_case)
- **메타데이터 관리**: JSON 기반 아이콘 메타데이터 저장
- **자동화 스크립트**: Python 기반 빌드 자동화

### 📁 프로젝트 구조

```
refineui-system-icons/
├── scripts/
│   ├── figma_icon_extractor.py  # Figma 아이콘 추출기
│   ├── build_all.py             # 전체 플랫폼 빌드
│   ├── build_web.py             # Web용 빌드 (React + React Native + Web)
│   ├── build_ios.py             # iOS용 빌드
│   └── build_android.py         # Android용 빌드
├── assets/                      # 추출된 아이콘 파일들
│   ├── web/{size}/              # Web용 SVG
│   ├── ios/{size}/              # iOS용 SVG
│   ├── android/res/drawable-{dpi}/ # Android용 Vector Drawable
│   └── flutter/{size}/          # Flutter용 SVG
├── metadata/                    # 아이콘 메타데이터
│   ├── icons.json              # 전체 메타데이터
│   ├── icons_web.json          # Web용 메타데이터
│   ├── icons_ios.json          # iOS용 메타데이터
│   └── icons_android.json      # Android용 메타데이터
└── packages/                    # 플랫폼별 패키지
    ├── react-icons/             # @refineui/react-icons (React 웹용)
    ├── react-native-icons/      # @refineui/react-native-icons (React Native용)
    └── icons-web/               # @refineui/icons-web (URL 접근 가능한 웹 버전)
```

### 🛠️ 설치 및 사용법

#### 1. 의존성 설치

```bash
pip install -r requirements.txt
```

#### 2. Figma API 토큰 설정

**🔑 필수 설정**: Figma API를 사용하려면 Personal Access Token이 필요합니다.

1. [Figma Settings](https://www.figma.com/settings)에서 Personal Access Token 생성
2. 토큰을 환경변수로 설정하거나 스크립트 실행 시 전달

**📖 자세한 설정 가이드**: [docs/FIGMA_SETUP.md](docs/FIGMA_SETUP.md)

#### 3. 아이콘 추출

```bash
# 방법 1: 인수로 직접 전달
python scripts/figma_icon_extractor.py \
  --token YOUR_FIGMA_TOKEN \
  --file-key YOUR_FIGMA_FILE_KEY

# 방법 2: 환경변수 사용
export FIGMA_TOKEN="your_token_here"
export FIGMA_FILE_KEY="your_file_key_here"
python scripts/figma_icon_extractor.py

# 방법 3: .env 파일 사용
cp env.example .env
# .env 파일을 편집하여 실제 토큰과 파일 키 입력
python scripts/figma_icon_extractor.py

# 특정 페이지에서 추출
python scripts/figma_icon_extractor.py \
  --token YOUR_FIGMA_TOKEN \
  --file-key YOUR_FIGMA_FILE_KEY \
  --page "System Icons"
```

#### 4. 플랫폼별 빌드

```bash
# 모든 플랫폼 빌드
python scripts/build_all.py

# 개별 플랫폼 빌드
python scripts/build_web.py      # React + React Native + Web 버전
python scripts/build_ios.py      # iOS용 Asset Catalog
python scripts/build_android.py  # Android용 Vector Drawable

# 패키지 빌드
npm run build:packages           # 모든 패키지 빌드
npm run build --workspace=@refineui/react-icons
npm run build --workspace=@refineui/react-native-icons
npm run build --workspace=@refineui/icons-web
```

### 📦 패키지 구조

| 패키지                           | 설명                           | 사용법                                                            | 크기 지원            |
| -------------------------------- | ------------------------------ | ----------------------------------------------------------------- | -------------------- |
| **@refineui/react-icons**        | React 웹용 아이콘 컴포넌트     | `import { AccessTime24Icon } from '@refineui/react-icons'`        | 16, 20, 24, 32, 48px |
| **@refineui/react-native-icons** | React Native용 아이콘 컴포넌트 | `import { AccessTime24Icon } from '@refineui/react-native-icons'` | 16, 20, 24, 32, 48dp |
| **@refineui/icons-web**          | URL 접근 가능한 웹 버전        | `https://your-domain.com/icons/24/access-time.svg`                | 16, 20, 24, 32, 48px |

### 📋 지원 플랫폼

| 플랫폼           | 네이밍 규칙 | 출력 형식        | 크기 지원                          |
| ---------------- | ----------- | ---------------- | ---------------------------------- |
| **React Web**    | camelCase   | React 컴포넌트   | 16, 20, 24, 32, 48px               |
| **React Native** | camelCase   | React Native SVG | 16, 20, 24, 32, 48dp               |
| **Web URL**      | kebab-case  | SVG 파일         | 16, 20, 24, 32, 48px               |
| **iOS**          | camelCase   | Asset Catalog    | 16, 20, 24, 32, 48pt               |
| **Android**      | snake_case  | Vector Drawable  | mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi |

### 🔧 설정 옵션

#### 아이콘 크기 매핑

```python
supported_sizes = [16, 20, 24, 32, 48]
dpi_mapping = {
    16: "mdpi",
    20: "hdpi",
    24: "xhdpi",
    32: "xxhdpi",
    48: "xxxhdpi"
}
```

#### 플랫폼별 네이밍 규칙

```python
naming_rules = {
    "web": "kebab-case",      # icon-name.svg
    "ios": "camelCase",       # iconName.svg
    "android": "snake_case",  # icon_name.svg
    "flutter": "snake_case"   # icon_name.svg
}
```

### 📊 메타데이터 구조

```json
{
  "web": [
    {
      "name": "Access Time",
      "slug": "access-time",
      "size": 24,
      "node_id": "1:2",
      "file_path": "assets/web/24/access-time.svg"
    }
  ],
  "ios": [
    {
      "name": "Access Time",
      "slug": "accessTime",
      "size": 24,
      "node_id": "1:2",
      "file_path": "assets/ios/24/accessTime.svg"
    }
  ]
}
```

### 🤖 CI/CD 지원

GitHub Actions를 통한 자동화 지원:

```yaml
name: Build Icons
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:
    inputs:
      figma_token:
        description: "Figma API Token"
        required: true
        type: string
      figma_file_key:
        description: "Figma File Key"
        required: true
        type: string
      page_name:
        description: "Page name containing icons"
        required: false
        type: string
        default: "System Icons"

jobs:
  extract-and-build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: "3.9"

      - name: Install Python dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt

      - name: Install Node.js dependencies
        run: npm install

      - name: Extract icons from Figma
        run: |
          python scripts/figma_icon_extractor.py \
            --token ${{ github.event.inputs.figma_token || secrets.FIGMA_TOKEN }} \
            --file-key ${{ github.event.inputs.figma_file_key || secrets.FIGMA_FILE_KEY }} \
            --page "${{ github.event.inputs.page_name || 'System Icons' }}"
        env:
          FIGMA_TOKEN: ${{ github.event.inputs.figma_token || secrets.FIGMA_TOKEN }}

      - name: Build all platforms
        run: python scripts/build_all.py

      - name: Build packages
        run: npm run build:packages

      - name: Upload artifacts
        uses: actions/upload-artifact@v3
        with:
          name: built-icons
          path: |
            assets/
            metadata/
            packages/
            ios/RefineIcons/
          retention-days: 30

      - name: Commit changes
        if: github.ref == 'refs/heads/main'
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add -A
          git diff --quiet && git diff --staged --quiet || git commit -m "Auto-build icons from Figma"
          git push
```

### 🔗 참고 자료

- [Microsoft Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [React Icons](https://react-icons.github.io/react-icons/)

### 📝 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
