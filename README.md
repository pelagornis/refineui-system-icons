# Refine UI System Icons

Refine UI System Icons are a collection of modern icons from Pelagornis.

![Official](https://img.shields.io/badge/project-official-green.svg?colorA=303033&colorB=226af6&label=Pelagornis)
[![License](https://img.shields.io/github/license/pelagornis/refineui-system-icons)](https://github.com/pelagornis/refineui-system-icons/blob/main/LICENSE)

## 🚀 Figma Icon Automatic Extraction System

An extensible icon extraction system designed with reference to Microsoft Fluent UI System Icons structure.

### ✨ Key Features

- **Figma API Automatic Extraction**: Automatic search and extraction of System Icons from Figma files
- **Multi-platform Support**: Web, iOS, Android, Flutter
- **Size-based Classification**: 16x16, 20x20, 24x24, 32x32, 48x48
- **Platform-specific Naming**: Web(kebab-case), iOS(camelCase), Android(snake_case)
- **Metadata Management**: JSON-based icon metadata storage
- **Automation Scripts**: Python-based build automation

### 📁 Project Structure

```
refineui-system-icons/
├── scripts/
│   ├── figma_icon_extractor.py  # Figma icon extractor
│   ├── build_all.py             # All platform build
│   ├── build_web.py             # Web build (React + React Native + Web)
│   ├── build_ios.py             # iOS build
│   └── build_android.py         # Android build
├── assets/                      # Extracted icon files
│   ├── web/{size}/              # Web SVG

│   ├── ios/{size}/              # iOS SVG
│   ├── android/res/drawable-{dpi}/ # Android Vector Drawable
│   └── flutter/{size}/          # Flutter SVG
├── metadata/                    # Icon metadata
│   ├── icons.json              # Complete metadata
│   ├── icons_web.json          # Web metadata
│   ├── icons_ios.json          # iOS metadata
│   └── icons_android.json      # Android metadata
└── packages/                    # Platform-specific packages
    ├── react-icons/             # @refineui/react-icons (React web)
    ├── react-native-icons/      # @refineui/react-native-icons (React Native)
    └── icons-web/               # @refineui/icons-web (URL accessible web version)
```

### 🛠️ Installation and Usage

#### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

#### 2. Figma API Token Setup

**🔑 Required Setup**: Personal Access Token is required to use Figma API.

1. Generate Personal Access Token from [Figma Settings](https://www.figma.com/settings)
2. Set token as environment variable or pass it when running the script

**📖 Detailed Setup Guide**: [docs/FIGMA_SETUP.md](docs/FIGMA_SETUP.md)

#### 3. Icon Extraction

```bash
# Method 1: Pass directly as arguments
python scripts/figma_icon_extractor.py \
  --token YOUR_FIGMA_TOKEN \
  --file-key YOUR_FIGMA_FILE_KEY

# Method 2: Use environment variables
export FIGMA_TOKEN="your_token_here"
export FIGMA_FILE_KEY="your_file_key_here"
python scripts/figma_icon_extractor.py

# Method 3: Use .env file
cp env.example .env
# Edit .env file to enter actual token and file key
python scripts/figma_icon_extractor.py

# Extract from specific page
python scripts/figma_icon_extractor.py \
  --token YOUR_FIGMA_TOKEN \
  --file-key YOUR_FIGMA_FILE_KEY \
  --page "System Icons"
```

#### 4. Platform-specific Build

```bash
# Build all platforms
python scripts/build_all.py

# Individual platform build
python scripts/build_web.py      # React + React Native + Web version
python scripts/build_ios.py      # iOS Asset Catalog
python scripts/build_android.py  # Android Vector Drawable

# Package build
npm run build:packages           # Build all packages
npm run build --workspace=@refineui/react-icons
npm run build --workspace=@refineui/react-native-icons
npm run build --workspace=@refineui/icons-web
```

### 📦 Package Structure

| Package                          | Description                  | Usage                                                             | Size Support         |
| -------------------------------- | ---------------------------- | ----------------------------------------------------------------- | -------------------- |
| **@refineui/react-icons**        | React web icon components    | `import { AccessTime24Icon } from '@refineui/react-icons'`        | 16, 20, 24, 32, 48px |
| **@refineui/react-native-icons** | React Native icon components | `import { AccessTime24Icon } from '@refineui/react-native-icons'` | 16, 20, 24, 32, 48dp |
| **@refineui/icons-web**          | URL accessible web version   | `https://your-domain.com/icons/24/access-time.svg`                | 16, 20, 24, 32, 48px |
| **Font**                         | Web font version             | `<i class="ri ri-access-time"></i>`                               | All sizes supported  |

### 📋 Supported Platforms

| Platform            | Naming Convention | Output Format    | Size Support                       |
| ------------------- | ----------------- | ---------------- | ---------------------------------- |
| **React Web**       | camelCase         | React Components | 16, 20, 24, 32, 48px               |
| **React Native**    | camelCase         | React Native SVG | 16, 20, 24, 32, 48dp               |
| **Web URL**         | kebab-case        | SVG Files        | 16, 20, 24, 32, 48px               |
| **Font**            | kebab-case        | Web Fonts        | All sizes supported                |
| **iOS**             | camelCase         | Asset Catalog    | 16, 20, 24, 32, 48pt               |
| **Android**         | snake_case        | Vector Drawable  | mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi |
| **Android Library** | snake_case        | Android Library  | mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi |

### 🔧 Configuration Options

#### Icon Size Mapping

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

#### Platform-specific Naming Rules

```python
naming_rules = {
    "web": "kebab-case",      # icon-name.svg
    "ios": "camelCase",       # iconName.svg
    "android": "snake_case",  # icon_name.svg
    "flutter": "snake_case"   # icon_name.svg
}
```

### 📊 Metadata Structure

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

### 🤖 CI/CD Support

Automation support through GitHub Actions:

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

### 📦 패키지 사용법

#### React Web (`@refineui/react-icons`)

```bash
npm install @refineui/react-icons
```

```jsx
import { AccessTime24Icon } from "@refineui/react-icons";

function App() {
  return (
    <div>
      <AccessTime24Icon />
      <AccessTime24Icon size={32} />
      <AccessTime24Icon color="#007bff" />
    </div>
  );
}
```

#### React Native (`@refineui/react-native-icons`)

```bash
npm install @refineui/react-native-icons
```

```jsx
import { AccessTime24Icon } from "@refineui/react-native-icons";

function App() {
  return (
    <View>
      <AccessTime24Icon />
      <AccessTime24Icon size={32} />
      <AccessTime24Icon color="#007bff" />
    </View>
  );
}
```

#### Web URL (`@refineui/icons-web`)

```html
<!-- 직접 SVG 사용 -->
<img src="https://your-domain.com/icons/24/access-time.svg" alt="Access Time" />

<!-- 또는 CSS로 배경 이미지 사용 -->
<div
  style="background-image: url('https://your-domain.com/icons/24/access-time.svg')"
></div>
```

#### Android Library

```gradle
// app/build.gradle
dependencies {
    implementation project(':refineui-icons')
}
```

```xml
<!-- XML에서 사용 -->
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_access_time_24_regular" />
```

```kotlin
// Kotlin에서 사용
val iconDrawable = ContextCompat.getDrawable(context, R.drawable.ic_refineui_access_time_24_regular)
imageView.setImageDrawable(iconDrawable)
```

#### Font (웹폰트)

```html
<!-- CSS 파일 포함 -->
<link rel="stylesheet" href="./fonts/refineui-system-icons.css" />

<!-- 아이콘 사용 -->
<i class="ri ri-access-time"></i>
<i class="ri ri-access-time" style="font-size: 24px; color: #007bff;"></i>
```

**폰트 사용의 장점:**

- 🚀 **빠른 로딩**: 하나의 폰트 파일로 모든 아이콘 로드
- 🎨 **쉬운 스타일링**: CSS로 크기, 색상, 애니메이션 제어
- 📱 **반응형**: 모든 디바이스에서 일관된 렌더링
- 🔧 **간단한 사용**: HTML 클래스만으로 아이콘 표시

### 🔗 참고 자료

- [Microsoft Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [React Icons](https://react-icons.github.io/react-icons/)

### 📝 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
