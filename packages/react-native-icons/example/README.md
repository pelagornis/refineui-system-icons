# RefineUI React Native Icons - 예시

이 디렉토리는 `@refineui/react-native-icons` 패키지의 사용 예시를 포함합니다.

## 실행 방법

### 1. React Native 프로젝트에 통합

```bash
# 패키지 설치
npm install @refineui/react-native-icons

# 또는 yarn 사용
yarn add @refineui/react-native-icons
```

### 2. 폰트 파일 추가

React Native 프로젝트의 `assets/fonts/` 디렉토리에 폰트 파일을 복사:

```bash
# 폰트 파일 복사
cp ../../fonts/refineui-system-icons-regular.ttf assets/fonts/
cp ../../fonts/refineui-system-icons-filled.ttf assets/fonts/
```

### 3. react-native.config.js 설정

```javascript
module.exports = {
  assets: ["./assets/fonts/"],
};
```

### 4. 폰트 링크

```bash
npx react-native link
# 또는
npx react-native-asset
```

### 5. 앱에서 사용

```tsx
import { Icon } from "@refineui/react-native-icons";

// App.tsx에서 사용
<Icon name="add" size={24} style="regular" />;
```

## 예시 기능

### 🎯 주요 기능

- **아이콘 선택**: 갤러리에서 다양한 아이콘 선택
- **크기 조정**: 16px ~ 48px까지 다양한 크기 지원
- **스타일 변경**: Regular와 Filled 스타일 전환
- **실시간 미리보기**: 선택한 설정으로 아이콘 미리보기
- **터치 이벤트**: 아이콘 클릭 및 상호작용

### 🎨 스타일링 예시

- 폰트 기반 아이콘 시스템
- 색상, 배경색, 테두리 반지름 설정
- 패딩, 마진 등 레이아웃 속성
- 접근성 지원 (accessibilityLabel, accessibilityHint)

### 📱 네이티브 성능

- React Native 최적화
- 네이티브 폰트 렌더링
- 터치 이벤트 처리

## 실제 사용법

### 기본 사용

```tsx
import { Icon } from "@refineui/react-native-icons";

function App() {
  return (
    <View>
      <Icon name="add" size={24} style="regular" />
      <Icon name="heart" size={32} style="filled" color="#ff0000" />
    </View>
  );
}
```

### 스타일링

```tsx
<Icon
  name="settings"
  size={24}
  style="filled"
  color="#007AFF"
  backgroundColor="#E3F2FD"
  borderRadius={8}
  padding={8}
  onPress={() => console.log("pressed")}
  accessibilityLabel="Settings icon"
  accessibilityHint="Double tap to open settings"
/>
```

### 컨테이너 스타일링

```tsx
<Icon
  name="star"
  size={32}
  style="filled"
  containerStyle={{
    backgroundColor: "#FFF8DC",
    borderRadius: 16,
    padding: 12,
    margin: 8,
  }}
  iconStyle={{
    tintColor: "#FFD700",
  }}
/>
```

## 지원하는 아이콘

현재 예시에서 지원하는 아이콘들:

- add, home, settings, heart, star
- search, user, mail, phone, camera
- folder, file, edit, delete, share
- download, upload, refresh

## 컴포넌트 Props

### IconProps

| Prop                 | Type                               | Default      | Description        |
| -------------------- | ---------------------------------- | ------------ | ------------------ |
| `name`               | `string`                           | **required** | 아이콘 이름        |
| `size`               | `16 \| 20 \| 24 \| 28 \| 32 \| 48` | `24`         | 아이콘 크기        |
| `style`              | `'regular' \| 'filled'`            | `'regular'`  | 아이콘 스타일      |
| `color`              | `string`                           | -            | 아이콘 색상        |
| `backgroundColor`    | `string`                           | -            | 배경 색상          |
| `borderRadius`       | `number`                           | -            | 테두리 반지름      |
| `padding`            | `number`                           | -            | 패딩               |
| `margin`             | `number`                           | -            | 마진               |
| `onPress`            | `() => void`                       | -            | 터치 이벤트 핸들러 |
| `containerStyle`     | `ViewStyle`                        | -            | 컨테이너 스타일    |
| `iconStyle`          | `TextStyle`                        | -            | 아이콘 스타일      |
| `accessibilityLabel` | `string`                           | -            | 접근성 라벨        |
| `accessibilityHint`  | `string`                           | -            | 접근성 힌트        |
| `accessible`         | `boolean`                          | `true`       | 접근성 활성화      |
| `testID`             | `string`                           | -            | 테스트 ID          |

## 문제 해결

### 아이콘이 보이지 않는 경우

1. 폰트 파일이 올바르게 링크되었는지 확인
2. 폰트 파일 경로 확인
3. 앱 재빌드 및 재시작
4. Metro 캐시 클리어: `npx react-native start --reset-cache`

### 성능 최적화

- 폰트 파일 최적화 (TTF → WOFF2)
- 아이콘 캐싱 활용
- 불필요한 리렌더링 방지

### 디버깅

```tsx
// 폰트 로딩 확인
import { Platform } from "react-native";

console.log(
  "Available fonts:",
  Platform.select({
    ios: require("react-native").NativeModules.RNFontManager.getFontFamilyNames(),
    android:
      require("react-native").NativeModules.RNFontManager.getFontFamilyNames(),
  })
);
```

## 예시 앱 실행

예시 앱을 실행하려면:

```bash
# React Native 프로젝트에서
npx react-native run-ios
# 또는
npx react-native run-android
```

예시 앱은 다음 기능들을 포함합니다:

- 아이콘 갤러리
- 크기 및 스타일 선택
- 실시간 미리보기
- 스타일링 예시
- 터치 이벤트 테스트
