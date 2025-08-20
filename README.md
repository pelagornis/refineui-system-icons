# @refineui/icon-cdn

RefineUI System Icons를 CDN을 통해 사용할 수 있는 npm 패키지입니다.

## 🚀 설치

```bash
npm install @refineui/icon-cdn
```

## 📦 CDN 사용법

### 기본 사용법

```html
<!-- 기본 사용 -->
<img src="https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/24/add-filled.svg" alt="Add" />

<!-- 크기 지정 -->
<img height="32" width="32" src="https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/32/home-regular.svg" />

<!-- CSS 배경 이미지로 사용 -->
<div style="background-image: url('https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/16/settings-filled.svg');"></div>
```

### URL 형식

```
https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/{size}/{icon-name}-{style}.svg
```

### 매개변수

- **size**: 16, 20, 24, 28, 32, 48
- **icon-name**: 아이콘 이름 (snake_case)
- **style**: regular, filled

## 🎯 지원하는 아이콘

### 기본 아이콘
- add, home, settings, search, heart, star, checkmark, close
- edit, eye, file, folder, lock, mail, menu, play, plus
- share, trash, user, calendar, camera, chat, download
- gear, globe, image, link, more, notification, pause
- save, upload, video, alert, bookmark, add_circle, add_square

### 전체 아이콘 목록
- access_time, accessibility, airplane, album, alert, alert_badge, alert_off
- align_bottom, align_center_horizontal, align_center_vertical, align_left, align_right, align_top
- android, app_folder, app_recent, app_title, appstore, autosum, backpack
- backspace, badge, balloon, bar_chart_horizontal, bar_chart_horizontal_descending
- bar_chart_vertical, bar_chart_vertical_descending, barcode_scanner
- battery_0, battery_10, battery_100, battery_20, battery_30, battery_40, battery_50
- battery_60, battery_70, battery_80, battery_90, block, bluetooth, blur, board
- book, bookmark, bug, calculator, calendar, camera, cart, carton_box, chart
- chat, chat_add, chat_empty, checkmark, chess, chevron_down, chevron_left
- chevron_right, chevron_up, circle, clipboard, clock, clock_alarm, cloud, clover
- code, code_block, comma, comment, cone, contrast, control_button, cookie, copy
- couch, cpu, crop, crown, css, cube, cursor, cut, dart, database, delete
- delete_off, dentist, desk, desktop, desktop_mac, dialpad, diamond, dismiss
- dismiss_circle, dismiss_square, doctor, document, document_border, door, drag
- drawer, drop, dual_screen, dumbbell, dust, earth, edit, edit_off, elevator
- emoji, emoji_angry, emoji_cool, emoji_grimacing, emoji_laugh, emoji_meh
- emoji_sad, emoji_surprise, engine, equal, equal_circle, equal_off, error_circle
- eye, eye_off, eyedropper, eyedropper_off, fast_forward, filmstrip, filmstrip_off
- filter, fire, flag, flag_off, flash, flash_off, flashlight, flashlight_off
- flip_horizontal, flip_vertcial, folder, folder_open, frame, full_screen_maximize
- full_screen_minimize, games, gantt_chart, gas, gas_station, gavel, gif, gift
- gift_card, git, glasses, global, grid, guest, guitar, hammer

## 💻 JavaScript 사용법

### 패키지로 사용

```javascript
const { getIconInfo, generateCDNUrl } = require('@refineui/icon-cdn');

// 아이콘 정보 가져오기
const icon = getIconInfo('add', 24, 'filled');
console.log(icon.url); // https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/24/add-filled.svg

// CDN URL 직접 생성
const url = generateCDNUrl('home', 32, 'regular');
console.log(url); // https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/32/home-regular.svg
```

### 동적 생성

```javascript
// 동적으로 아이콘 URL 생성
function createIconUrl(iconName, size = 24, style = 'regular') {
  return `https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/${size}/${iconName}-${style}.svg`;
}

const iconUrl = createIconUrl('settings', 16, 'filled');
const img = document.createElement('img');
img.src = iconUrl;
img.alt = 'Settings';
```

## 🎨 React 컴포넌트 예시

```jsx
import React from 'react';

const RefineUIIcon = ({ name, size = 24, style = 'regular', ...props }) => {
  const iconUrl = `https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/${size}/${name}-${style}.svg`;
  
  return (
    <img 
      src={iconUrl} 
      alt={name}
      width={size}
      height={size}
      {...props}
    />
  );
};

// 사용법
<RefineUIIcon name="add" size={32} style="filled" />
<RefineUIIcon name="home" size={24} style="regular" />
```

## 🛠️ 개발

### 빌드

```bash
npm run build
```

### CLI 사용

```bash
# 아이콘 URL 생성
node index.js add 24 filled

# 사용법 보기
node index.js
```

## 📊 메타데이터

패키지에는 `icons/metadata.json` 파일이 포함되어 있어 사용 가능한 모든 아이콘 정보를 확인할 수 있습니다.

```json
{
  "version": "1.0.0",
  "totalIcons": 432,
  "sizes": [16, 20, 24, 28, 32, 48],
  "styles": ["regular", "filled"],
  "icons": [
    {
      "name": "add",
      "style": "filled",
      "size": 24,
      "fileName": "add-filled.svg",
      "url": "https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/24/add-filled.svg"
    }
  ]
}
```

## 🌐 CDN 제공업체

이 패키지는 [jsDelivr](https://www.jsdelivr.com/) CDN을 통해 제공됩니다.

- **빠른 로딩**: 전 세계 CDN 네트워크
- **안정성**: 99.9% 가동률 보장
- **무료**: 완전 무료 서비스

## 📝 라이선스

MIT License - 자세한 내용은 [LICENSE](../../LICENSE) 파일을 참조하세요.

## 🤝 기여하기

버그 리포트나 기능 요청은 [GitHub Issues](https://github.com/pelagornis/refineui-system-icons/issues)를 통해 제출해 주세요.
