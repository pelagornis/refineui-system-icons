# @refineui/icon-cdn

A CDN package providing direct URL access to RefineUI System Icons. Perfect for projects that need to load icons directly from URLs without installing packages.

## 🚀 Features

- 🌐 **Direct URL access**: Load icons directly from CDN
- 📦 **434+ icons**: Complete icon collection
- 🎨 **Multiple formats**: SVG, PNG, and font files
- 🎭 **Two styles**: Regular and filled variants
- 📱 **Multiple sizes**: 16, 20, 24, 28, 32, 48px variants
- 🚀 **Fast delivery**: Global CDN distribution
- 💰 **Free to use**: No API keys or authentication required
- 🔧 **Framework agnostic**: Works with any technology stack

## 📦 Installation

```bash
npm install @refineui/icon-cdn
# or
yarn add @refineui/icon-cdn
```

## 🎯 Quick Start

### Direct URL Usage

```html
<!-- SVG icons -->
<img
  src="https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@latest/icons/24/add-regular.svg"
  alt="Add"
/>
<img
  src="https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@latest/icons/32/heart-filled.svg"
  alt="Heart"
/>

<!-- PNG icons -->
<img
  src="https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@latest/icons/24/add-regular.png"
  alt="Add"
/>
<img
  src="https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@latest/icons/32/heart-filled.png"
  alt="Heart"
/>
```

### CSS Background Images

```css
.add-icon {
  background-image: url("https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@latest/icons/24/add-regular.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
}

.heart-icon {
  background-image: url("https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@latest/icons/32/heart-filled.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
}
```

### JavaScript Dynamic Loading

```javascript
function loadIcon(iconName, size = 24, style = "regular", format = "svg") {
  const url = `https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@latest/icons/${size}/${iconName}-${style}.${format}`;

  const img = new Image();
  img.src = url;
  img.alt = iconName;

  return img;
}

// Usage
const addIcon = loadIcon("add", 24, "regular", "svg");
document.body.appendChild(addIcon);
```

## 📚 API Reference

### URL Structure

```
https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@latest/icons/{size}/{iconName}-{style}.{format}
```

### Parameters

| Parameter  | Type   | Description             | Examples               |
| ---------- | ------ | ----------------------- | ---------------------- |
| `size`     | number | Icon size in pixels     | 16, 20, 24, 28, 32, 48 |
| `iconName` | string | Icon name in snake_case | add, heart, settings   |
| `style`    | string | Icon style variant      | regular, filled        |
| `format`   | string | File format             | svg, png               |

### Available Formats

- **SVG**: Vector format, scalable, best quality
- **PNG**: Raster format, fixed size, good for web

### Icon Naming Convention

Icons follow a consistent naming pattern:

- **Format**: `icon-name-style`
- **Examples**:
  - `add-regular`
  - `heart-filled`
  - `settings-regular`

## 🎨 Available Icons

**All 434+ icons are supported!**

### Key Icon Categories:

- 🧭 **Navigation**: home, search, arrow, chevron, location, map
- ⚡ **Actions**: add, edit, delete, save, close, checkmark
- 💬 **Communication**: mail, chat, phone, share, notification
- 🎬 **Media**: play, pause, stop, video, audio, camera
- 👥 **Social**: person, user, group, heart, star
- 💻 **Technology**: computer, laptop, phone, tablet, wifi
- 🌤️ **Weather**: sun, moon, cloud, rain, snow
- 🔧 **Tools**: settings, gear, tool, wrench, hammer

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

## 🔧 Utility Functions

### URL Generation

```javascript
import { generateIconUrl, generateIconFileName } from "@refineui/icon-cdn";

// Generate icon URL
const iconUrl = generateIconUrl("add", 24, "regular", "svg");
// Returns: "https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@latest/icons/24/add-regular.svg"

// Generate filename
const fileName = generateIconFileName("heart", "filled", "png");
// Returns: "heart-filled.png"
```

### Icon Validation

