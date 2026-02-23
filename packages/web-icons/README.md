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

> **⚠️ Icons show as an empty rectangle (□) if the font is not loaded.**  
> You must import the font CSS **once** in your app (e.g. in the root layout or main entry) before using `createIconHTML`, `getIconClass`, or named exports.

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

**Icon names** use **hyphenated** form (no spaces), e.g. `add`, `local-language`, `weather-sunny`. Legacy names with spaces are normalized internally.

```javascript
import { createIconHTML, Add, AddFilled } from "@refineui/web-icons";

// Using createIconHTML directly (icon name: hyphenated)
const addIconHTML = createIconHTML("add", "regular");
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

Each export is equivalent to `createIconHTML(name, 'regular'|'filled')` where `name` is the hyphenated identifier (e.g. `local-language`).

### 3. Using Unicode/Class Only (Framework Rendering)

When rendering directly in React, Vue, etc., you can use `getIconChar` + `getFontFamily` or `getIconClass`.

```javascript
import { getIconChar, getFontFamily, getIconClass } from "@refineui/web-icons";

// Unicode character + font family (icon name: hyphenated)
const char = getIconChar("add", "regular", 24);
const font = getFontFamily("regular");
// <span style={{ fontFamily: font, fontSize: 24 }}>{char}</span>

// CSS class name — only works if the font CSS is loaded (see §1). Otherwise you get empty space.
const className = getIconClass("gavel", "regular", 24);
// <span className={className} />
```

**If you see empty space:** the icon font is not loaded. Either import the font CSS once (see §1), or use `createIconHTML(iconName, style)(size)` so the span includes inline `font-family` and the icon character (you still need the font file loaded via CSS somewhere).

### 4. IconUtils (Advanced)

Use `IconUtils` for metadata queries, icon search, and support checks.

```javascript
import { IconUtils } from "@refineui/web-icons";

IconUtils.getAllIconNames();           // Array of all icon names (hyphenated, e.g. "local-language")
IconUtils.getSupportedSizes();         // [16, 20, 24, 28, 32, 48]
IconUtils.getIconInfo("add");          // Icon metadata (use hyphenated name)
IconUtils.searchIcons("arrow");        // Icons containing 'arrow' in name/description
IconUtils.isIconSupported("add", "regular", 24); // true/false
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
- Per icon: `getIconClass('gavel', 'regular', 24)` → e.g., `ic_refineui_gavel_24_regular`

Font families:

- Regular: `RefineUI-System-Icons-Regular`
- Filled: `RefineUI-System-Icons-Filled`

## ⚠️ Troubleshooting: Empty rectangle (□) or empty space

- **Empty rectangle / hollow box:** The icon font is **not loaded**. The span and unicode character are correct, but the browser has no font to draw the glyph. **Fix:** Import the font CSS **before** any icon is rendered, e.g. in your app entry:
  ```javascript
  import "@refineui/web-icons/dist/fonts/refineui-system-icons.css";
  ```
- **Font file 404:** The CSS references `./refineui-system-icons-regular.woff2`. If the woff2 request 404s (check Network tab), copy `node_modules/@refineui/web-icons/dist/fonts/*` to your public folder or configure the bundler so font URLs resolve.
- **getIconClass:** Same as above — font CSS must be loaded or you get empty space.
- **getIconChar:** Use `createIconHTML` (which sets `font-family` on the span), or set `fontFamily: getFontFamily('regular')` on the element yourself.

## 📁 Package Structure

- `dist/index.js` / `dist/index.esm.js` – Bundle entry points
- `dist/fonts/refineui-system-icons.css` – Font definitions + icon classes
- `dist/fonts/*.woff2` – Font files

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.
