# RefineUI System Icons - Android

RefineUI System Icons의 안드로이드 라이브러리입니다. 5,196개 이상의 벡터 아이콘을 제공합니다.

## 특징

- **5,196+ 아이콘**: 다양한 카테고리의 아이콘 제공
- **6가지 크기**: 16px, 20px, 24px, 28px, 32px, 48px
- **2가지 스타일**: Regular, Filled
- **Vector Drawable**: 어떤 크기에서도 선명하게 표시
- **안드로이드 네이티브**: 안드로이드 앱에 최적화

## 설치

### Gradle

```gradle
dependencies {
    implementation 'com.pelagornis:refineui-system-icons:1.0.0'
}
```

## 사용법

### 1. 기본 사용법

```kotlin
// XML에서 직접 사용
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_add_24_filled" />

// Kotlin에서 사용
imageView.setImageResource(R.drawable.ic_refineui_home_24_regular)
```

### 2. 동적 리소스 접근

```kotlin
// 리소스 이름으로 동적 접근
val resourceId = resources.getIdentifier("ic_refineui_settings_24_filled", "drawable", packageName)
if (resourceId != 0) {
    imageView.setImageResource(resourceId)
}
```

### 3. IconSelector 사용

```kotlin
class MainActivity : AppCompatActivity() {
    private lateinit var iconSelector: RefineUIIconSelector

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // IconSelector 초기화
        iconSelector = RefineUIIconSelector.create(this)

        // 모든 아이콘 가져오기
        val allIcons = iconSelector.getAllIcons()

        // 스타일별 필터링
        val filledIcons = iconSelector.getIconsByStyle("filled")
        val regularIcons = iconSelector.getIconsByStyle("regular")

        // 크기별 필터링
        val size24Icons = iconSelector.getIconsBySize(24)

        // 검색
        val searchResults = iconSelector.searchIcons("add")

        // 아이콘 Drawable 가져오기
        val drawable = iconSelector.getIconDrawable("ic_refineui_add_24_filled")
        imageView.setImageDrawable(drawable)
    }
}
```

## 아이콘 명명 규칙

아이콘 리소스 이름은 다음 형식을 따릅니다:

```
ic_refineui_{iconName}_{size}_{style}
```

예시:

- `ic_refineui_add_24_filled` - 24px 크기의 filled 스타일 add 아이콘
- `ic_refineui_home_20_regular` - 20px 크기의 regular 스타일 home 아이콘
- `ic_refineui_settings_32_filled` - 32px 크기의 filled 스타일 settings 아이콘

## 아이콘 정보

### IconInfo 클래스

```kotlin
data class IconInfo(
    val name: String,           // 아이콘 이름 (예: "add", "home")
    val displayName: String,    // 표시 이름 (예: "Add", "Home")
    val resourceName: String,   // 리소스 이름 (예: "ic_refineui_add_24_filled")
    val resourceId: Int,        // 리소스 ID
    val size: Int,              // 아이콘 크기 (16, 20, 24, 28, 32, 48)
    val style: String           // 아이콘 스타일 ("regular" 또는 "filled")
)
```

## 예제 앱

이 라이브러리에는 완전한 예제 앱이 포함되어 있습니다:

1. **메인 화면**: 기본 아이콘 사용 예제
2. **아이콘 목록**: 모든 아이콘을 검색하고 필터링할 수 있는 화면
3. **실시간 검색**: 이름으로 아이콘 검색
4. **스타일/크기 필터링**: Regular/Filled 스타일과 다양한 크기로 필터링

예제 앱을 실행하려면:

```bash
cd android
./gradlew installDebug
```

## 색상 커스터마이징

아이콘의 색상을 변경하려면 `android:tint` 속성을 사용하세요:

```xml
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_add_24_filled"
    android:tint="@color/your_color" />
```

또는 코드에서:

```kotlin
imageView.setColorFilter(ContextCompat.getColor(context, R.color.your_color))
```

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다.

## 기여하기

버그 리포트나 기능 요청은 GitHub Issues를 통해 제출해 주세요.
