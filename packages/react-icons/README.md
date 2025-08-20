# @refineui/react-icons

A TypeScript-first React icon library providing type-safe access to RefineUI System Icons for React applications.

## Features

- 🎯 **TypeScript-first**: Full type safety and IntelliSense support
- ⚛️ **React-optimized**: Built specifically for React applications
- 📦 **Tree-shakable**: Only import what you need
- 🎨 **Multiple sizes**: 16, 20, 24, 28, 32, 48px variants
- 🎭 **Two styles**: Regular and filled variants
- 🔍 **Search & filter**: Built-in search and filtering capabilities
- ♿ **Accessible**: Proper alt text and ARIA support
- 🚀 **Performance**: Lazy loading and optimized rendering

## Installation

```bash
npm install @refineui/react-icons
```

## Quick Start

### Basic Usage

```tsx
import { Icon } from "@refineui/react-icons";

function App() {
  return (
    <div>
      {/* Basic usage */}
      <Icon name="add" />

      {/* With size and style */}
      <Icon name="heart" size={32} style="filled" />

      {/* With custom styling */}
      <Icon
        name="settings"
        size={24}
        className="my-icon"
        onClick={() => console.log("clicked")}
      />
    </div>
  );
}
```

### Advanced Usage

```tsx
import { Icon, IconSize, IconStyle } from "@refineui/react-icons";

function IconGallery() {
  const [selectedSize, setSelectedSize] = useState<IconSize>(24);
  const [selectedStyle, setSelectedStyle] = useState<IconStyle>("regular");

  return (
    <div>
      {/* Size selector */}
      <select
        value={selectedSize}
        onChange={(e) => setSelectedSize(Number(e.target.value) as IconSize)}
      >
        <option value={16}>16px</option>
        <option value={20}>20px</option>
        <option value={24}>24px</option>
        <option value={28}>28px</option>
        <option value={32}>32px</option>
        <option value={48}>48px</option>
      </select>

      {/* Style selector */}
      <select
        value={selectedStyle}
        onChange={(e) => setSelectedStyle(e.target.value as IconStyle)}
      >
        <option value="regular">Regular</option>
        <option value="filled">Filled</option>
      </select>

      {/* Icon display */}
      <Icon
        name="add"
        size={selectedSize}
        style={selectedStyle}
        alt="Add icon"
        title="Click to add item"
        onClick={() => console.log("Add clicked")}
      />
    </div>
  );
}
```

## API Reference

### Icon Component Props

| Prop          | Type                                    | Default        | Description                    |
| ------------- | --------------------------------------- | -------------- | ------------------------------ |
| `name`        | `string`                                | **required**   | Icon name in snake_case format |
| `size`        | `16 \| 20 \| 24 \| 28 \| 32 \| 48`      | `24`           | Icon size in pixels            |
| `style`       | `'regular' \| 'filled'`                 | `'regular'`    | Icon style variant             |
| `className`   | `string`                                | -              | CSS class name                 |
| `inlineStyle` | `React.CSSProperties`                   | -              | Inline styles                  |
| `onClick`     | `(event: React.MouseEvent) => void`     | -              | Click handler                  |
| `alt`         | `string`                                | Auto-generated | Alt text for accessibility     |
| `title`       | `string`                                | Auto-generated | Title attribute for tooltip    |
| `loading`     | `'lazy' \| 'eager'`                     | `'lazy'`       | Loading behavior               |
| `onError`     | `(event: React.SyntheticEvent) => void` | -              | Error handler                  |
| `onLoad`      | `(event: React.SyntheticEvent) => void` | -              | Load handler                   |

### Available Icons

The package includes 433+ icons covering various use cases:

- **Navigation**: home, search, arrow, chevron, location, map
- **Actions**: add, edit, delete, save, close, checkmark
- **Communication**: mail, chat, phone, share, notification
- **Media**: play, pause, stop, video, audio, camera
- **Social**: person, user, group, heart, star
- **Technology**: computer, laptop, phone, tablet, wifi
- **Weather**: sun, moon, cloud, rain, snow
- **Tools**: settings, gear, tool, wrench, hammer

### Icon Naming Convention

Icons follow a consistent naming pattern:

- **Format**: `icon-name-style`
- **Examples**:
  - `add-regular`
  - `heart-filled`
  - `settings-regular`

## Utility Functions

### Icon Management

```tsx
import {
  createIconInfo,
  searchIcons,
  filterIconsBySize,
  filterIconsByStyle,
  sortIconsByName,
} from "@refineui/react-icons";

// Create icon information
const iconInfo = createIconInfo("add", 24, "regular");

// Search icons
const searchResults = searchIcons(allIcons, "heart");

// Filter icons
const size24Icons = filterIconsBySize(allIcons, 24);
const filledIcons = filterIconsByStyle(allIcons, "filled");

// Sort icons
const sortedIcons = sortIconsByName(allIcons);
```

### URL Generation

```tsx
import { generateIconUrl, generateIconFileName } from "@refineui/react-icons";

// Generate icon URL
const iconUrl = generateIconUrl("add", 24, "regular");
// Returns: "/icons/24/add-regular.svg"

// Generate filename
const fileName = generateIconFileName("heart", "filled");
// Returns: "heart-filled.svg"
```

## Styling

### CSS Classes

You can style icons using CSS classes:

```css
.my-icon {
  border-radius: 4px;
  transition: transform 0.2s ease;
}

.my-icon:hover {
  transform: scale(1.1);
}

.my-icon:active {
  transform: scale(0.95);
}
```

### Inline Styles

```tsx
<Icon
  name="settings"
  inlineStyle={{
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
    cursor: "pointer",
  }}
/>
```

## Accessibility

The Icon component automatically generates appropriate alt text and title attributes:

```tsx
// Auto-generated alt: "Add"
// Auto-generated title: "Add (24px, regular)"
<Icon name="add" />

// Custom alt and title
<Icon
  name="heart"
  alt="Like this post"
  title="Click to like"
/>
```

## Performance

### Lazy Loading

Icons are loaded lazily by default for better performance:

```tsx
// Lazy loading (default)
<Icon name="add" loading="lazy" />

// Eager loading
<Icon name="add" loading="eager" />
```

### Error Handling

Handle loading errors gracefully:

```tsx
<Icon
  name="add"
  onError={(event) => {
    console.error("Failed to load icon:", event);
    // Fallback to text or placeholder
  }}
/>
```

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

## Examples

### Icon Button

```tsx
function IconButton({ icon, onClick, children, ...props }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
      {...props}
    >
      <Icon name={icon} size={16} />
      {children}
    </button>
  );
}

// Usage
<IconButton icon="add" onClick={() => console.log("Add clicked")}>
  Add Item
</IconButton>;
```

### Icon Grid

```tsx
function IconGrid({ icons, onIconClick }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
        gap: "16px",
        padding: "16px",
      }}
    >
      {icons.map((icon) => (
        <div
          key={icon.name}
          onClick={() => onIconClick(icon)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "8px",
            border: "1px solid #eee",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <Icon name={icon.name} size={24} />
          <span style={{ fontSize: "12px", marginTop: "4px" }}>
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
}
```

## License

MIT License - see [LICENSE](../../LICENSE) for details.

## Related Packages

- [`@refineui/icons-web`](../icons-web) - Web icon library for non-React projects
- [`@refineui/icon-cdn`](../icon-cdn) - CDN package for direct URL access
- [`@refineui/react-native-icons`](../react-native-icons) - React Native icon components
