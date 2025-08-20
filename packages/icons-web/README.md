# @refineui/icons-web

A TypeScript-first web icon library providing type-safe access to RefineUI System Icons for web applications.

## Features

- 🎯 **TypeScript-first**: Full type safety and IntelliSense support
- 🌐 **Web-optimized**: Designed for modern web applications
- 📦 **Tree-shakable**: Only import what you need
- 🎨 **Multiple sizes**: 16, 20, 24, 28, 32, 48px variants
- 🎭 **Two styles**: Regular and filled variants
- 🔍 **Search & filter**: Built-in search and filtering capabilities
- 📱 **Framework agnostic**: Works with React, Vue, Angular, and vanilla JS

## Installation

```bash
npm install @refineui/icons-web
```

## Quick Start

### Basic Usage

```typescript
import { getIconUrl, getIconSvg, getAllIcons } from '@refineui/icons-web';

// Get icon URL
const iconUrl = getIconUrl('add', 24);
// Returns: "/icons/24/add-regular.svg"

// Fetch icon SVG content
const svgContent = await getIconSvg('heart', 32);
// Returns: "<svg>...</svg>"

// Get all available icons
const allIcons = await getAllIcons();
```

### React Component Example

```tsx
import React from 'react';
import { getIconUrl, IconInfo } from '@refineui/icons-web';

interface IconProps {
  name: string;
  size?: 16 | 20 | 24 | 28 | 32 | 48;
  style?: 'regular' | 'filled';
  className?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  style = 'regular',
  className 
}) => {
  const iconUrl = getIconUrl(`${name}-${style}`, size);
  
  return (
    <img 
      src={iconUrl} 
      alt={name}
      width={size}
      height={size}
      className={className}
    />
  );
};

// Usage
<Icon name="add" size={32} style="filled" />
<Icon name="heart" size={24} style="regular" />
```

### Vue Component Example

```vue
<template>
  <img 
    :src="iconUrl" 
    :alt="name"
    :width="size"
    :height="size"
    :class="className"
  />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { getIconUrl } from '@refineui/icons-web';

export default defineComponent({
  name: 'Icon',
  props: {
    name: { type: String, required: true },
    size: { type: Number, default: 24 },
    style: { type: String, default: 'regular' },
    className: { type: String, default: '' }
  },
  setup(props) {
    const iconUrl = computed(() => 
      getIconUrl(`${props.name}-${props.style}`, props.size)
    );

    return { iconUrl };
  }
});
</script>
```

## API Reference

### Core Functions

#### `getIconUrl(slug: string, size: number = 24): string`

Generates an icon URL for the given slug and size.

```typescript
const url = getIconUrl('add-regular', 24);
// Returns: "/icons/24/add-regular.svg"
```

#### `getIconSvg(slug: string, size: number = 24): Promise<string>`

Fetches the SVG content of an icon.

```typescript
const svg = await getIconSvg('heart-filled', 32);
// Returns: "<svg width="32" height="32">...</svg>"
```

#### `getAllIcons(): Promise<IconInfo[]>`

Fetches metadata for all available icons.

```typescript
const icons = await getAllIcons();
// Returns: Array of IconInfo objects
```

### Utility Functions

#### `searchIcons(query: string, icons: IconInfo[]): IconInfo[]`

Searches for icons by name or slug.

```typescript
const results = searchIcons('heart', allIcons);
```

#### `filterIconsBySize(size: number, icons: IconInfo[]): IconInfo[]`

Filters icons by size.

```typescript
const size24Icons = filterIconsBySize(24, allIcons);
```

#### `filterIconsByStyle(style: string, icons: IconInfo[]): IconInfo[]`

Filters icons by style.

```typescript
const filledIcons = filterIconsByStyle('filled', allIcons);
```

### Types

#### `IconInfo`

```typescript
interface IconInfo {
  name: string;        // Display name
  slug: string;        // URL slug
  size: IconSize;      // Icon size (16, 20, 24, 28, 32, 48)
  style: IconStyle;    // Icon style ('regular' | 'filled')
  url: string;         // Full URL
  fileName: string;    // File name
  svg?: string;        // SVG content (optional)
}
```

#### `IconSize`

```typescript
type IconSize = 16 | 20 | 24 | 28 | 32 | 48;
```

#### `IconStyle`

```typescript
type IconStyle = 'regular' | 'filled';
```

## Available Icons

The package includes 433+ icons across multiple categories:

- **Navigation**: home, search, arrow, chevron, location, map
- **Actions**: add, edit, delete, save, close, checkmark
- **Communication**: mail, chat, phone, share, notification
- **Media**: play, pause, stop, video, audio, camera
- **Social**: person, user, group, heart, star
- **Technology**: computer, laptop, phone, tablet, wifi
- **Weather**: sun, moon, cloud, rain, snow
- **Tools**: settings, gear, tool, wrench, hammer

## Icon Naming Convention

Icons follow a consistent naming pattern:

- **Slug format**: `icon-name-style`
- **Examples**: 
  - `add-regular`
  - `heart-filled`
  - `settings-regular`

## Development

### Building

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Type Checking

```bash
npm run type-check
```

## License

MIT License - see [LICENSE](../../LICENSE) for details.

## Related Packages

- [`@refineui/icon-cdn`](../icon-cdn) - CDN package for direct URL access
- [`@refineui/react-icons`](../react-icons) - React-specific icon components
- [`@refineui/react-native-icons`](../react-native-icons) - React Native icon components
