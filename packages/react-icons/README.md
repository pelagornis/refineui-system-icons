# @refineui/react-icons

RefineUI System Icons for React - Direct font-based icon system (FluentUI style)

## Installation

```bash
npm install @refineui/react-icons
```

## Usage

### CSS Import (Required)

First, import the CSS to load the icon fonts:

```tsx
import "@refineui/react-icons/dist/styles.css";
```

### Basic Usage

```tsx
import { Icon, ICONS } from "@refineui/react-icons";

function App() {
  return (
    <div>
      {/* Using Icon component with unicode */}
      <Icon name="\uE000" size={20} />

      {/* Using Icon component with constants */}
      <Icon name={ICONS.GAVEL_REGULAR} size={24} />
      <Icon name={ICONS.SETTINGS_FILLED} size={32} color="blue" />

      {/* Using variant prop */}
      <Icon name="\uE000" variant="filled" size={28} color="red" />
    </div>
  );
}
```

### Icon Props

```tsx
interface IconProps {
  name?: string; // Unicode character or icon constant
  size?: 12 | 16 | 20 | 24 | 28 | 32 | 48; // Default: 20
  color?: string; // Default: 'currentColor'
  variant?: "regular" | "filled"; // Default: 'regular'
  className?: string; // Additional CSS classes
  style?: React.CSSProperties; // Additional inline styles
}
```

### Using Icon Constants

```tsx
import { Icon, ICONS, getIconUnicode } from "@refineui/react-icons";

function App() {
  return (
    <div>
      {/* Direct usage */}
      <Icon name={ICONS.GAVEL_REGULAR} size={20} />
      <Icon name={ICONS.SETTINGS_FILLED} size={24} />

      {/* Programmatic usage */}
      <Icon name={getIconUnicode("GAVEL_REGULAR")} size={20} />

      {/* Type-safe icon names */}
      <Icon name={ICONS.HOME_REGULAR} size={32} />
    </div>
  );
}
```

### Available Icons

All icons are available as constants:

```tsx
// Regular icons
ICONS.GAVEL_REGULAR;
ICONS.SETTINGS_REGULAR;
ICONS.HOME_REGULAR;
ICONS.SEARCH_REGULAR;
// ... and many more

// Filled icons
ICONS.GAVEL_FILLED;
ICONS.SETTINGS_FILLED;
ICONS.HOME_FILLED;
ICONS.SEARCH_FILLED;
// ... and many more
```

### Advanced Usage

#### Custom Styling

```tsx
<Icon
  name={ICONS.GAVEL_REGULAR}
  size={24}
  color="#0078d4"
  className="my-custom-class"
  style={{ marginRight: "8px" }}
/>
```

#### Dynamic Icon Selection

```tsx
import { Icon, ICONS, IconName } from "@refineui/react-icons";

function DynamicIcon({
  iconName,
  ...props
}: { iconName: IconName } & IconProps) {
  return <Icon name={ICONS[iconName]} {...props} />;
}

function App() {
  return <DynamicIcon iconName="GAVEL_REGULAR" size={24} color="blue" />;
}
```

## Performance

This direct font-based approach provides excellent performance:

- **No component overhead**: Direct unicode rendering
- **Small bundle size**: Only the Icon component and constants
- **Fast rendering**: Native font rendering
- **Tree-shakable**: Only import what you use
- **Type-safe**: Full TypeScript support

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

This library is part of the RefineUI System Icons project. For contributing guidelines, see the main repository.

## License

MIT License - see LICENSE file for details.
