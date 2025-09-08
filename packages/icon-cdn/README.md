# @refineui/icon-cdn

A CDN package providing direct URL access to RefineUI System Icons. Perfect for projects that need to load icons directly from URLs without installing packages.

## 🚀 Features

- 🌐 **Direct URL access**: Load icons directly from CDN
- 📦 **5,207+ icons**: Complete icon collection (434 base icons × 2 styles × 6 sizes)
- 🎨 **SVG format**: High-quality vector icons (SVG only)
- 🎭 **Two styles**: Regular and filled variants
- 📱 **Multiple sizes**: 16, 20, 24, 28, 32, 48px variants
- 🚀 **Fast delivery**: Global CDN distribution via jsDelivr
- 💰 **Free to use**: No API keys or authentication required
- 🔧 **Framework agnostic**: Works with any technology stack
- ✅ **Real SVG icons**: Actual vector graphics, not placeholders
- 🎯 **Lightweight**: No font files, pure SVG approach

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
  src="https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@vTag/icons/24/add-regular.svg"
  alt="Add"
/>
<img
  src="https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@vTag/icons/32/heart-filled.svg"
  alt="Heart"
/>
<img
  src="https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@vTag/icons/32/add_square-filled.svg"
  alt="Add Square"
/>
```

### CSS Background Images

```css
.add-icon {
  background-image: url("https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@vTag/icons/24/add-regular.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
}

.heart-icon {
  background-image: url("https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@vTag/icons/32/heart-filled.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
}
```

### JavaScript Dynamic Loading

```javascript
function loadIcon(iconName, size = 24, style = "regular") {
  const url = `https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@vTag/icons/${size}/${iconName}-${style}.svg`;

  const img = new Image();
  img.src = url;
  img.alt = iconName;

  return img;
}

// Usage
const addIcon = loadIcon("add", 24, "regular");
const heartIcon = loadIcon("heart", 32, "filled");
document.body.appendChild(addIcon);
document.body.appendChild(heartIcon);
```

## 📚 API Reference

### URL Structure

```
https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@vTag/icons/{size}/{iconName}-{style}.svg
```

### Parameters

| Parameter  | Type   | Description             | Examples               |
| ---------- | ------ | ----------------------- | ---------------------- |
| `size`     | number | Icon size in pixels     | 16, 20, 24, 28, 32, 48 |
| `iconName` | string | Icon name in snake_case | add, heart, add_square |
| `style`    | string | Icon style variant      | regular, filled        |

### Available Formats

- **SVG**: Vector format, scalable, best quality (SVG only format)

### Icon Naming Convention

Icons follow a consistent naming pattern:

- **Format**: `icon-name-style`
- **Examples**:
  - `add-regular`
  - `heart-filled`
  - `add_square-filled`
  - `access_time-regular`

## 🎨 Available Icons

**All 5,207+ icons are supported!** (434 base icons × 2 styles × 6 sizes)

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
import {
  createIconURL,
  getIconURL,
  generateIconFileName,
} from "@refineui/icon-cdn";

// Generate icon URL
const iconUrl = createIconURL("add", 24, "regular");
// Returns: "https://jihoonahn.github.io/refineui-system-icons/cdn/icons/24/add-regular.svg"

// Alternative function
const iconUrl2 = getIconURL("heart", 32, "filled");
// Returns: "https://jihoonahn.github.io/refineui-system-icons/cdn/icons/32/heart-filled.svg"

// Generate filename
const fileName = generateIconFileName("heart", "filled");
// Returns: "heart-filled.svg"
```

### Icon Validation

```javascript
import { isValidIconSize, isValidIconStyle } from "@refineui/icon-cdn";

// Validate icon size
const isValidSize = isValidIconSize(24); // Returns: true
const isInvalidSize = isValidIconSize(30); // Returns: false

// Validate icon style
const isValidStyle = isValidIconStyle("regular"); // Returns: true
const isInvalidStyle = isValidIconStyle("outline"); // Returns: false
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
    icon.src = `https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@vTag/icons/${size}/${iconName}-${style}.svg`;
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
    const url = `https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@vTag/icons/${size}/${iconName}-${style}.svg`;

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
      img.src = `https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@vTag/icons/${size}/${iconName}-${style}.svg`;
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
  link.href = `https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@vTag/icons/24/${iconName}-regular.svg`;
  document.head.appendChild(link);
});

// Lazy load non-critical icons
function lazyLoadIcon(iconName, container) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const icon = document.createElement("img");
        icon.src = `https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@vTag/icons/24/${iconName}-regular.svg`;
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
- [`refineui_system_icons`](../../flutter) - Flutter icon package

## 🆘 Support

- 🐛 Issues: [GitHub Issues](https://github.com/pelagornis/refineui-system-icons/issues)
- 📖 Documentation: [GitHub Repository](https://github.com/pelagornis/refineui-system-icons)
- 💬 Community: [GitHub Discussions](https://github.com/pelagornis/refineui-system-icons/discussions)

## 📝 Changelog

### v0.2.2 (Latest)

- 🎯 **Major Update**: Removed font files for lightweight package
- 🔧 **API Changes**: Updated utility functions to focus on SVG URLs
- ✨ **New Functions**: `createIconURL()`, `getIconURL()` for direct URL generation
- 🗑️ **Removed**: Font-based icon generation functions
- 📦 **Optimized**: Package size significantly reduced by removing font files
- 🎨 **SVG Only**: Pure SVG approach for better performance and flexibility

### v0.2.1

- ✅ Fixed: Real SVG icons instead of text placeholders
- ✅ Updated: All 5,207+ icons now properly generated from source assets
- ✅ Improved: Build process now copies actual SVG files from assets directory

### v0.2.0

- 🎉 Initial release with CDN functionality
- 📦 5,207+ icons across 6 sizes and 2 styles
- 🌐 Global CDN distribution via jsDelivr

---

**@refineui/icon-cdn** - Professional icons via CDN 🚀
