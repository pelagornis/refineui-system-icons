# RefineUI System Icons 🎨

Microsoft FluentUI System Icons를 참고하여 만든 전문적인 아이콘 시스템입니다. React, React Native, Web 환경에서 사용할 수 있는 통합 아이콘 패키지입니다.

## 📦 패키지 구조

```
packages/
├── react-icons/          # React용 아이콘 패키지
├── react-native-icons/   # React Native용 아이콘 패키지
└── web-icons/           # Web용 아이콘 패키지
```

## 🚀 설치 및 사용법

### React

```bash
npm install @refineui/react-icons
```

```tsx
import {
  AccessibilityRegular,
  Add16Filled,
  Home32Regular,
  SearchFilled,
} from "@refineui/react-icons";

// === FLUENTUI 스타일 방식 ===
// Unsized 방식 (기본 24px)
const accessibilityIcon = <AccessibilityRegular style={{ color: "blue" }} />;
const addIconFilled = <AddFilled style={{ fontSize: "20px" }} />;

// Sized 방식
const addIcon16 = <Add16Filled style={{ color: "red" }} />;
const homeIcon32 = <Home32Regular style={{ marginRight: "8px" }} />;
```

### React Native

```bash
npm install @refineui/react-native-icons
```

```tsx
import {
  AccessibilityRegular,
  Add16Filled,
  Home32Regular,
  SearchFilled,
} from "@refineui/react-native-icons";

// React Native에서는 Text 컴포넌트로 렌더링됩니다

// === FLUENTUI 스타일 방식 ===
// Unsized 방식
const accessibilityIcon = <AccessibilityRegular style={{ color: "blue" }} />;
const addIconFilled = <AddFilled style={{ fontSize: 20 }} />;

// Sized 방식
const addIcon16 = <Add16Filled style={{ color: "red" }} />;
const homeIcon32 = <Home32Regular style={{ marginRight: 8 }} />;
```

### Web

```bash
npm install @refineui/web-icons
```

```javascript
import {
  AccessibilityRegular,
  Add16Filled,
  Home32Regular,
  SearchFilled,
} from "@refineui/web-icons";

// 문자열로 아이콘 반환
const accessibilityIcon = AccessibilityRegular(); // 문자열 반환
const addIconFilled = AddFilled(); // 문자열 반환

// Sized 방식
const addIcon16 = Add16Filled(); // 문자열 반환
const homeIcon32 = Home32Regular(); // 문자열 반환

// DOM 요소에 적용
const iconElement = document.createElement("span");
iconElement.textContent = addIcon16;
iconElement.style.fontFamily = "RefineUI-System-Icons-Filled";
```

## 🎯 주요 기능

### 1. 중앙 집중식 메타데이터

- 모든 아이콘 정보가 `metadata.json`에 저장
- 자동 매핑 시스템으로 유지보수 용이

### 2. 플랫폼별 최적화

- **React**: React 컴포넌트로 렌더링
- **React Native**: Text 컴포넌트로 렌더링
- **Web**: 문자열로 반환하여 DOM에 직접 적용

### 3. 다양한 크기 지원

- 16px, 20px, 24px, 28px, 32px, 48px
- 각 크기별 최적화된 아이콘 제공

### 4. 스타일 지원

- **Regular**: 기본 스타일
- **Filled**: 채워진 스타일

### 5. TypeScript 지원

- 완전한 TypeScript 타입 정의
- IntelliSense 지원으로 개발 경험 향상

### 6. FluentUI 스타일 API

#### Unsized 방식 (기본 24px)

```tsx
// AccessibilityRegular, AccessibilityFilled
<AccessibilityRegular style={{ color: "blue" }} />
<AddFilled style={{ fontSize: "20px" }} />
```

#### Sized 방식

```tsx
// Accessibility16Regular, Accessibility24Filled
<Add16Filled style={{ color: "red" }} />
<Home32Regular style={{ marginRight: "8px" }} />
```

### 7. 유틸리티 함수

```javascript
import IconUtils from "@refineui/react-icons";

// 사용 가능한 아이콘 목록
const icons = IconUtils.getAvailableIcons();

// 폰트 패밀리 정보
const fontFamilies = IconUtils.getFontFamilies();

// 사용 가능한 크기
const sizes = IconUtils.getAvailableSizes();

// 아이콘 정보 조회
const iconInfo = IconUtils.getIconInfo("Accessibility");

// 아이콘 검색
const searchResults = IconUtils.searchIcons("add");
```

### 8. 동적 아이콘 생성

모든 아이콘은 동적으로 생성되므로 필요에 따라 `createIcon` 함수를 사용할 수 있습니다:

```typescript
import { createIcon } from "@refineui/react-icons";

// 동적으로 아이콘 생성
const icon = createIcon("AccessibilityRegular", { style: { color: "red" } });
```

### 9. 메타데이터 시스템

모든 아이콘 정보는 중앙 집중식 메타데이터 시스템으로 관리됩니다:

```javascript
// 메타데이터에서 아이콘 정보 확인
const iconInfo = IconUtils.getIconInfo("Accessibility");
console.log(iconInfo);
// {
//   name: "Accessibility",
//   slug: "accessibility",
//   size: [16, 20, 24, 28, 32, 48],
//   style: ["filled", "regular"],
//   description: "Used in accessibility scenarios.",
//   unicodeMapping: { ... }
// }
```

## 🔧 개발

### Figma에서 아이콘 추출

Figma에서 아이콘을 추출하려면 먼저 API 설정이 필요합니다:

1. **Figma Personal Access Token 생성**

   - Figma → Settings → Personal access tokens → Create new token
   - 자세한 내용은 [docs/FIGMA_SETUP.md](docs/FIGMA_SETUP.md) 참조

2. **환경 설정**

   ```bash
   cp .env.example .env
   # .env 파일에 FIGMA_TOKEN과 FIGMA_FILE_KEY 설정
   ```

3. **아이콘 추출**

   ```bash
   # 증분 업데이트 (수정된 것만)
   python scripts/figma_icon_extractor.py

   # 전체 동기화
   python scripts/figma_icon_extractor.py --full-sync
   ```

### 메타데이터 생성

```bash
npm run generate:metadata
```

### 빌드

```bash
npm run build
```

### 개발 모드

```bash
npm run dev
```

## 📋 지원하는 아이콘

현재 **434개의 고유 아이콘**이 지원됩니다!

### 주요 아이콘 카테고리:

- **UI/UX**: Accessibility, Add, Search, Settings, Checkmark, Home
- **기술**: Android, Ios, Windows, Macos, Git, Javascript, Typescript
- **미디어**: Camera, Video, Music, Image, Movie
- **비즈니스**: Calendar, Chart, Document, Mail, Payment
- **개발**: Code, Database, Server, Api, Terminal
- **기타**: Heart, Star, Fire, Cloud, Weather 등

### 지원 형식:

- **Regular & Filled 스타일**: 각 아이콘마다 두 가지 스타일
- **6가지 크기**: 16px, 20px, 24px, 28px, 32px, 48px
- **총 5,208개의 메서드**: 모든 조합을 지원

### 사용 예시:

```tsx
// Unsized 방식 (기본 24px)
<AccessibilityRegular />
<AddFilled />
<HomeRegular />

// Sized 방식
<Add16Filled />
<Search32Regular />
<Settings48Filled />
```

## 🤝 참고

이 프로젝트는 [Microsoft FluentUI System Icons](https://github.com/microsoft/fluentui-system-icons)의 구조와 API 설계를 참고하여 제작되었습니다.

## 📄 라이선스

MIT License
