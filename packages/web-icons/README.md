# @refineui/web-icons

CSS/Font-based icon system for RefineUI System Icons.

## 📦 Installation

```bash
npm install @refineui/web-icons
# or
yarn add @refineui/web-icons
# or
pnpm add @refineui/web-icons
```

## 🚀 Quick Start

### HTML Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="node_modules/@refineui/web-icons/dist/refineui-icons.css"
    />
  </head>
  <body>
    <!-- Basic usage -->
    <i class="refineui-icon refineui-icon-home"></i>

    <!-- With size -->
    <i class="refineui-icon refineui-icon-search refineui-icon--size-20"></i>

    <!-- With custom color -->
    <i class="refineui-icon refineui-icon-settings" style="color: #0078d4;"></i>
  </body>
</html>
```

### CSS Import

```css
@import "@refineui/web-icons/dist/refineui-icons.css";
```

### JavaScript Import

```javascript
import "@refineui/web-icons/dist/refineui-icons.css";
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

- **16px**: `refineui-icon--size-16`
- **20px**: `refineui-icon--size-20`
- **24px**: `refineui-icon--size-24` (default)
- **32px**: `refineui-icon--size-32`
- **48px**: `refineui-icon--size-48`

## 🔧 Advanced Usage

### Custom Styling

```css
.my-custom-icon {
  --refineui-icon-color: #0078d4;
  --refineui-icon-size: 24px;
  --refineui-icon-stroke-width: 1.5;
}

.my-custom-icon:hover {
  --refineui-icon-color: #106ebe;
  transform: scale(1.1);
  transition: all 0.2s ease;
}
```

### CSS Custom Properties

```css
:root {
  --refineui-icon-primary: #0078d4;
  --refineui-icon-secondary: #605e5c;
  --refineui-icon-success: #107c10;
  --refineui-icon-warning: #ff8c00;
  --refineui-icon-error: #d83b01;
}

.icon-primary {
  --refineui-icon-color: var(--refineui-icon-primary);
}

.icon-secondary {
  --refineui-icon-color: var(--refineui-icon-secondary);
}
```

### Responsive Icons

```css
.responsive-icon {
  font-size: 16px;
}

@media (min-width: 768px) {
  .responsive-icon {
    font-size: 20px;
  }
}

@media (min-width: 1024px) {
  .responsive-icon {
    font-size: 24px;
  }
}
```

## 🎯 Best Practices

### 1. **Performance**

- Use CSS icons for static content
- Consider using React icons for interactive elements
- Optimize font loading with `font-display: swap`

### 2. **Accessibility**

```html
<i
  class="refineui-icon refineui-icon-search"
  aria-label="Search"
  role="button"
  tabindex="0"
></i>
```

### 3. **Semantic HTML**

```html
<button class="icon-button">
  <i class="refineui-icon refineui-icon-download"></i>
  <span>Download</span>
</button>
```

### 4. **Consistent Sizing**

```css
.icon-button .refineui-icon {
  font-size: 16px;
  margin-right: 8px;
}

.navigation .refineui-icon {
  font-size: 20px;
}

.header .refineui-icon {
  font-size: 24px;
}
```

## 📚 Examples

### Navigation Bar

```html
<nav class="navbar">
  <i class="refineui-icon refineui-icon-menu nav-icon"></i>
  <i class="refineui-icon refineui-icon-search nav-icon"></i>
  <i class="refineui-icon refineui-icon-notification nav-icon"></i>
  <i class="refineui-icon refineui-icon-user nav-icon"></i>
</nav>
```

```css
.navbar {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
}

.nav-icon {
  font-size: 20px;
  color: #333;
  cursor: pointer;
  transition: color 0.2s ease;
}

.nav-icon:hover {
  color: #0078d4;
}
```

### Button with Icon

```html
<button class="icon-button">
  <i class="refineui-icon refineui-icon-download"></i>
  <span>Download</span>
</button>
```

```css
.icon-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #0078d4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.icon-button .refineui-icon {
  font-size: 16px;
}

.icon-button:hover {
  background: #106ebe;
}
```

### Icon Grid

```html
<div class="icon-grid">
  <div class="icon-item">
    <i class="refineui-icon refineui-icon-home"></i>
    <span>Home</span>
  </div>
  <div class="icon-item">
    <i class="refineui-icon refineui-icon-search"></i>
    <span>Search</span>
  </div>
  <div class="icon-item">
    <i class="refineui-icon refineui-icon-settings"></i>
    <span>Settings</span>
  </div>
</div>
```

```css
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  padding: 16px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
  text-align: center;
}

.icon-item .refineui-icon {
  font-size: 24px;
  color: #333;
}

.icon-item span {
  font-size: 12px;
  color: #666;
}
```

## 🔍 Icon Search

### Finding Icons by Name

```javascript
// Search for icons containing "home"
const homeIcons = ["home", "home-filled", "home-outline"];

// Search for icons containing "arrow"
const arrowIcons = ["arrow-up", "arrow-down", "arrow-left", "arrow-right"];
```

### Icon Categories

```javascript
const iconCategories = {
  navigation: ["home", "search", "menu", "back", "forward"],
  actions: ["add", "edit", "delete", "save", "cancel"],
  communication: ["mail", "phone", "chat", "notification"],
  media: ["play", "pause", "stop", "volume", "camera"],
  system: ["settings", "gear", "user", "lock", "unlock"],
  files: ["folder", "file", "document", "image", "pdf"],
};
```

## 🛠️ Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/refineui/system-icons.git
cd system-icons

# Install dependencies
npm install

# Build web icons
npm run generate:web-icons
npm run build:fonts
```

### Adding New Icons

1. Add SVG files to `src/icons/`
2. Run `npm run generate:metadata`
3. Run `npm run generate:web-icons`
4. Test your changes

## 🐛 Troubleshooting

### Common Issues

1. **Icon not displaying**

   - Check if the icon name is correct
   - Verify the CSS file is loaded
   - Check browser console for errors

2. **Styling issues**

   - Ensure CSS is properly loaded
   - Check for conflicting styles
   - Verify CSS custom properties

3. **Font loading issues**
   - Check network tab for font requests
   - Verify font file paths
   - Consider using `font-display: swap`

### Getting Help

- 📧 Email: support@pealgornis.com
- 🐛 Issues: [GitHub Issues](https://github.com/pealgornis/refineui-system-icons/issues)
- 💬 Community: [Slack](https://pelagornis.slack.com)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
