# RefineUI System Icons 🎨

A professional icon system created with reference to Microsoft FluentUI System Icons. It's an integrated icon package that can be used in React, React Native, and Web environments.

## 📦 Package Structure

```
packages/
├── react-icons/          # React icon package
├── react-native-icons/   # React Native icon package
└── web-icons/           # Web icon package
```

## 🚀 Installation and Usage

### React

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

// === FLUENTUI Style Method ===
// Unsized method (default 24px)
const accessibilityIcon = <AccessibilityRegular style={{ color: "blue" }} />;
const addIconFilled = <AddFilled style={{ fontSize: "20px" }} />;

// Sized method
const addIcon16 = <Add16Filled style={{ color: "red" }} />;
const homeIcon32 = <Home32Regular style={{ marginRight: "8px" }} />;
```

### React Native

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

// In React Native, icons are rendered as Text components

// === FLUENTUI Style Method ===
// Unsized method
const accessibilityIcon = <AccessibilityRegular style={{ color: "blue" }} />;
const addIconFilled = <AddFilled style={{ fontSize: 20 }} />;

// Sized method
const addIcon16 = <Add16Filled style={{ color: "red" }} />;
const homeIcon32 = <Home32Regular style={{ marginRight: 8 }} />;
```

### Web

```bash
npm install @refineui/web-icons
```

```javascript
import {
  AccessibilityRegular,
  Add16Filled,
  Home32Regular,
  SearchFilled,
} from "@refineui/web-icons";

// Returns icon as string
const accessibilityIcon = AccessibilityRegular(); // Returns string
const addIconFilled = AddFilled(); // Returns string

// Sized method
const addIcon16 = Add16Filled(); // Returns string
const homeIcon32 = Home32Regular(); // Returns string

// Apply to DOM element
const iconElement = document.createElement("span");
iconElement.textContent = addIcon16;
iconElement.style.fontFamily = "RefineUI-System-Icons-Filled";
```

## 🎯 Key Features

### 1. Centralized Metadata

- All icon information stored in `metadata.json`
- Easy maintenance with automatic mapping system

### 2. Platform-Specific Optimization

- **React**: Renders as React components
- **React Native**: Renders as Text components
- **Web**: Returns strings for direct DOM application

### 3. Multiple Size Support

- 16px, 20px, 24px, 28px, 32px, 48px
- Optimized icons for each size

### 4. Style Support

- **Regular**: Default style
- **Filled**: Filled style

### 5. TypeScript Support

- Complete TypeScript type definitions
- Enhanced development experience with IntelliSense support

### 6. FluentUI Style API

#### Unsized Method (default 24px)

```tsx
// AccessibilityRegular, AccessibilityFilled
<AccessibilityRegular style={{ color: "blue" }} />
<AddFilled style={{ fontSize: "20px" }} />
```

#### Sized Method

```tsx
// Accessibility16Regular, Accessibility24Filled
<Add16Filled style={{ color: "red" }} />
<Home32Regular style={{ marginRight: "8px" }} />
```

### 7. Utility Functions

```javascript
import IconUtils from "@refineui/react-icons";

// Available icon list
const icons = IconUtils.getAvailableIcons();

// Font family information
const fontFamilies = IconUtils.getFontFamilies();

// Available sizes
const sizes = IconUtils.getAvailableSizes();

// Icon information lookup
const iconInfo = IconUtils.getIconInfo("Accessibility");

// Icon search
const searchResults = IconUtils.searchIcons("add");
```

### 8. Dynamic Icon Generation

All icons are generated dynamically, so you can use the `createIcon` function as needed:

```typescript
import { createIcon } from "@refineui/react-icons";

// Generate icon dynamically
const icon = createIcon("AccessibilityRegular", { style: { color: "red" } });
```

### 9. Metadata System

All icon information is managed through a centralized metadata system:

```javascript
// Check icon information from metadata
const iconInfo = IconUtils.getIconInfo("Accessibility");
console.log(iconInfo);
// {
//   name: "Accessibility",
//   slug: "accessibility",
//   size: [16, 20, 24, 28, 32, 48],
//   style: ["filled", "regular"],
//   description: "Used in accessibility scenarios.",
//   unicodeMapping: { ... }
// }
```

## 🔧 Development

### Extract Icons from Figma

To extract icons from Figma, you first need to set up the API:

1. **Create Figma Personal Access Token**

   - Figma → Settings → Personal access tokens → Create new token
   - For detailed information, see [docs/FIGMA_SETUP.md](docs/FIGMA_SETUP.md)

2. **Environment Setup**

   ```bash
   cp .env.example .env
   # Set FIGMA_TOKEN and FIGMA_FILE_KEY in .env file
   ```

3. **Extract Icons**

   ```bash
   # Incremental update (modified only)
   python scripts/figma_icon_extractor.py

   # Full synchronization
   python scripts/figma_icon_extractor.py --full-sync
   ```

### Generate Metadata

```bash
npm run generate:metadata
```

### Build

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

## 📋 Supported Icons

Currently **434 unique icons** are supported!

### Main Icon Categories:

- **UI/UX**: Accessibility, Add, Search, Settings, Checkmark, Home
- **Technology**: Android, Ios, Windows, Macos, Git, Javascript, Typescript
- **Media**: Camera, Video, Music, Image, Movie
- **Business**: Calendar, Chart, Document, Mail, Payment
- **Development**: Code, Database, Server, Api, Terminal
- **Others**: Heart, Star, Fire, Cloud, Weather, etc.

### Supported Formats:

- **Regular & Filled Styles**: Two styles for each icon
- **6 Sizes**: 16px, 20px, 24px, 28px, 32px, 48px
- **Total 5,208 Methods**: Supports all combinations

### Usage Examples:

```tsx
// Unsized method (default 24px)
<AccessibilityRegular />
<AddFilled />
<HomeRegular />

// Sized method
<Add16Filled />
<Search32Regular />
<Settings48Filled />
```

## 🤝 References

This project was created with reference to the structure and API design of [Microsoft FluentUI System Icons](https://github.com/microsoft/fluentui-system-icons).

## 📄 License

MIT License
