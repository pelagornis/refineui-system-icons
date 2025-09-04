# Web Icons Package

Font-based icon utility package. Supports 434 icons and allows easy access to icons from fonts using unicode values.

## Installation

```bash
npm install @refineui/web-icons
```

## Usage

### 1. Using utility functions

```javascript
import { getIconChar, getIconClass, getFontFamily } from "@refineui/web-icons";

// Get unicode character
const gavelChar = getIconChar("gavel", "regular");
const gavelClass = getIconClass("gavel", 24, "regular");

// Use in HTML
<span class="ic_refineui_gavel_24_regular">${gavelChar}</span>;
```

### 2. Using convenience functions (supports all 434 icons)

```javascript
import { Gavel, Home, AddFilled } from "@refineui/web-icons";

// Regular style
const gavelIcon = Gavel(24); // 24px size
const homeIcon = Home(32); // 32px size

// Filled style
const addIcon = AddFilled(48); // 48px size
```

### 3. Icon search and information

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

## API

### Utility functions

| Function                             | Description                               |
| ------------------------------------ | ----------------------------------------- |
| `getIconChar(name, style, size)`     | Returns the unicode character of the icon |
| `getIconClass(name, style, size)`    | Returns the CSS class name of the icon    |
| `getFontFamily(style)`               | Returns the font family name              |
| `getAvailableIcons()`                | Returns all available icon names          |
| `searchIcons(query)`                 | Icon search                               |
| `isIconSupported(name, style, size)` | Check if icon is supported                |

### Convenience functions

Two functions are automatically generated for all 434 icons:

- `IconName(size)` - Regular style
- `IconNameFilled(size)` - Filled style

Example:

```javascript
Gavel(24); // Regular style, 24px
GavelFilled(32); // Filled style, 32px
Add(20); // Regular style, 20px
AddFilled(48); // Filled style, 48px
```

## Supported Icons

**All 434 icons are supported!**

### Key icons:

- Accessibility
- Add
- Home
- Search
- Settings
- Gavel
- Calendar
- Camera
- Chat
- Checkmark
- Clock
- Cloud
- Code
- Copy
- Delete
- Edit
- Eye
- File
- Folder
- Heart
- Image
- Link
- Lock
- Mail
- Menu
- More
- Notification
- Phone
- Play
- Plus
- Save
- Share
- Star
- Trash
- User
- Video
- Volume
- Warning
- Zoom

## Font file inclusion

You need to import the CSS file to load the font:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@refineui/system-icons/fonts/refineui-system-icons-regular.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@refineui/system-icons/fonts/refineui-system-icons-filled.css"
/>
```

## License

MIT License
