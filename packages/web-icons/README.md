# @refineui/web-icons

A font-based icon utility package for vanilla web projects. Supports 434+ icons and provides easy access to icons using unicode values and utility functions.

## 🚀 Features

- 🔤 **Font-based system**: Lightweight and fast rendering
- 📦 **434+ icons**: Comprehensive icon collection
- 🎨 **Multiple sizes**: 16, 20, 24, 28, 32, 48px variants
- 🎭 **Two styles**: Regular and filled variants
- 🔍 **Built-in search**: Icon search and filtering capabilities
- 🚀 **Performance**: Optimized for web performance
- ♿ **Accessibility**: Proper alt text and ARIA support
- 🌐 **Framework agnostic**: Works with any web framework

## 📦 Installation

```bash
npm install @refineui/web-icons
# or
yarn add @refineui/web-icons
```

## 🎯 Quick Start

### 1. Using Utility Functions

```javascript
import { getIconChar, getIconClass, getFontFamily } from "@refineui/web-icons";

// Get unicode character
const gavelChar = getIconChar("gavel", "regular");
const gavelClass = getIconClass("gavel", 24, "regular");

// Use in HTML
<span class="ic_refineui_gavel_24_regular">${gavelChar}</span>;
```

### 2. Using Convenience Functions

```javascript
import { Gavel, Home, AddFilled } from "@refineui/web-icons";

// Regular style
const gavelIcon = Gavel(24); // 24px size
const homeIcon = Home(32); // 32px size

// Filled style
const addIcon = AddFilled(48); // 48px size
```

### 3. Icon Search and Information

```javascript
import {
  getAvailableIcons,
  searchIcons,
  getIconInfo,
} from "@refineui/web-icons";

// All icon list
const allIcons = getAvailableIcons();

// Icon search
const searchResults = searchIcons("add");

// Icon information
const iconInfo = getIconInfo("Gavel");
```

## 📚 API Reference

### Utility Functions

| Function                             | Description                               |
| ------------------------------------ | ----------------------------------------- |
| `getIconChar(name, style, size)`     | Returns the unicode character of the icon |
| `getIconClass(name, style, size)`    | Returns the CSS class name of the icon    |
| `getFontFamily(style)`               | Returns the font family name              |
| `getAvailableIcons()`                | Returns all available icon names          |
| `searchIcons(query)`                 | Icon search functionality                 |
| `isIconSupported(name, style, size)` | Check if icon is supported                |

### Convenience Functions

Two functions are automatically generated for all 434+ icons:

- `IconName(size)` - Regular style
- `IconNameFilled(size)` - Filled style

**Examples:**

```javascript
Gavel(24); // Regular style, 24px
GavelFilled(32); // Filled style, 32px
Add(20); // Regular style, 20px
AddFilled(48); // Filled style, 48px
```

## 🎨 Available Icons

**All 434+ icons are supported!**

### Key Icon Categories:

- 🧭 **Navigation**: Accessibility, Home, Search, Settings
- ⚡ **Actions**: Add, Edit, Delete, Save, Close, Checkmark
- 💬 **Communication**: Mail, Chat, Phone, Share, Notification
- 🎬 **Media**: Camera, Video, Play, Pause, Stop
- 👥 **Social**: Person, User, Group, Heart, Star
- 💻 **Technology**: Computer, Laptop, Phone, Tablet, Wifi
- 🌤️ **Weather**: Sun, Moon, Cloud, Rain, Snow
- 🔧 **Tools**: Gavel, Settings, Gear, Tool, Wrench, Hammer

### Complete Icon List

The package includes icons for every use case:

- **UI Elements**: Button, Input, Form, Modal, Tab
- **Business**: Calendar, Chart, Document, Invoice, Payment
- **Development**: Code, Database, Server, API, Terminal
- **Design**: Color, Palette, Brush, Crop, Filter
- **Communication**: Email, Message, Call, Video Call, Conference
- **File Management**: File, Folder, Document, Image, Archive
- **Security**: Lock, Shield, Key, Certificate, Privacy
- **And many more...**

## 🔤 Font File Inclusion

You need to import the CSS files to load the fonts:

### CDN (Recommended)

```html
<!-- Regular style -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@refineui/system-icons/fonts/refineui-system-icons-regular.css"
/>

<!-- Filled style -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@refineui/system-icons/fonts/refineui-system-icons-filled.css"
/>
```

