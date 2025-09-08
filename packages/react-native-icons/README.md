# @refineui/react-native-icons

React Native components for RefineUI System Icons with TypeScript support.

## 📦 Installation

```bash
npm install @refineui/react-native-icons
# or
yarn add @refineui/react-native-icons
# or
pnpm add @refineui/react-native-icons
```

## 🚀 Quick Start

### Basic Usage

```tsx
import React from "react";
import { View, Text } from "react-native";
import { Home, Search, Settings, Heart } from "@refineui/react-native-icons";

function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Basic usage */}
      <Home size={24} />

      {/* With custom color */}
      <Search size={20} color="#0078d4" />

      {/* With custom style */}
      <Settings size={16} style={{ marginTop: 10 }} />

      {/* With onPress handler */}
      <Heart
        size={24}
        onPress={() => console.log("Heart pressed!")}
        style={{ marginTop: 10 }}
      />
    </View>
  );
}

export default App;
```

### Touchable Icon

```tsx
import { Star } from "@refineui/react-native-icons";

function TouchableIcon() {
  return (
    <Star
      size={24}
      onPress={() => console.log("Star pressed!")}
      style={{
        padding: 8,
        borderRadius: 4,
        backgroundColor: "#f0f0f0",
      }}
    />
  );
}
```

## 🎨 Available Icons

### Icon Categories

- **Navigation**: `Home`, `Search`, `Menu`, `ArrowLeft`, `ArrowRight`, `ChevronUp`, `ChevronDown`
- **Actions**: `Add`, `Edit`, `Delete`, `Save`, `Cancel`, `Refresh`, `Download`, `Upload`
- **Communication**: `Mail`, `Phone`, `Chat`, `Notification`, `Bell`, `Message`
- **Media**: `Play`, `Pause`, `Stop`, `Volume`, `Mute`, `Camera`, `Image`, `Video`
- **System**: `Settings`, `Gear`, `Person`, `Lock`, `Unlock`, `Key`, `Shield`
- **Files**: `Folder`, `Document`, `Image`, `Download`
- **And many more...** (434+ icons total)

### Icon Naming Convention

Icons follow the pattern: `{Name}` (PascalCase)

- **Style**: `Regular` or `Filled` (imported separately)
- **Examples**:
  - `Home` - Regular style home icon
  - `HomeFilled` - Filled style home icon
  - `Add` - Regular style add icon
  - `AddFilled` - Filled style add icon

### Icon Sizes

- **16px**: `size={16}`
- **20px**: `size={20}`
- **24px**: `size={24}` (default)
- **32px**: `size={32}`
- **48px**: `size={48}`

## 🔧 Advanced Usage

### TypeScript Support

```tsx
import {
  Home,
  Search,
  Settings,
  IconProps,
} from "@refineui/react-native-icons";

interface MyComponentProps {
  iconType: "home" | "search" | "settings";
  iconSize?: number;
  iconColor?: string;
}

function MyComponent({ iconType, iconSize = 24, iconColor }: MyComponentProps) {
  const IconComponent =
    iconType === "home" ? Home : iconType === "search" ? Search : Settings;

  return <IconComponent size={iconSize} color={iconColor} />;
}
```

### Custom Styling

```tsx
import { Star } from "@refineui/react-native-icons";

function CustomIcon() {
  return (
    <Star
      size={24}
      color="#ffd700"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    />
  );
}
```

### Dynamic Icon Selection

```tsx
import { Home, Search, Settings } from "@refineui/react-native-icons";

function DynamicIcon({
  iconType,
}: {
  iconType: "home" | "search" | "settings";
}) {
  const iconConfig = {
    home: { component: Home, color: "#0078d4" },
    search: { component: Search, color: "#107c10" },
    settings: { component: Settings, color: "#d83b01" },
  };

  const config = iconConfig[iconType];
  const IconComponent = config.component;

  return <IconComponent size={24} color={config.color} />;
}
```

## 🎯 Best Practices

### 1. **Performance Optimization**

- Use consistent icon sizes throughout your app
- Avoid unnecessary re-renders by memoizing icon components
- Consider using `useMemo` for dynamic icon selection

```tsx
import React, { useMemo } from "react";
import { Home, Search, Settings } from "@refineui/react-native-icons";

function OptimizedIcon({ iconType, size = 24 }) {
  const iconProps = useMemo(
    () => ({
      size,
      color: "#0078d4",
    }),
    [size]
  );

  const IconComponent =
    iconType === "home" ? Home : iconType === "search" ? Search : Settings;

  return <IconComponent {...iconProps} />;
}
```

### 2. **Accessibility**

```tsx
import { Search } from "@refineui/react-native-icons";

function AccessibleIcon() {
  return (
    <Search
      size={24}
      accessible={true}
      accessibilityLabel="Search"
      accessibilityRole="button"
      accessibilityHint="Double tap to search"
    />
  );
}
```

### 3. **Responsive Design**

```tsx
import { Menu } from "@refineui/react-native-icons";
import { Dimensions } from "react-native";

function ResponsiveIcon() {
  const { width } = Dimensions.get("window");
  const iconSize = width < 768 ? 20 : 24;

  return <Menu size={iconSize} />;
}
```

