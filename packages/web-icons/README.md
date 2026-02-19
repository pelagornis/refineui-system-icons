# @refineui/web-icons

Framework-agnostic web package for RefineUI System Icons.  
Provides font-based icons and utility functions.

## 📦 Installation

```bash
npm install @refineui/web-icons
# or
yarn add @refineui/web-icons
# or
pnpm add @refineui/web-icons
```

## 🚀 Usage

### 1. Load Font CSS

You need to load the font CSS once to display icons.

**With a bundler (recommended)**

```javascript
import "@refineui/web-icons/dist/fonts/refineui-system-icons.css";
```

Bundlers (Vite, Webpack, Parcel, etc.) resolve this path via the package `exports` field.

**Without a bundler (plain HTML)**

The package does not expose a URL you can use directly in `href`. Copy the CSS (and fonts) from `node_modules/@refineui/web-icons/dist/fonts/` into your project’s static folder (e.g. `public/` or `static/`) and link it:

```html
<link rel="stylesheet" href="/path/to/your-copy/refineui-system-icons.css" />
```

Or use a CDN if you publish the file there.

### 2. Using HTML Strings (createIconHTML)

Pass an icon name and style (`regular` | `filled`), and it returns a function that accepts size, color, and className.  
The returned function generates a `<span>` HTML string.

```javascript
import { createIconHTML, Add, AddFilled } from "@refineui/web-icons";

// Using createIconHTML directly
const addIconHTML = createIconHTML("Add", "regular");
const html = addIconHTML(24, "currentColor", "my-icon");
// → <span style="font-family: 'RefineUI-System-Icons-Regular'; ...">...</span>

// Using named exports (signature: (size?, color?, className?) => string)
const span24 = Add(24);                        // regular, size 24
const span32 = Add(32, "#0078d4", "");         // regular, size 32, custom color
const span32Filled = AddFilled(32, "red", ""); // filled, size 32
```

**Named exports**

- **regular**: `Add`, `Gavel`, `Home`, `Calendar`, etc. (PascalCase)
- **filled**: `AddFilled`, `GavelFilled`, `HomeFilled`, etc. (name + `Filled`)

Each export is equivalent to `createIconHTML(name, 'regular'|'filled')`.

### 3. Using Unicode/Class Only (Framework Rendering)

When rendering directly in React, Vue, etc., you can use `getIconChar` + `getFontFamily` or `getIconClass`.

```javascript
import { getIconChar, getFontFamily, getIconClass } from "@refineui/web-icons";

// Unicode character + font family
const char = getIconChar("Add", "regular", 24);  // The icon character
const font = getFontFamily("regular");           // 'RefineUI-System-Icons-Regular'
// <span style={{ fontFamily: font, fontSize: 24 }}>{char}</span>

// CSS class name (when font CSS is loaded)
const className = getIconClass("Gavel", "regular", 24); // e.g., 'ic_refineui_gavel_24_regular'
// <span className={className} />
```

### 4. IconUtils (Advanced)

Use `IconUtils` for metadata queries, icon search, and support checks.

```javascript
import { IconUtils } from "@refineui/web-icons";

IconUtils.getAllIconNames();           // Array of all icon names
IconUtils.getSupportedSizes();         // [16, 20, 24, 28, 32, 48]
IconUtils.getIconInfo("Add");          // Icon metadata
IconUtils.searchIcons("arrow");       // Icons containing 'arrow' in name/description
IconUtils.isIconSupported("Add", "regular", 24); // true/false
```

## 📤 API Summary

| export | Description |
|--------|-------------|
| `createIconHTML(iconName, style)` | Returns `(size?, color?, className?) => string` HTML generator function |
| `getIconChar(iconName, style?, size?)` | Returns the icon's unicode character |
| `getIconClass(iconName, style?, size?)` | Returns the icon's CSS class name |
| `getFontFamily(style?)` | Returns font family string for `'regular'` / `'filled'` |
| `IconUtils` | Above methods + `getAllIconNames`, `getSupportedSizes`, `getIconInfo`, `searchIcons`, `isIconSupported` |
| `regular-icons` / `filled-icons` | Named exports per icon (equivalent to `createIconHTML(name, 'regular'|'filled')`) |
| `IconData` | Type (metadata structure) |

- **Styles**: `'regular'` | `'filled'`
- **Supported sizes**: `16`, `20`, `24`, `28`, `32`, `48` (px)
- **Total icons**: 434

## 🎨 CSS Classes (When Font is Loaded)

When font CSS is loaded, you can use the following classes:

- Base: `.ic_refineui`, `.ic_refineui_regular`, `.ic_refineui_filled`
- Per icon: `getIconClass('Gavel', 'regular', 24)` → e.g., `ic_refineui_gavel_24_regular`

Font families:

- Regular: `RefineUI-System-Icons-Regular`
- Filled: `RefineUI-System-Icons-Filled`

## 📁 Package Structure

- `dist/index.js` / `dist/index.esm.js` – Bundle entry points
- `dist/fonts/refineui-system-icons.css` – Font definitions + icon classes
- `dist/fonts/*.woff2` – Font files

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.