```javascript
import { isIconSupported, getAvailableIcons } from "@refineui/icon-cdn";

// Check if icon is supported
const isSupported = isIconSupported("add", "regular", 24);
// Returns: true

// Get all available icons
const allIcons = getAvailableIcons();
// Returns: array of all icon names
```

## 📱 Examples

### Icon Gallery

```javascript
function createIconGallery(icons, size = 24, style = "regular") {
  const gallery = document.createElement("div");
  gallery.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 16px;
    padding: 16px;
  `;

  icons.forEach((iconName) => {
    const iconContainer = document.createElement("div");
    iconContainer.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px;
      border: 1px solid #eee;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s;
    `;

    const icon = document.createElement("img");
    icon.src = generateIconUrl(iconName, size, style, "svg");
    icon.alt = iconName;
    icon.style.width = `${size}px`;
    icon.style.height = `${size}px`;

    const label = document.createElement("span");
    label.textContent = iconName;
    label.style.cssText = `
      font-size: 12px;
      margin-top: 4px;
      text-align: center;
    `;

    iconContainer.appendChild(icon);
    iconContainer.appendChild(label);
    iconContainer.addEventListener("click", () =>
      console.log(`Clicked: ${iconName}`)
    );

    gallery.appendChild(iconContainer);
  });

  return gallery;
}

// Usage
const iconNames = ["add", "heart", "settings", "home", "search"];
const gallery = createIconGallery(iconNames, 24, "regular");
document.body.appendChild(gallery);
```

### Dynamic Icon Loading

```javascript
function loadIconAsync(iconName, size = 24, style = "regular") {
  return new Promise((resolve, reject) => {
    const url = generateIconUrl(iconName, size, style, "svg");

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load icon: ${response.statusText}`);
        }
        return response.text();
      })
      .then((svgContent) => {
        // Create SVG element from content
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgContent, "image/svg+xml");
        const svgElement = doc.querySelector("svg");

        if (svgElement) {
          svgElement.style.width = `${size}px`;
          svgElement.style.height = `${size}px`;
          resolve(svgElement);
        } else {
          reject(new Error("Invalid SVG content"));
        }
      })
      .catch(reject);
  });
}

// Usage
loadIconAsync("heart", 32, "filled")
  .then((icon) => {
    document.body.appendChild(icon);
  })
  .catch((error) => {
    console.error("Error loading icon:", error);
  });
```

### Icon Preloading

```javascript
function preloadIcons(iconNames, size = 24, style = "regular") {
  const promises = iconNames.map((iconName) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(iconName);
      img.onerror = () => resolve(iconName); // Continue even if some fail
      img.src = generateIconUrl(iconName, size, style, "svg");
    });
  });

  return Promise.all(promises);
}

// Usage
const commonIcons = ["add", "edit", "delete", "save", "close"];
preloadIcons(commonIcons, 24, "regular").then(() => {
  console.log("Common icons preloaded");
});
```

## 🚀 Performance

### CDN Benefits

- **Global Distribution**: Icons served from servers closest to users
- **Caching**: Browser and CDN level caching for fast loading
- **Compression**: Optimized file sizes for faster downloads
- **Parallel Loading**: Multiple icons can load simultaneously

### Best Practices

```javascript
// Preload critical icons
const criticalIcons = ["add", "close", "menu"];
criticalIcons.forEach((iconName) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = generateIconUrl(iconName, 24, "regular", "svg");
  document.head.appendChild(link);
});

// Lazy load non-critical icons
function lazyLoadIcon(iconName, container) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const icon = document.createElement("img");
        icon.src = generateIconUrl(iconName, 24, "regular", "svg");
        icon.alt = iconName;
        entry.target.appendChild(icon);
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
- [`@refineui/web-icons`](../web-icons) - Web icon library for non-React projects

## 🆘 Support

- 📧 Email: support@refineui.com
- 🐛 Issues: [GitHub Issues](https://github.com/refineui/system-icons/issues)
- 📖 Documentation: [docs.refineui.com](https://docs.refineui.com)
- 💬 Community: [Discord](https://discord.gg/refineui)

---

**@refineui/icon-cdn** - Professional icons via CDN 🚀