### Local Installation

```javascript
// Import CSS in your JavaScript
import "@refineui/web-icons/dist/fonts/refineui-system-icons-regular.css";
import "@refineui/web-icons/dist/fonts/refineui-system-icons-filled.css";
```

## 🎨 Styling

### CSS Classes

Each icon has a specific CSS class that you can style:

```css
.ic_refineui_add_24_regular {
  font-size: 24px;
  color: #007aff;
  transition: color 0.2s ease;
}

.ic_refineui_add_24_regular:hover {
  color: #0056cc;
}
```

### Custom Styling

```javascript
// Apply custom styles to icon elements
const iconElement = document.createElement("span");
iconElement.textContent = getIconChar("heart", "filled");
iconElement.style.fontSize = "32px";
iconElement.style.color = "#FF0000";
iconElement.style.fontFamily = getFontFamily("filled");
```

## 📱 Examples

### Icon Button

```javascript
function createIconButton(iconName, size = 24, style = "regular") {
  const button = document.createElement("button");
  const icon = document.createElement("span");

  icon.textContent = getIconChar(iconName, style);
  icon.className = getIconClass(iconName, size, style);

  button.appendChild(icon);
  button.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: #007AFF;
    color: white;
  `;

  return button;
}

// Usage
const addButton = createIconButton("add", 16, "filled");
addButton.textContent += " Add Item";
document.body.appendChild(addButton);
```

### Icon Grid

```javascript
function createIconGrid(icons, onIconClick) {
  const grid = document.createElement("div");
  grid.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 16px;
    padding: 16px;
  `;

  icons.forEach((icon) => {
    const iconElement = document.createElement("div");
    iconElement.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px;
      border: 1px solid #eee;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s;
    `;

    const iconSpan = document.createElement("span");
    iconSpan.textContent = getIconChar(icon.name, "regular");
    iconSpan.className = getIconClass(icon.name, 24, "regular");

    const label = document.createElement("span");
    label.textContent = icon.name;
    label.style.cssText = `
      font-size: 12px;
      margin-top: 4px;
    `;

    iconElement.appendChild(iconSpan);
    iconElement.appendChild(label);
    iconElement.addEventListener("click", () => onIconClick(icon));

    grid.appendChild(iconElement);
  });

  return grid;
}
```

### Dynamic Icon Loading

```javascript
function loadIcon(iconName, size = 24, style = "regular") {
  if (!isIconSupported(iconName, style, size)) {
    console.warn(`Icon ${iconName} not supported`);
    return null;
  }

  const iconElement = document.createElement("span");
  iconElement.textContent = getIconChar(iconName, style);
  iconElement.className = getIconClass(iconName, size, style);

  return iconElement;
}

// Usage
const heartIcon = loadIcon("heart", 32, "filled");
if (heartIcon) {
  document.body.appendChild(heartIcon);
}
```

## 🚀 Performance

### Font Loading Optimization

```javascript
// Preload fonts for better performance
const fontLinks = [
  "https://cdn.jsdelivr.net/npm/@refineui/system-icons/fonts/refineui-system-icons-regular.css",
  "https://cdn.jsdelivr.net/npm/@refineui/system-icons/fonts/refineui-system-icons-filled.css",
];

fontLinks.forEach((href) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "style";
  link.href = href;
  document.head.appendChild(link);
});
```

### Lazy Icon Loading

```javascript
// Load icons only when needed
function lazyLoadIcon(iconName, container) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const icon = loadIcon(iconName);
        if (icon) {
          entry.target.appendChild(icon);
        }
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(container);
}
```

## 🔧 Development

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

## 📄 License

MIT License - see [LICENSE](../../LICENSE) for details.

## 🔗 Related Packages

- [`@refineui/react-icons`](../react-icons) - React icon components
- [`@refineui/react-native-icons`](../react-native-icons) - React Native icon components
- [`@refineui/icon-cdn`](../icon-cdn) - CDN package for direct URL access

## 🆘 Support

- 📧 Email: support@refineui.com
- 🐛 Issues: [GitHub Issues](https://github.com/refineui/system-icons/issues)
- 📖 Documentation: [docs.refineui.com](https://docs.refineui.com)
- 💬 Community: [Discord](https://discord.gg/refineui)

---

**@refineui/web-icons** - Professional icons for the web 🚀
