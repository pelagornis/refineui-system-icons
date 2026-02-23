# RefineUI System Icons 🎨

![Official](https://badge.pelagornis.com/official.svg)

A professional icon system designed for modern applications. It's an integrated icon package that can be used across multiple platforms including React, React Native, Web, iOS, Android, and Flutter.

## 📦 Package Structure

```
packages/
├── react-icons/          # React icon package
├── react-native-icons/   # React Native icon package
├── web-icons/            # Web icon package
└── icon-cdn/             # CDN package for direct access
```

## 🚀 Quick Installation

### All Platforms (Recommended)

```bash
# Install all platform packages
npm install @refineui/react-icons @refineui/react-native-icons @refineui/web-icons

# Or install individually based on your needs
npm install @refineui/react-icons        # For React web apps
npm install @refineui/react-native-icons # For React Native apps
npm install @refineui/web-icons          # For vanilla web projects
```

## 🎯 Platform-Specific Usage

### 🌐 React (Web)

```bash
npm install @refineui/react-icons
```

```tsx
import {
  AccessibilityRegular,
  Add16Filled,
  Home32Regular,
  SearchFilled,
} from "@refineui/react-icons";

// Unsized method (default 24px)
const accessibilityIcon = <AccessibilityRegular style={{ color: "blue" }} />;
const addIconFilled = <AddFilled style={{ fontSize: "20px" }} />;

// Sized method
const addIcon16 = <Add16Filled style={{ color: "red" }} />;
const homeIcon32 = <Home32Regular style={{ marginRight: "8px" }} />;
```

**Features:**

- 🎯 TypeScript-first with full type safety
- ⚛️ React-optimized components
- 📦 Tree-shakable imports
- 🎨 Multiple sizes (16, 20, 24, 28, 32, 48px)
- 🎭 Two styles (Regular and Filled)
- ♿ Built-in accessibility support

### 📱 React Native

```bash
npm install @refineui/react-native-icons
```

```tsx
import {
  AccessibilityRegular,
  Add16Filled,
  Home32Regular,
  SearchFilled,
} from "@refineui/react-native-icons";

// In React Native, icons are rendered as optimized images
const accessibilityIcon = <AccessibilityRegular style={{ color: "blue" }} />;
const addIconFilled = <AddFilled style={{ fontSize: 20 }} />;
const addIcon16 = <Add16Filled style={{ color: "red" }} />;
const homeIcon32 = <Home32Regular style={{ marginRight: 8 }} />;
```

**Features:**

- 📱 React Native optimized
- 🎨 Flexible styling with tint colors and backgrounds
- ♿ Accessibility labels and hints
- 🚀 Performance optimized for mobile
- 🎯 Touch interaction support

### 🌍 Web (Vanilla JavaScript)

```bash
npm install @refineui/web-icons
```

```javascript
import { createIconHTML, Add, AddFilled, getIconChar, getFontFamily } from "@refineui/web-icons";

// Load font CSS first
import "@refineui/web-icons/dist/fonts/refineui-system-icons.css";

// Using createIconHTML - returns HTML string (icon name: hyphenated, e.g. "add", "local-language")
const addIconHTML = createIconHTML("add", "regular");
const html = addIconHTML(24, "currentColor", "my-icon");
// → <span style="font-family: 'RefineUI-System-Icons-Regular'; ...">...</span>

// Using named exports (signature: (size?, color?, className?) => string)
const span24 = Add(24);                        // regular, size 24
const span32Filled = AddFilled(32, "red", ""); // filled, size 32

// Using utility functions (icon name: hyphenated)
const char = getIconChar("add", "regular", 24);
const font = getFontFamily("regular");
// Use in React/Vue: <span style={{ fontFamily: font }}>{char}</span>
```

**Features:**

- 🔤 Font-based icon system
- 📦 434+ icons supported
- 🎨 Multiple sizes (16, 20, 24, 28, 32, 48px) and styles (regular, filled)
- 🚀 Lightweight and framework-agnostic
- 🔍 Built-in search and filtering via IconUtils

### 🤖 Android

```xml
<!-- Use generated XML drawables -->
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_add_24_regular" />

<!-- Or use vector drawables -->
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="24"
    android:viewportHeight="24">
    <!-- Icon path data -->
</vector>
```

**Features:**

- 🎨 Vector drawables for all screen densities
- 📱 Multiple sizes (16, 20, 24, 28, 32, 48dp)
- 🎭 Regular and filled variants
- 🚀 Optimized for Android performance

### 🍎 iOS

```swift
import RefineUIIcons

// Use generated Swift code
let addIcon = RefineUIIcons.Add24Regular()
let heartIcon = RefineUIIcons.Heart32Filled()

// Customize appearance
addIcon.tintColor = .systemBlue
heartIcon.tintColor = .systemRed
```

**Features:**

- 🍎 Native iOS integration
- 🎨 SF Symbols compatible
- 📱 Multiple sizes and styles
- 🚀 SwiftUI and UIKit support

### 🦋 Flutter

```dart
import 'package:refineui_icons/refineui_icons.dart';

// Use generated Dart code
Icon(RefineUIIcons.add24Regular)
Icon(RefineUIIcons.heart32Filled)

// Customize
Icon(
  RefineUIIcons.settings24Regular,
  color: Colors.blue,
  size: 24.0,
)
```

**Features:**

- 🦋 Flutter-optimized
- 🎨 Material Design compatible
- 📱 Cross-platform consistency
- 🚀 High-performance rendering

## 📌 Icon Naming

- **API / URL / metadata**: Use **hyphenated** names, no spaces (e.g. `add`, `local-language`, `weather-sunny`).
- **React / React Native**: Component names are PascalCase (e.g. `Add`, `LocalLanguageFilled`).
- **Android**: Resource names use underscores (e.g. `ic_refineui_local_language_24_regular`).

See each platform’s README for details.

## 🎯 Key Features

### 1. Centralized Metadata

- All icon information stored in `metadata.json`
- Easy maintenance with automatic mapping system
- Consistent naming across all platforms

### 2. Platform-Specific Optimization

- **React**: Optimized components with TypeScript support
- **React Native**: Mobile-optimized with touch interactions
- **Web**: Font-based system for lightweight usage
- **Android**: Vector drawables for crisp rendering
- **iOS**: Native integration with SF Symbols
- **Flutter**: Cross-platform consistency

### 3. Icon Collection

**434+ Icons covering:**

- 🧭 **Navigation**: home, search, arrow, chevron, location, map
- ⚡ **Actions**: add, edit, delete, save, close, checkmark
- 💬 **Communication**: mail, chat, phone, share, notification
- 🎬 **Media**: play, pause, stop, video, audio, camera
- 👥 **Social**: person, user, group, heart, star
- 💻 **Technology**: computer, laptop, phone, tablet, wifi
- 🌤️ **Weather**: sun, moon, cloud, rain, snow
- 🔧 **Tools**: settings, gear, tool, wrench, hammer

### 4. Consistent Design System

- **Sizes**: 16, 20, 24, 28, 32, 48px variants
- **Styles**: Regular and filled variants
- **Naming**: **Hyphenated** (e.g. `add`, `local-language`) for API/URL and metadata; **PascalCase** for React component names (e.g. `Add`, `LocalLanguageFilled`). No spaces in icon identifiers.
- **Colors**: Customizable tint colors
- **Accessibility**: Built-in alt text and ARIA support

## 🚀 Release Process

### Automated Release

All platforms are automatically released using our streamlined process.

#### Quick Release

```bash
# Patch release (1.0.0 -> 1.0.1)
./scripts/release.sh patch

# Minor release (1.0.0 -> 1.1.0)
./scripts/release.sh minor

# Major release (1.0.0 -> 2.0.0)
./scripts/release.sh major
```

#### Manual Release

```bash
# 1. Update version
npm run version:bump patch  # or minor, major

# 2. Build all platforms
npm run release:all

# 3. Push Git tags (GitHub Actions auto-executes)
git push origin main --tags
```

### GitHub Actions

When you push a tag to GitHub, the following actions automatically execute:

1. **Multi-Platform Build**: Python 3.9-3.11, Node.js 18-20 builds
2. **Platform Packages**: Individual ZIP packages for each platform
3. **Release Assets**: Automatic upload to GitHub releases
4. **Verification**: Release file structure validation

### Release Structure

```
release/
├── refineui-icons-web.zip      # Web icons and CSS
├── refineui-icons-android.zip  # Android XML drawables
├── refineui-icons-ios.zip      # iOS Swift code
├── refineui-icons-flutter.zip  # Flutter Dart code
├── refineui-icons-all.zip      # All platforms combined
└── release-manifest.json       # Release information
```

## 🔧 Development

### Prerequisites

- Node.js 18+
- Python 3.9+
- npm or yarn

### Setup

```bash
# Clone repository
git clone https://github.com/refineui/system-icons.git
cd system-icons

# Install dependencies
npm install
pip install -r requirements.txt

# Build all platforms
npm run build:all
```

### Available Scripts

```bash
# Build commands
npm run build:all          # Build all platforms
npm run build:platforms    # Build platform-specific files
npm run build:fonts        # Build font files

# Generation commands
npm run generate:metadata  # Generate icon metadata
npm run generate:web-icons # Generate web icons
npm run generate:android   # Generate Android XML
npm run generate:ios       # Generate iOS Swift
npm run generate:flutter   # Generate Flutter Dart
npm run generate:fonts     # Generate font CSS

# Release commands
npm run release:all        # Release all platforms
npm run version:bump       # Bump version

# Utility commands
npm run clean              # Clean build files
npm run test               # Run tests
npm run lint               # Lint code
```

## 📚 Documentation

- [React Icons Documentation](packages/react-icons/README.md)
- [React Native Icons Documentation](packages/react-native-icons/README.md)
- [Web Icons Documentation](packages/web-icons/README.md)
- [Icon CDN Documentation](packages/icon-cdn/README.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Built with modern web technologies
- Community-driven development
- Designed for cross-platform consistency

---

**RefineUI System Icons** - Professional icons for every platform 🚀
