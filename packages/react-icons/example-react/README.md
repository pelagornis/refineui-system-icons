# RefineUI React Icons - React Example

이 디렉토리는 `@refineui/react-icons` 패키지를 React로 구현한 예시입니다.

## 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm start
```

브라우저에서 `http://localhost:3000`으로 접속하면 예시를 확인할 수 있습니다.

## 예시 기능

### 🎯 주요 기능

- **React 컴포넌트 기반**: 실제 React 컴포넌트로 구현
- **상태 관리**: useState를 사용한 동적 상태 관리
- **아이콘 선택**: 갤러리에서 다양한 아이콘 선택
- **크기 조정**: 16px ~ 48px까지 다양한 크기 지원
- **스타일 변경**: Regular와 Filled 스타일 전환
- **실시간 미리보기**: 선택한 설정으로 아이콘 미리보기

### 🎨 스타일링 예시

- 폰트 기반 아이콘 시스템
- CSS-in-JS 스타일링
- 호버 효과 및 애니메이션
- 반응형 디자인

### 📱 React 최적화

- TypeScript 지원
- 컴포넌트 기반 아키텍처
- 상태 관리
- 이벤트 핸들링

## 실제 사용법

### 기본 사용

```tsx
import { Icon } from "@refineui/react-icons";

function App() {
  return (
    <div>
      <Icon name="add" size={24} style="regular" />
      <Icon name="heart" size={32} style="filled" />
    </div>
  );
}
```

### 상태와 함께 사용

```tsx
import React, { useState } from "react";
import { Icon } from "@refineui/react-icons";

function IconSelector() {
  const [selectedIcon, setSelectedIcon] = useState("add");
  const [iconSize, setIconSize] = useState(24);
  const [iconStyle, setIconStyle] = useState("regular");

  return (
    <div>
      <Icon
        name={selectedIcon}
        size={iconSize}
        style={iconStyle}
        onClick={() => console.log("Icon clicked")}
      />
    </div>
  );
}
```

### 스타일링

```tsx
<Icon
  name="settings"
  size={24}
  style="filled"
  className="my-icon"
  inlineStyle={{
    color: "#007AFF",
    transform: "rotate(45deg)",
  }}
  onClick={() => console.log("Settings clicked")}
/>
```

## 지원하는 아이콘

현재 예시에서 지원하는 아이콘들:

- add, home, heart

## 기술 스택

- **React 18**: 최신 React 기능 사용
- **TypeScript**: 타입 안전성 보장
- **Vite**: 빠른 개발 서버 및 빌드 도구
- **CSS Modules**: 스타일 격리

## 폰트 설정

예시가 제대로 작동하려면 폰트 파일이 필요합니다:

```css
@font-face {
  font-family: "RefineUI-System-Icons-Regular";
  src: url("./fonts/refineui-system-icons-regular.woff2") format("woff2");
}

@font-face {
  font-family: "RefineUI-System-Icons-Filled";
  src: url("./fonts/refineui-system-icons-filled.woff2") format("woff2");
}
```

## 문제 해결

### 아이콘이 보이지 않는 경우

1. 폰트 파일 경로 확인
2. 브라우저 개발자 도구에서 폰트 로딩 확인
3. 개발 서버가 정상적으로 실행되었는지 확인

### 성능 최적화

- React.memo를 사용한 컴포넌트 최적화
- useMemo를 사용한 계산 최적화
- 폰트 preload 설정
