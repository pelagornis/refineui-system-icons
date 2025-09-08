# @refineui/react-icons

React components for RefineUI System Icons with TypeScript support.

## 📦 Installation

```bash
npm install @refineui/react-icons
# or
yarn add @refineui/react-icons
# or
pnpm add @refineui/react-icons
```

## 🚀 Quick Start

```tsx
import React from "react";
import { Icon } from "@refineui/react-icons";

function App() {
  return (
    <div>
      {/* Basic usage */}
      <Icon name="home" size={24} />

      {/* With custom color */}
      <Icon name="search" size={20} color="#0078d4" />

      {/* With custom className */}
      <Icon name="settings" size={16} className="my-icon" />

      {/* With onClick handler */}
      <Icon
        name="heart"
        size={24}
        onClick={() => console.log("Heart clicked!")}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default App;
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
import { Icon, IconProps } from "@refineui/react-icons";

interface MyComponentProps {
  iconName: IconProps["name"];
  iconSize?: IconProps["size"];
  iconColor?: IconProps["color"];
  iconStyle?: IconProps["iconStyle"];
}

function MyComponent({ iconName, iconSize = 24, iconColor }: MyComponentProps) {
  return <Icon name={iconName} size={iconSize} color={iconColor} />;
}
```

### Custom Styling

```tsx
import { Icon } from "@refineui/react-icons";

function CustomIcon() {
  return (
    <Icon
      name="star"
      size={24}
      className="my-custom-icon"
      style={{
        color: "#ffd700",
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
        transition: "transform 0.2s ease",
      }}
    />
  );
}
```

### CSS Custom Properties

```css
.my-custom-icon {
  --refineui-icon-color: #0078d4;
  --refineui-icon-size: 24px;
  --refineui-icon-stroke-width: 1.5;
}
```

## 🎯 Best Practices

### 1. **Icon Selection**

- Use consistent icon sizes throughout your application
- Choose icons that clearly represent their function
- Consider accessibility when selecting icons

### 2. **Performance**

- Use tree-shaking to include only needed icons
- Consider using CSS icons for static content
- Use React icons for interactive elements

### 3. **Accessibility**

```tsx
<Icon
  name="search"
  size={24}
  aria-label="Search"
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleSearch();
    }
  }}
/>
```

### 4. **Responsive Design**

```tsx
import { Icon } from "@refineui/react-icons";

function ResponsiveIcon() {
  return (
    <Icon
      name="menu"
      size={window.innerWidth < 768 ? 20 : 24}
      className="responsive-icon"
    />
  );
}
```

## 📚 Examples

### Navigation Bar

```tsx
import { Icon } from "@refineui/react-icons";

function NavigationBar() {
  return (
    <nav className="navbar">
      <Icon name="menu" size={24} className="nav-icon" />
      <Icon name="search" size={20} className="nav-icon" />
      <Icon name="notification" size={20} className="nav-icon" />
      <Icon name="user" size={20} className="nav-icon" />
    </nav>
  );
}
```

### Button with Icon

```tsx
import { Icon } from "@refineui/react-icons";

function IconButton({ iconName, children, onClick }) {
  return (
    <button className="icon-button" onClick={onClick}>
      <Icon name={iconName} size={16} />
      {children}
    </button>
  );
}

// Usage
<IconButton iconName="download" onClick={handleDownload}>
  Download
</IconButton>;
```

### Icon Grid

```tsx
import { Icon } from "@refineui/react-icons";

function IconGrid() {
  const icons = ["home", "search", "settings", "user", "mail", "phone"];

  return (
    <div className="icon-grid">
      {icons.map((iconName) => (
        <div key={iconName} className="icon-item">
          <Icon name={iconName} size={24} />
          <span>{iconName}</span>
        </div>
      ))}
    </div>
  );
}
```

## 🔍 Icon Search

### Finding Icons by Name

```tsx
// Search for icons containing "home"
const homeIcons = ["home", "home-filled", "home-outline"];

// Search for icons containing "arrow"
const arrowIcons = ["arrow-up", "arrow-down", "arrow-left", "arrow-right"];
```

### Icon Categories

```tsx
const navigationIcons = [
  "home",
  "search",
  "menu",
  "back",
  "forward",
  "up",
  "down",
  "left",
  "right",
  "chevron-up",
  "chevron-down",
  "chevron-left",
  "chevron-right",
];

const actionIcons = [
  "add",
  "edit",
  "delete",
  "save",
  "cancel",
  "refresh",
  "download",
  "upload",
  "copy",
  "cut",
];
```

## 🐛 Troubleshooting

### Common Issues

1. **Icon not displaying**

   - Check if the icon name is correct
   - Verify the package is installed
   - Check browser console for errors

2. **Styling issues**

   - Ensure CSS is properly loaded
   - Check for conflicting styles
   - Verify CSS custom properties

3. **TypeScript errors**
   - Update to latest version
   - Check type definitions
   - Verify import statements

### Getting Help

- 📧 Email: support@pelagornis.com
- 🐛 Issues: [GitHub Issues](https://github.com/pelagornis/refineui-system-icons/issues)
- 💬 Community: [Slack](https://pelagornis.slack.com)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
