# RefineUI System Icons - 사용 예제

이 문서는 RefineUI System Icons를 안드로이드 앱에서 사용하는 다양한 방법을 보여줍니다.

## 1. 기본 사용법

### XML에서 직접 사용

```xml
<!-- 기본 아이콘 -->
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_add_24_filled" />

<!-- 색상 변경 -->
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_home_24_regular"
    android:tint="@color/primary" />

<!-- 크기 조정 -->
<ImageView
    android:layout_width="48dp"
    android:layout_height="48dp"
    android:src="@drawable/ic_refineui_settings_32_filled"
    android:scaleType="centerInside" />
```

### Kotlin에서 사용

```kotlin
// 기본 설정
imageView.setImageResource(R.drawable.ic_refineui_add_24_filled)

// 색상 변경
imageView.setColorFilter(ContextCompat.getColor(context, R.color.primary))

// 크기 변경
imageView.layoutParams = imageView.layoutParams.apply {
    width = 48.dpToPx()
    height = 48.dpToPx()
}
```

## 2. 동적 아이콘 로딩

### 리소스 이름으로 접근

```kotlin
fun loadIcon(imageView: ImageView, iconName: String, size: Int, style: String) {
    val resourceName = "ic_refineui_${iconName}_${size}_${style}"
    val resourceId = resources.getIdentifier(resourceName, "drawable", packageName)

    if (resourceId != 0) {
        imageView.setImageResource(resourceId)
    } else {
        // 기본 아이콘으로 폴백
        imageView.setImageResource(R.drawable.ic_default)
    }
}

// 사용 예제
loadIcon(imageView, "add", 24, "filled")
loadIcon(imageView, "home", 20, "regular")
```

### IconSelector 사용

```kotlin
class IconManager(private val context: Context) {
    private val iconSelector = RefineUIIconSelector.create(context)

    fun loadIcon(imageView: ImageView, iconName: String, size: Int, style: String) {
        val resourceName = "ic_refineui_${iconName}_${size}_${style}"
        val drawable = iconSelector.getIconDrawable(resourceName)
        imageView.setImageDrawable(drawable)
    }

    fun searchIcons(query: String): List<IconInfo> {
        return iconSelector.searchIcons(query)
    }

    fun getIconsBySize(size: Int): List<IconInfo> {
        return iconSelector.getIconsBySize(size)
    }
}
```

## 3. RecyclerView에서 아이콘 목록 표시

```kotlin
class IconAdapter(private val icons: List<IconInfo>) :
    RecyclerView.Adapter<IconAdapter.IconViewHolder>() {

    class IconViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val imageView: ImageView = itemView.findViewById(R.id.iconImageView)
        val nameText: TextView = itemView.findViewById(R.id.iconNameText)
        val sizeText: TextView = itemView.findViewById(R.id.iconSizeText)
    }

    override fun onBindViewHolder(holder: IconViewHolder, position: Int) {
        val icon = icons[position]

        // 아이콘 설정
        val drawable = iconSelector.getIconDrawable(icon)
        holder.imageView.setImageDrawable(drawable)

        // 텍스트 설정
        holder.nameText.text = icon.displayName
        holder.sizeText.text = "${icon.size}px ${icon.style}"

        // 클릭 이벤트
        holder.itemView.setOnClickListener {
            onIconSelected?.invoke(icon)
        }
    }

    var onIconSelected: ((IconInfo) -> Unit)? = null
}
```

## 4. 아이콘 선택기 구현

