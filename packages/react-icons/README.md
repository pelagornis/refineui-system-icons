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
import { Home, Search, Settings, Heart } from "@refineui/react-icons";

function App() {
  return (
    <div>
      {/* Basic usage */}
      <Home size={24} />

      {/* With custom color */}
      <Search size={20} color="#0078d4" />

      {/* With custom className */}
      <Settings size={16} className="my-icon" />

      {/* With onClick handler */}
      <Heart
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
import { Home, Search, Settings, IconProps } from "@refineui/react-icons";

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
import { Star } from "@refineui/react-icons";

function CustomIcon() {
  return (
    <Star
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
<Search
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
import { Menu } from "@refineui/react-icons";

function ResponsiveIcon() {
  return (
    <Menu
      size={window.innerWidth < 768 ? 20 : 24}
      className="responsive-icon"
    />
  );
}
```

## 📚 Examples

### Navigation Bar

```tsx
import { Menu, Search, Notification, Person } from "@refineui/react-icons";

function NavigationBar() {
  return (
    <nav className="navbar">
      <Menu size={24} className="nav-icon" />
      <Search size={20} className="nav-icon" />
      <Notification size={20} className="nav-icon" />
      <Person size={20} className="nav-icon" />
    </nav>
  );
}
```

### Button with Icon

```tsx
import { Download } from "@refineui/react-icons";

function IconButton({ children, onClick }) {
  return (
    <button className="icon-button" onClick={onClick}>
      <Download size={16} />
      {children}
    </button>
  );
}

// Usage
<IconButton onClick={handleDownload}>Download</IconButton>;
```

### Icon Grid

```tsx
import {
  Home,
  Search,
  Settings,
  Person,
  Mail,
  Phone,
} from "@refineui/react-icons";

function IconGrid() {
  const icons = [
    { component: Home, name: "home" },
    { component: Search, name: "search" },
    { component: Settings, name: "settings" },
    { component: Person, name: "user" },
    { component: Mail, name: "mail" },
    { component: Phone, name: "phone" },
  ];

  return (
    <div className="icon-grid">
      {icons.map(({ component: IconComponent, name }) => (
        <div key={name} className="icon-item">
          <IconComponent size={24} />
          <span>{name}</span>
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
const homeIcons = ["Home", "HomeFilled"];

// Search for icons containing "arrow"
const arrowIcons = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
```

### Icon Categories

```tsx
const navigationIcons = [
  "Home",
  "Search",
  "Menu",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "ChevronUp",
  "ChevronDown",
  "ChevronLeft",
  "ChevronRight",
];

const actionIcons = [
  "Add",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "Refresh",
  "Download",
  "Upload",
  "Copy",
  "Cut",
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
