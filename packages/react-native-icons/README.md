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
import { Icon } from "@refineui/react-native-icons";

function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Basic usage */}
      <Icon name="home" size={24} />

      {/* With custom color */}
      <Icon name="search" size={20} color="#0078d4" />

      {/* With custom style */}
      <Icon name="settings" size={16} style={{ marginTop: 10 }} />

      {/* With onPress handler */}
      <Icon
        name="heart"
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
import { Icon } from "@refineui/react-native-icons";

function TouchableIcon() {
  return (
    <Icon
      name="star"
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

- **Navigation**: `home`, `search`, `menu`, `back`, `forward`, `up`, `down`, `left`, `right`
- **Actions**: `add`, `edit`, `delete`, `save`, `cancel`, `refresh`, `download`, `upload`
- **Communication**: `mail`, `phone`, `chat`, `notification`, `bell`, `message`
- **Media**: `play`, `pause`, `stop`, `volume`, `mute`, `camera`, `image`, `video`
- **System**: `settings`, `gear`, `user`, `lock`, `unlock`, `key`, `shield`
- **Files**: `folder`, `file`, `document`, `image`, `pdf`, `zip`, `download`
- **And many more...** (434+ icons total)

### Icon Sizes

- **16px**: `size={16}`
- **20px**: `size={20}`
- **24px**: `size={24}` (default)
- **32px**: `size={32}`
- **48px**: `size={48}`

## 🔧 Advanced Usage

### TypeScript Support

```tsx
import { Icon, IconProps } from "@refineui/react-native-icons";

interface MyComponentProps {
  iconName: IconProps["name"];
  iconSize?: IconProps["size"];
  iconColor?: IconProps["color"];
}

function MyComponent({ iconName, iconSize = 24, iconColor }: MyComponentProps) {
  return <Icon name={iconName} size={iconSize} color={iconColor} />;
}
```

### Custom Styling

```tsx
import { Icon } from "@refineui/react-native-icons";

function CustomIcon() {
  return (
    <Icon
      name="star"
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
import { Icon } from "@refineui/react-native-icons";

function DynamicIcon({
  iconType,
}: {
  iconType: "home" | "search" | "settings";
}) {
  const iconConfig = {
    home: { name: "home", color: "#0078d4" },
    search: { name: "search", color: "#107c10" },
    settings: { name: "settings", color: "#d83b01" },
  };

  const config = iconConfig[iconType];

  return <Icon name={config.name} size={24} color={config.color} />;
}
```

## 🎯 Best Practices

### 1. **Performance Optimization**

- Use consistent icon sizes throughout your app
- Avoid unnecessary re-renders by memoizing icon components
- Consider using `useMemo` for dynamic icon selection

```tsx
import React, { useMemo } from "react";
import { Icon } from "@refineui/react-native-icons";

function OptimizedIcon({ iconName, size = 24 }) {
  const iconProps = useMemo(
    () => ({
      name: iconName,
      size,
      color: "#0078d4",
    }),
    [iconName, size]
  );

  return <Icon {...iconProps} />;
}
```

### 2. **Accessibility**

```tsx
import { Icon } from "@refineui/react-native-icons";

function AccessibleIcon() {
  return (
    <Icon
      name="search"
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
import { Icon } from "@refineui/react-native-icons";
import { Dimensions } from "react-native";

function ResponsiveIcon() {
  const { width } = Dimensions.get("window");
  const iconSize = width < 768 ? 20 : 24;

  return <Icon name="menu" size={iconSize} />;
}
```

### 4. **Theme Integration**

```tsx
import { Icon } from "@refineui/react-native-icons";
import { useTheme } from "@react-navigation/native";

function ThemedIcon({ name, size = 24 }) {
  const theme = useTheme();

  return <Icon name={name} size={size} color={theme.colors.primary} />;
}
```

## 📱 Platform-Specific Features

### iOS Specific

```tsx
import { Icon } from "@refineui/react-native-icons";
import { Platform } from "react-native";

function PlatformIcon() {
  return (
    <Icon
      name="settings"
      size={24}
      color={Platform.OS === "ios" ? "#007AFF" : "#0078d4"}
    />
  );
}
```

### Android Specific

```tsx
import { Icon } from "@refineui/react-native-icons";
import { Platform } from "react-native";

function AndroidIcon() {
  return (
    <Icon
      name="menu"
      size={24}
      color={Platform.OS === "android" ? "#6200EA" : "#0078d4"}
    />
  );
}
```

## 🎨 Styling Examples

### Navigation Bar Icons

```tsx
import { Icon } from "@refineui/react-native-icons";
import { View, StyleSheet } from "react-native";

function NavigationBar() {
  return (
    <View style={styles.navBar}>
      <Icon name="menu" size={24} style={styles.navIcon} />
      <Icon name="search" size={20} style={styles.navIcon} />
      <Icon name="notification" size={20} style={styles.navIcon} />
      <Icon name="user" size={20} style={styles.navIcon} />
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
import { Icon } from "@refineui/react-native-icons";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function IconButton({ iconName, title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={iconName} size={16} color="#fff" />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

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
```

### Icon Grid

```tsx
import { Icon } from "@refineui/react-native-icons";
import { View, Text, StyleSheet, FlatList } from "react-native";

function IconGrid() {
  const icons = [
    { name: "home", label: "Home" },
    { name: "search", label: "Search" },
    { name: "settings", label: "Settings" },
    { name: "user", label: "User" },
    { name: "mail", label: "Mail" },
    { name: "phone", label: "Phone" },
  ];

  const renderIcon = ({ item }) => (
    <View style={styles.iconItem}>
      <Icon name={item.name} size={24} />
      <Text style={styles.iconLabel}>{item.label}</Text>
    </View>
  );

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
```

## 🔍 Icon Search and Discovery

### Finding Icons by Category

```tsx
const iconCategories = {
  navigation: ["home", "search", "menu", "back", "forward"],
  actions: ["add", "edit", "delete", "save", "cancel"],
  communication: ["mail", "phone", "chat", "notification"],
  media: ["play", "pause", "stop", "volume", "camera"],
  system: ["settings", "gear", "user", "lock", "unlock"],
  files: ["folder", "file", "document", "image", "pdf"],
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
// Returns: ['home']
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

- 📧 Email: support@refineui.com
- 🐛 Issues: [GitHub Issues](https://github.com/refineui/system-icons/issues)
- 📖 Documentation: [docs.refineui.com](https://docs.refineui.com)
- 💬 Community: [Discord](https://discord.gg/refineui)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
