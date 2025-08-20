# @refineui/react-native-icons

A TypeScript-first React Native icon library providing type-safe access to RefineUI System Icons for React Native applications.

## Features

- 🎯 **TypeScript-first**: Full type safety and IntelliSense support
- 📱 **React Native optimized**: Built specifically for React Native applications
- 📦 **Tree-shakable**: Only import what you need
- 🎨 **Multiple sizes**: 16, 20, 24, 28, 32, 48px variants
- 🎭 **Two styles**: Regular and filled variants
- 🔍 **Search & filter**: Built-in search and filtering capabilities
- ♿ **Accessible**: Proper accessibility labels and hints
- 🚀 **Performance**: Optimized for mobile rendering
- 🎨 **Styling**: Flexible styling with tint colors and backgrounds

## Installation

```bash
npm install @refineui/react-native-icons
```

## Quick Start

### Basic Usage

```tsx
import { Icon } from "@refineui/react-native-icons";

function App() {
  return (
    <View>
      {/* Basic usage */}
      <Icon name="add" />

      {/* With size and style */}
      <Icon name="heart" size={32} style="filled" />

      {/* With custom styling */}
      <Icon
        name="settings"
        size={24}
        color="#007AFF"
        onPress={() => console.log("pressed")}
      />
    </View>
  );
}
```

### Advanced Usage

```tsx
import { Icon, IconSize, IconStyle } from "@refineui/react-native-icons";

function IconGallery() {
  const [selectedSize, setSelectedSize] = useState<IconSize>(24);
  const [selectedStyle, setSelectedStyle] = useState<IconStyle>("regular");

  return (
    <View>
      {/* Size selector */}
      <Picker
        selectedValue={selectedSize}
        onValueChange={(value) => setSelectedSize(value as IconSize)}
      >
        <Picker.Item label="16px" value={16} />
        <Picker.Item label="20px" value={20} />
        <Picker.Item label="24px" value={24} />
        <Picker.Item label="28px" value={28} />
        <Picker.Item label="32px" value={32} />
        <Picker.Item label="48px" value={48} />
      </Picker>

      {/* Style selector */}
      <Picker
        selectedValue={selectedStyle}
        onValueChange={(value) => setSelectedStyle(value as IconStyle)}
      >
        <Picker.Item label="Regular" value="regular" />
        <Picker.Item label="Filled" value="filled" />
      </Picker>

      {/* Icon display */}
      <Icon
        name="add"
        size={selectedSize}
        style={selectedStyle}
        accessibilityLabel="Add icon"
        accessibilityHint="Double tap to add item"
        onPress={() => console.log("Add pressed")}
      />
    </View>
  );
}
```

## API Reference

### Icon Component Props

| Prop                 | Type                               | Default        | Description                    |
| -------------------- | ---------------------------------- | -------------- | ------------------------------ |
| `name`               | `string`                           | **required**   | Icon name in snake_case format |
| `size`               | `16 \| 20 \| 24 \| 28 \| 32 \| 48` | `24`           | Icon size in pixels            |
| `style`              | `'regular' \| 'filled'`            | `'regular'`    | Icon style variant             |
| `containerStyle`     | `ViewStyle`                        | -              | Container styles               |
| `iconStyle`          | `TextStyle`                        | -              | Icon image styles              |
| `onPress`            | `() => void`                       | -              | Press handler                  |
| `accessibilityLabel` | `string`                           | Auto-generated | Accessibility label            |
| `accessibilityHint`  | `string`                           | -              | Accessibility hint             |
| `accessible`         | `boolean`                          | `true`         | Whether icon is accessible     |
| `testID`             | `string`                           | -              | Test ID for testing            |
| `color`              | `string`                           | -              | Tint color of the icon         |
| `backgroundColor`    | `string`                           | -              | Background color               |
| `borderRadius`       | `number`                           | -              | Border radius                  |
| `padding`            | `number`                           | -              | Padding around icon            |
| `margin`             | `number`                           | -              | Margin around icon             |

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
} from "@refineui/react-native-icons";

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
import {
  generateIconUrl,
  generateIconFileName,
} from "@refineui/react-native-icons";

// Generate icon URL
const iconUrl = generateIconUrl("add", 24, "regular");
// Returns: "https://cdn.jsdelivr.net/npm/@refineui/icons-web@latest/public/icons/24/add-regular.svg"

// Generate filename
const fileName = generateIconFileName("heart", "filled");
// Returns: "heart-filled.svg"
```

## Styling

### Container Styles

You can style the icon container using `containerStyle`:

```tsx
<Icon
  name="settings"
  containerStyle={{
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 8,
    margin: 4,
  }}
/>
```

### Icon Styles

You can style the icon image using `iconStyle`:

```tsx
<Icon
  name="heart"
  iconStyle={{
    tintColor: "#ff0000",
    opacity: 0.8,
  }}
/>
```

### Color Properties

For convenience, you can use the `color` prop for tinting:

```tsx
<Icon name="star" color="#FFD700" backgroundColor="#f8f8f8" borderRadius={12} />
```

## Accessibility

The Icon component automatically generates appropriate accessibility labels:

```tsx
// Auto-generated accessibilityLabel: "Add"
<Icon name="add" />

// Custom accessibility
<Icon
  name="heart"
  accessibilityLabel="Like this post"
  accessibilityHint="Double tap to like"
  accessible={true}
/>
```

## Performance

### TouchableOpacity vs View

The component automatically renders as `TouchableOpacity` when `onPress` is provided:

```tsx
// Renders as TouchableOpacity
<Icon name="add" onPress={() => console.log('pressed')} />

// Renders as View
<Icon name="add" />
```

### Image Optimization

Icons are rendered as optimized images with proper resize modes:

```tsx
<Icon
  name="settings"
  size={24}
  // Automatically uses resizeMode="contain"
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
function IconButton({ icon, onPress, children, ...props }) {
  return (
    <Icon
      name={icon}
      size={16}
      color="#007AFF"
      backgroundColor="#f0f0f0"
      borderRadius={8}
      padding={8}
      onPress={onPress}
      accessibilityLabel={`${children} button`}
      {...props}
    />
  );
}

// Usage
<IconButton
  icon="add"
  onPress={() => console.log("Add pressed")}
  accessibilityLabel="Add item button"
>
  Add Item
</IconButton>;
```

### Icon Grid

```tsx
function IconGrid({ icons, onIconPress }) {
  return (
    <FlatList
      data={icons}
      numColumns={4}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onIconPress(item)}
          style={{
            flex: 1,
            aspectRatio: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 4,
            backgroundColor: "#f8f8f8",
            borderRadius: 8,
          }}
        >
          <Icon name={item.name} size={24} />
        </TouchableOpacity>
      )}
    />
  );
}
```

### Custom Icon Component

```tsx
function CustomIcon({ name, size = 24, color = "#000", ...props }) {
  return (
    <Icon
      name={name}
      size={size}
      color={color}
      containerStyle={{
        backgroundColor: "transparent",
        borderRadius: size / 2,
        padding: size / 4,
      }}
      {...props}
    />
  );
}
```

## Platform Support

- **iOS**: 12.0+
- **Android**: API level 21+
- **React Native**: 0.60.0+

## License

MIT License - see [LICENSE](../../LICENSE) for details.

## Related Packages

- [`@refineui/react-icons`](../react-icons) - React icon components for web
- [`@refineui/icons-web`](../icons-web) - Web icon library for non-React projects
- [`@refineui/icon-cdn`](../icon-cdn) - CDN package for direct URL access
