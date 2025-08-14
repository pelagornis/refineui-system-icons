# RefineUI System Icons - Android Library

RefineUI System Icons를 Android 앱에서 사용할 수 있는 라이브러리입니다.

## 📦 설치

### Gradle

```gradle
dependencies {
    implementation 'com.pelagornis:refineui-system-icons:1.0.0'
}
```

### Maven

```xml
<dependency>
    <groupId>com.pelagornis</groupId>
    <artifactId>refineui-system-icons</artifactId>
    <version>1.0.0</version>
</dependency>
```

## 🚀 사용법

### 1. 기본 사용법

```kotlin
// ImageView에 아이콘 설정
val imageView = findViewById<ImageView>(R.id.iconView)
imageView.setImageResource(R.drawable.ic_refineui_access_time_24_regular)

// 또는 코드에서 설정
imageView.setImageDrawable(ContextCompat.getDrawable(this, R.drawable.ic_refineui_access_time_24_filled))
```

### 2. Icon Selector 사용법

```kotlin
// Icon Selector 초기화
val iconSelector = RefineUIIconSelector.create(this)

// 모든 아이콘 가져오기
val allIcons = iconSelector.getAllIcons()

// 스타일별 아이콘 가져오기
val regularIcons = iconSelector.getIconsByStyle("regular")
val filledIcons = iconSelector.getIconsByStyle("filled")

// 크기별 아이콘 가져오기
val size24Icons = iconSelector.getIconsBySize(24)

// 아이콘 검색
val searchResults = iconSelector.searchIcons("access")

// 아이콘 정보 가져오기
val iconInfo = iconSelector.getIconInfo("ic_refineui_access_time_24_regular")
iconInfo?.let {
    println("Name: ${it.name}")
    println("Size: ${it.size}")
    println("Style: ${it.style}")
    println("Category: ${it.category}")
}
```

### 3. RecyclerView에서 아이콘 목록 표시

```kotlin
class IconAdapter(private val icons: List<String>, private val iconSelector: RefineUIIconSelector) :
    RecyclerView.Adapter<IconAdapter.ViewHolder>() {

    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val imageView: ImageView = view.findViewById(R.id.iconImageView)
        val textView: TextView = view.findViewById(R.id.iconNameText)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val iconName = icons[position]

        // 아이콘 설정
        val drawable = iconSelector.getIconDrawable(iconName)
        holder.imageView.setImageDrawable(drawable)

        // 아이콘 이름 설정
        holder.textView.text = iconName
    }

    override fun getItemCount() = icons.size
}
```

## 📋 사용 가능한 아이콘

### 네이밍 규칙

```
ic_refineui_{iconName}_{size}_{style}
```

- `iconName`: 아이콘 이름 (snake_case)
- `size`: 크기 (16, 20, 24, 28, 32, 48)
- `style`: 스타일 (regular, filled)

### 예시

```xml
<!-- 24px Regular 스타일 -->
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_access_time_24_regular" />

<!-- 32px Filled 스타일 -->
<ImageView
    android:layout_width="32dp"
    android:layout_height="32dp"
    android:src="@drawable/ic_refineui_access_time_32_filled" />
```

## 🎨 스타일

### Regular (아웃라인)

- 선 스타일의 아이콘
- 깔끔하고 미니멀한 디자인
- 기본 UI 요소에 적합

### Filled (채워진)

- 채워진 스타일의 아이콘
- 강조나 액션 버튼에 적합
- 더 강한 시각적 임팩트

## 📏 크기

- **16px**: 작은 UI 요소, 툴팁
- **20px**: 기본 UI 요소
- **24px**: 표준 아이콘 크기 (권장)
- **28px**: 중간 크기 UI 요소
- **32px**: 큰 UI 요소, 버튼
- **48px**: 매우 큰 UI 요소, 카드

## 🔍 Icon Selector API

### RefineUIIconSelector 클래스

```kotlin
class RefineUIIconSelector(context: Context) {
    // 모든 아이콘 가져오기
    fun getAllIcons(): List<String>

    // 스타일별 아이콘 가져오기
    fun getIconsByStyle(style: String): List<String>

    // 크기별 아이콘 가져오기
    fun getIconsBySize(size: Int): List<String>

    // 아이콘 검색
    fun searchIcons(query: String): List<String>

    // 아이콘 Drawable 가져오기
    fun getIconDrawable(iconName: String): Drawable?

    // 아이콘 정보 가져오기
    fun getIconInfo(iconName: String): IconInfo?

    // 카테고리 가져오기
    fun getCategories(): List<String>

    // 총 아이콘 수 가져오기
    fun getTotalIconCount(): Int
}
```

### IconInfo 데이터 클래스

```kotlin
data class IconInfo(
    val name: String,      // 아이콘 이름
    val size: Int,         // 크기
    val style: String,     // 스타일 (regular/filled)
    val drawable: String,  // Drawable 리소스 이름
    val category: String   // 카테고리
)
```

## 📊 통계

- **총 아이콘 수**: 5,196개
- **스타일**: Regular (2,598개), Filled (2,598개)
- **크기**: 16px, 20px, 24px, 28px, 32px, 48px
- **카테고리**: 433개 아이콘 세트

## 🛠️ 빌드

### 로컬 빌드

```bash
# 아이콘 추출
python scripts/figma_icon_extractor.py --token YOUR_TOKEN --file-key YOUR_FILE_KEY

# Android 빌드
python scripts/build_android.py

# 또는 모든 플랫폼 빌드
python scripts/build_all.py
```

### 라이브러리 빌드

```bash
cd android
./gradlew assembleRelease
```

## 📝 라이선스

MIT License - 자세한 내용은 [LICENSE](../LICENSE) 파일을 참조하세요.

## 🤝 기여

버그 리포트나 기능 요청은 GitHub Issues를 이용해주세요.

## 📞 지원

- GitHub: [https://github.com/pelagornis/refineui-system-icons](https://github.com/pelagornis/refineui-system-icons)
- Issues: [https://github.com/pelagornis/refineui-system-icons/issues](https://github.com/pelagornis/refineui-system-icons/issues)
