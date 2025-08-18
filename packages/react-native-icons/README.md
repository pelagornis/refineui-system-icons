# @refineui/react-native-icons

RefineUI System Icons for React Native - A comprehensive icon library built with modern React Native patterns.

## Installation

```bash
npm install @refineui/react-native-icons
```

## Setup

### 1. Link Fonts

Add the font files to your project:

#### React Native CLI

**Android:**
Copy font files to `android/app/src/main/assets/fonts/`:

- `refineui-system-icons-regular.ttf`
- `refineui-system-icons-filled.ttf`

**iOS:**
Add font files to your Xcode project and update `Info.plist`:

```xml
<key>UIAppFonts</key>
<array>
  <string>refineui-system-icons-regular.ttf</string>
  <string>refineui-system-icons-filled.ttf</string>
</array>
```

#### Expo

Add to your `app.json`:

```json
{
  "expo": {
    "fonts": [
      {
        "asset": "node_modules/@refineui/react-native-icons/assets/fonts/refineui-system-icons-regular.ttf",
        "family": "RefineUI-System-Icons-Regular"
      },
      {
        "asset": "node_modules/@refineui/react-native-icons/assets/fonts/refineui-system-icons-filled.ttf",
        "family": "RefineUI-System-Icons-Filled"
      }
    ]
  }
}
```

## Usage

### Basic Usage

```tsx
import {
  GavelRegular,
  GavelFilled,
  SettingsRegular,
} from "@refineui/react-native-icons";

function App() {
  return (
    <View>
      <GavelRegular size={20} />
      <GavelFilled size={24} color="blue" />
      <SettingsRegular size={32} color="red" />
    </View>
  );
}
```

### Icon Props

All icons accept the following props:

```tsx
interface IconProps {
  size?: 12 | 16 | 20 | 24 | 28 | 32 | 48; // Default: 20
  color?: string; // Default: 'currentColor'
  variant?: "regular" | "filled"; // Default: 'regular'
  style?: any; // Additional styles
}
```

### Size Variants

Icons support multiple sizes for different use cases:

- `12` - Extra small, for dense layouts
- `16` - Small, for compact interfaces
- `20` - Default size, for most use cases
- `24` - Medium, for emphasis
- `28` - Large, for headers
- `32` - Extra large, for hero sections
- `48` - Maximum size, for special cases

### Style Variants

Each icon comes in two styles:

- `regular` - Outline style, lighter appearance
- `filled` - Solid style, more prominent appearance

### Advanced Usage

#### Custom Styling

```tsx
<GavelRegular size={24} color="#0078d4" style={{ marginRight: 8 }} />
```

#### Programmatic Icon Selection

```tsx
import { createIcon } from "@refineui/react-native-icons";

const CustomIcon = createIcon({
  displayName: "CustomIcon",
  unicode: "\uE000",
  defaultSize: 20,
  defaultVariant: "regular",
});

function App() {
  return <CustomIcon size={24} color="green" />;
}
```

## Available Icons

The library includes hundreds of icons covering various categories:

- **Actions**: Add, Delete, Edit, Save, etc.
- **Communication**: Chat, Mail, Phone, etc.
- **Navigation**: Home, Settings, Search, etc.
- **Objects**: Document, Folder, Image, etc.
- **Status**: Alert, Checkmark, Error, etc.
- **And many more...**

### Icon Naming Convention

Icons follow a consistent naming pattern:

- `[IconName][Style]` - e.g., `GavelRegular`, `GavelFilled`
- Names are PascalCase
- Styles are `Regular` or `Filled`

## Performance

This icon library is optimized for performance:

- **Font-based**: Uses custom icon fonts for better performance
- **Tree-shakable**: Only import the icons you use
- **Type-safe**: Full TypeScript support
- **Memory efficient**: Minimal memory footprint

## Platform Support

- iOS 12.0+
- Android API 21+
- React Native 0.60+

## Contributing

This library is part of the RefineUI System Icons project. For contributing guidelines, see the main repository.

## License

MIT License - see LICENSE file for details.
