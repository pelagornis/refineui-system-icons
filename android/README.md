# RefineUI System Icons - Android Library

RefineUI System Icons를 Android 앱에서 사용할 수 있는 라이브러리입니다.

## 설치

### 1. 프로젝트에 라이브러리 추가

```gradle
// settings.gradle
include ':refineui-icons'
project(':refineui-icons').projectDir = new File('path/to/refineui-system-icons/android/library')
```

```gradle
// app/build.gradle
dependencies {
    implementation project(':refineui-icons')
}
```

### 2. 사용법

#### XML에서 사용

```xml
<!-- ImageView로 사용 -->
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_access_time_24_regular" />

<!-- Button의 drawable로 사용 -->
<Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:drawableStart="@drawable/ic_refineui_access_time_24_regular"
    android:text="Access Time" />
```

#### Kotlin/Java에서 사용

```kotlin
// Kotlin
val iconDrawable = ContextCompat.getDrawable(context, R.drawable.ic_refineui_access_time_24_regular)
imageView.setImageDrawable(iconDrawable)
```

```java
// Java
Drawable iconDrawable = ContextCompat.getDrawable(context, R.drawable.ic_refineui_access_time_24_regular);
imageView.setImageDrawable(iconDrawable);
```

## 아이콘 명명 규칙

아이콘 파일명은 다음 형식을 따릅니다:

```
ic_refineui_{icon_name}_{size}_{style}.xml
```

### 예시:

- `ic_refineui_access_time_16_regular.xml` - 16dp 크기의 Regular 스타일
- `ic_refineui_access_time_24_filled.xml` - 24dp 크기의 Filled 스타일
- `ic_refineui_math_symbols_32_regular.xml` - 32dp 크기의 Regular 스타일

## 지원하는 크기

- **16dp** - 작은 아이콘 (mdpi)
- **20dp** - 중간 아이콘 (hdpi)
- **24dp** - 기본 아이콘 (xhdpi)
- **28dp** - 큰 아이콘 (xxhdpi)
- **32dp** - 매우 큰 아이콘 (xxxhdpi)
- **48dp** - 최대 아이콘 (xxxhdpi)

## 지원하는 스타일

- **regular** - 기본 스타일
- **filled** - 채워진 스타일

## 색상 변경

Vector Drawable이므로 색상을 쉽게 변경할 수 있습니다:

```xml
<!-- XML에서 색상 변경 -->
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_access_time_24_regular"
    android:tint="@color/primary_color" />
```

```kotlin
// Kotlin에서 색상 변경
val drawable = ContextCompat.getDrawable(context, R.drawable.ic_refineui_access_time_24_regular)
drawable?.setTint(ContextCompat.getColor(context, R.color.primary_color))
imageView.setImageDrawable(drawable)
```

## 라이브러리 구조

```
android/library/src/main/res/
├── drawable-mdpi/     # 16dp 아이콘들
├── drawable-hdpi/     # 20dp 아이콘들
├── drawable-xhdpi/    # 24dp 아이콘들
├── drawable-xxhdpi/   # 28dp, 32dp 아이콘들
├── drawable-xxxhdpi/  # 48dp 아이콘들
└── values/
    └── strings.xml    # 아이콘 이름 문자열 리소스
```

## 라이선스

MIT License - 자세한 내용은 [LICENSE](../../LICENSE) 파일을 참조하세요.