```kotlin
class IconPickerDialog : DialogFragment() {
    private lateinit var iconSelector: RefineUIIconSelector
    private var onIconSelected: ((IconInfo) -> Unit)? = null

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.dialog_icon_picker, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        iconSelector = RefineUIIconSelector.create(requireContext())

        setupSearch()
        setupFilters()
        loadIcons()
    }

    private fun setupSearch() {
        searchEditText.addTextChangedListener(object : TextWatcher {
            override fun afterTextChanged(s: Editable?) {
                val query = s.toString()
                if (query.isNotEmpty()) {
                    val results = iconSelector.searchIcons(query)
                    updateIconList(results)
                } else {
                    loadIcons()
                }
            }
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {}
        })
    }

    private fun setupFilters() {
        // 스타일 필터
        styleSpinner.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
                when (position) {
                    0 -> loadIcons() // All
                    1 -> updateIconList(iconSelector.getIconsByStyle("regular"))
                    2 -> updateIconList(iconSelector.getIconsByStyle("filled"))
                }
            }
            override fun onNothingSelected(parent: AdapterView<*>?) {}
        }

        // 크기 필터
        sizeSpinner.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
                val sizes = listOf(0, 16, 20, 24, 28, 32, 48)
                val selectedSize = sizes[position]
                if (selectedSize > 0) {
                    updateIconList(iconSelector.getIconsBySize(selectedSize))
                } else {
                    loadIcons()
                }
            }
            override fun onNothingSelected(parent: AdapterView<*>?) {}
        }
    }

    private fun loadIcons() {
        val allIcons = iconSelector.getAllIcons()
        updateIconList(allIcons)
    }

    private fun updateIconList(icons: List<IconInfo>) {
        adapter.updateIcons(icons)
        statusText.text = "${icons.size} icons found"
    }

    fun setOnIconSelectedListener(listener: (IconInfo) -> Unit) {
        onIconSelected = listener
    }
}
```

## 5. 버튼에 아이콘 추가

```kotlin
// MaterialButton에 아이콘 추가
val button = findViewById<MaterialButton>(R.id.addButton)
button.icon = ContextCompat.getDrawable(this, R.drawable.ic_refineui_add_24_filled)

// 또는 코드에서 설정
button.setIconResource(R.drawable.ic_refineui_add_24_filled)

// 아이콘 색상 변경
button.iconTint = ColorStateList.valueOf(ContextCompat.getColor(this, R.color.white))
```

## 6. 메뉴 아이템에 아이콘 추가

```xml
<!-- menu_main.xml -->
<menu xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto">

    <item
        android:id="@+id/action_settings"
        android:icon="@drawable/ic_refineui_settings_24_filled"
        android:title="Settings"
        app:showAsAction="ifRoom" />

    <item
        android:id="@+id/action_search"
        android:icon="@drawable/ic_refineui_search_24_regular"
        android:title="Search"
        app:showAsAction="ifRoom" />
</menu>
```

## 7. 탭 레이아웃에 아이콘 추가

```xml
<com.google.android.material.tabs.TabLayout
    android:id="@+id/tabLayout"
    android:layout_width="match_parent"
    android:layout_height="wrap_content">

    <com.google.android.material.tabs.TabItem
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:icon="@drawable/ic_refineui_home_24_regular"
        android:text="Home" />

    <com.google.android.material.tabs.TabItem
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:icon="@drawable/ic_refineui_search_24_regular"
        android:text="Search" />

    <com.google.android.material.tabs.TabItem
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:icon="@drawable/ic_refineui_settings_24_filled"
        android:text="Settings" />
</com.google.android.material.tabs.TabLayout>
```

## 8. 색상 테마 적용

```kotlin
// 다크 테마에서 아이콘 색상 자동 조정
imageView.imageTintList = ColorStateList.valueOf(
    ContextCompat.getColor(context, R.color.onSurface)
)

// 또는 테마 색상 사용
imageView.imageTintList = ColorStateList.valueOf(
    ContextCompat.getColor(context, R.attr.colorOnSurface)
)
```

## 9. 애니메이션과 함께 사용

```kotlin
// 아이콘 회전 애니메이션
val rotateAnimation = ObjectAnimator.ofFloat(imageView, View.ROTATION, 0f, 360f)
rotateAnimation.duration = 1000
rotateAnimation.repeatCount = ObjectAnimator.INFINITE
rotateAnimation.start()

// 아이콘 페이드 인 애니메이션
imageView.alpha = 0f
imageView.animate()
    .alpha(1f)
    .setDuration(500)
    .start()
```

## 10. 접근성 지원

```kotlin
// 아이콘에 접근성 설명 추가
imageView.contentDescription = "Add new item"
imageView.isImportantForAccessibility = View.IMPORTANT_FOR_ACCESSIBILITY_YES

// 또는 XML에서
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_add_24_filled"
    android:contentDescription="Add new item"
    android:importantForAccessibility="yes" />
```

이러한 예제들을 참고하여 RefineUI System Icons를 효과적으로 활용하세요!
