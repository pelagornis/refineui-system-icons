# RefineUI React Icons - 예시

이 디렉토리는 `@refineui/react-icons` 패키지의 사용 예시를 포함합니다.

## 실행 방법

### 1. HTML 파일 직접 열기

```bash
# 브라우저에서 직접 열기
open example/index.html
```

### 2. 로컬 서버로 실행

```bash
# Python 3
python -m http.server 8000

# Node.js (npx serve 사용)
npx serve example

# 또는 다른 정적 파일 서버 사용
```

그 후 브라우저에서 `http://localhost:8000` 또는 해당 포트로 접속하세요.

## 예시 기능

### 🎯 주요 기능

- **아이콘 선택**: 드롭다운에서 다양한 아이콘 선택
- **크기 조정**: 16px ~ 48px까지 다양한 크기 지원
- **스타일 변경**: Regular와 Filled 스타일 전환
- **실시간 미리보기**: 선택한 설정으로 아이콘 미리보기
- **아이콘 갤러리**: 모든 아이콘을 한눈에 확인

### 🎨 스타일링 예시

- 폰트 기반 아이콘 시스템
- CSS로 크기, 색상, 스타일 조정
- 호버 효과 및 애니메이션

### 📱 반응형 디자인

- 모바일 친화적 레이아웃
- 그리드 시스템으로 아이콘 배치
- 터치 친화적 인터페이스

## 폰트 설정

예시가 제대로 작동하려면 폰트 파일이 필요합니다:

```css
@font-face {
  font-family: "RefineUI-System-Icons-Regular";
  src: url("../../fonts/refineui-system-icons-regular.woff2") format("woff2");
}

@font-face {
  font-family: "RefineUI-System-Icons-Filled";
  src: url("../../fonts/refineui-system-icons-filled.woff2") format("woff2");
}
```

## 실제 사용법

### 기본 사용

```tsx
import { Icon } from "@refineui/react-icons";

function App() {
  return (
    <div>
      <Icon name="add" size={24} style="regular" />
      <Icon name="heart" size={32} style="filled" color="#ff0000" />
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
  inlineStyle={{ color: "#007AFF" }}
  onClick={() => console.log("clicked")}
/>
```

## 지원하는 아이콘

현재 예시에서 지원하는 아이콘들:

- add, home, settings, heart, star
- search, user, mail, phone, camera
- folder, file, edit, delete, share
- download, upload, refresh

## 문제 해결

### 아이콘이 보이지 않는 경우

1. 폰트 파일 경로 확인
2. 브라우저 개발자 도구에서 폰트 로딩 확인
3. CORS 설정 확인 (로컬 서버 사용 권장)

### 성능 최적화

- 폰트 파일을 CDN에 호스팅
- 폰트 preload 설정
- 아이콘 캐싱 활용