### 4. **Theme Integration**

```tsx
import { Home, Search, Settings } from "@refineui/react-native-icons";
import { useTheme } from "@react-navigation/native";

function ThemedIcon({ iconType, size = 24 }) {
  const theme = useTheme();

  const IconComponent =
    iconType === "home" ? Home : iconType === "search" ? Search : Settings;

  return <IconComponent size={size} color={theme.colors.primary} />;
}
```

## 📱 Platform-Specific Features

### iOS Specific

```tsx
import { Settings } from "@refineui/react-native-icons";
import { Platform } from "react-native";

function PlatformIcon() {
  return (
    <Settings size={24} color={Platform.OS === "ios" ? "#007AFF" : "#0078d4"} />
  );
}
```

### Android Specific

```tsx
import { Menu } from "@refineui/react-native-icons";
import { Platform } from "react-native";

function AndroidIcon() {
  return (
    <Menu size={24} color={Platform.OS === "android" ? "#6200EA" : "#0078d4"} />
  );
}
```

## 🎨 Styling Examples

### Navigation Bar Icons

```tsx
import {
  Menu,
  Search,
  Notification,
  Person,
} from "@refineui/react-native-icons";
import { View, StyleSheet } from "react-native";

function NavigationBar() {
  return (
    <View style={styles.navBar}>
      <Menu size={24} style={styles.navIcon} />
      <Search size={20} style={styles.navIcon} />
      <Notification size={20} style={styles.navIcon} />
      <Person size={20} style={styles.navIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  navIcon: {
    padding: 8,
  },
});
```

### Button with Icon

```tsx
import { Download } from "@refineui/react-native-icons";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function IconButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Download size={16} color="#fff" />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
```

const styles = StyleSheet.create({
button: {
flexDirection: "row",
alignItems: "center",
backgroundColor: "#0078d4",
paddingHorizontal: 16,
paddingVertical: 8,
borderRadius: 4,
},
buttonText: {
color: "#fff",
marginLeft: 8,
fontSize: 16,
},
});

````

### Icon Grid

```tsx
import { Home, Search, Settings, Person, Mail, Phone } from "@refineui/react-native-icons";
import { View, Text, StyleSheet, FlatList } from "react-native";

function IconGrid() {
  const icons = [
    { component: Home, name: "home", label: "Home" },
    { component: Search, name: "search", label: "Search" },
    { component: Settings, name: "settings", label: "Settings" },
    { component: Person, name: "user", label: "User" },
    { component: Mail, name: "mail", label: "Mail" },
    { component: Phone, name: "phone", label: "Phone" },
  ];

  const renderIcon = ({ item }) => {
    const IconComponent = item.component;
    return (
      <View style={styles.iconItem}>
        <IconComponent size={24} />
        <Text style={styles.iconLabel}>{item.label}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={icons}
      renderItem={renderIcon}
      keyExtractor={(item) => item.name}
      numColumns={3}
      contentContainerStyle={styles.grid}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    padding: 16,
  },
  iconItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    margin: 4,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  iconLabel: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "center",
  },
});
````

## 🔍 Icon Search and Discovery

### Finding Icons by Category

```tsx
const iconCategories = {
  navigation: ["Home", "Search", "Menu", "ArrowLeft", "ArrowRight"],
  actions: ["Add", "Edit", "Delete", "Save", "Cancel"],
  communication: ["Mail", "Phone", "Chat", "Notification"],
  media: ["Play", "Pause", "Stop", "Volume", "Camera"],
  system: ["Settings", "Gear", "Person", "Lock", "Unlock"],
  files: ["Folder", "Document", "Image", "Download"],
};
```

### Icon Search Function

```tsx
function searchIcons(query: string) {
  const allIcons = Object.values(iconCategories).flat();
  return allIcons.filter((icon) =>
    icon.toLowerCase().includes(query.toLowerCase())
  );
}

// Usage
const searchResults = searchIcons("home");
// Returns: ['Home']
```

## 🛠️ Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/refineui/system-icons.git
cd system-icons

# Install dependencies
npm install

# Build React Native icons
npm run generate:react-native
npm run build:react-native
```

### Adding New Icons

1. Add SVG files to `src/icons/`
2. Run `npm run generate:metadata`
3. Run `npm run generate:react-native`
4. Test your changes in React Native app

## 🐛 Troubleshooting

### Common Issues

1. **Icon not displaying**

   - Check if the icon name is correct
   - Verify the package is installed
   - Check Metro bundler logs

2. **Performance issues**

   - Use `useMemo` for dynamic icon selection
   - Avoid unnecessary re-renders
   - Consider using `React.memo` for icon components

3. **Styling issues**
   - Check for conflicting styles
   - Verify style properties are supported
   - Use `StyleSheet.create` for better performance

### Getting Help

- 📧 Email: support@pelagornis.com
- 🐛 Issues: [GitHub Issues](https://github.com/pelagornis/refineui-system-icons/issues)
- 💬 Community: [Slack](https://pelagornis.slack.com)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
