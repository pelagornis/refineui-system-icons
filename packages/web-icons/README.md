# RefineUI System Icons - Web Package

폰트 기반 아이콘 유틸리티 패키지입니다. 434개의 아이콘을 지원하며, unicode 값을 사용하여 폰트에서 아이콘을 쉽게 가져올 수 있습니다.

## 설치

```bash
npm install @refineui/web-icons
```

## 사용법

### 1. 유틸리티 함수 사용

```javascript
import { getIconChar, getIconClass, getFontFamily } from "@refineui/web-icons";

// unicode 문자 가져오기
const iconChar = getIconChar("Gavel", "regular", 24);
const fontFamily = getFontFamily("regular");

// HTML에서 사용
const html = `<span style="font-family: '${fontFamily}'; font-size: 24px;">${iconChar}</span>`;
```

### 2. 편의 함수 사용 (모든 434개 아이콘 지원)

```javascript
import { Gavel, AddFilled, Home } from "@refineui/web-icons";

// Regular 스타일
const gavelIcon = Gavel(24); // 24px 크기
const homeIcon = Home(32); // 32px 크기

// Filled 스타일
const addIcon = AddFilled(48); // 48px 크기

// HTML에서 사용
const html = `<span style="font-family: 'RefineUI-System-Icons-Regular'; font-size: 24px;">${gavelIcon}</span>`;
```

### 3. 아이콘 검색 및 정보

```javascript
import {
  getAvailableIcons,
  searchIcons,
  getIconInfo,
} from "@refineui/web-icons";

// 모든 아이콘 목록
const allIcons = getAvailableIcons();

// 아이콘 검색
const searchResults = searchIcons("add");

// 아이콘 정보
const iconInfo = getIconInfo("Gavel");
```

## API

### 유틸리티 함수들

| 함수                                 | 설명                              |
| ------------------------------------ | --------------------------------- |
| `getIconChar(name, style, size)`     | 아이콘의 unicode 문자 반환        |
| `getIconClass(name, style, size)`    | 아이콘의 CSS 클래스명 반환        |
| `getFontFamily(style)`               | 폰트 패밀리명 반환                |
| `getAvailableIcons()`                | 사용 가능한 모든 아이콘 이름 반환 |
| `searchIcons(query)`                 | 아이콘 검색                       |
| `isIconSupported(name, style, size)` | 아이콘 지원 여부 확인             |

### 편의 함수들

모든 434개 아이콘에 대해 다음 두 가지 함수가 자동으로 생성됩니다:

- `IconName(size)` - Regular 스타일
- `IconNameFilled(size)` - Filled 스타일

예시:

```javascript
Gavel(24); // Regular 스타일, 24px
GavelFilled(32); // Filled 스타일, 32px
Add(20); // Regular 스타일, 20px
AddFilled(48); // Filled 스타일, 48px
```

## 지원되는 아이콘

**434개의 모든 아이콘이 지원됩니다!**

### 주요 아이콘들:

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

## Font 파일 포함

CSS 파일을 import하여 font를 로드해야 합니다:

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

## 라이센스

MIT License
