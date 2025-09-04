# RefineUI System Icons - Usage Examples

This document shows various ways to use RefineUI System Icons in Android apps.

## 1. Basic Usage

### Using in XML directly

```xml
<!-- Basic icon -->
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_add_24_filled" />

<!-- Change color -->
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_home_24_regular"
    android:tint="@color/primary" />

<!-- Adjust size -->
<ImageView
    android:layout_width="48dp"
    android:layout_height="48dp"
    android:src="@drawable/ic_refineui_settings_32_filled"
    android:scaleType="centerInside" />
```

### Using in Kotlin

```kotlin
// Basic setup
imageView.setImageResource(R.drawable.ic_refineui_add_24_filled)

// Change color
imageView.setColorFilter(ContextCompat.getColor(context, R.color.primary))

// Change size
imageView.layoutParams = imageView.layoutParams.apply {
    width = 48.dpToPx()
    height = 48.dpToPx()
}
```

## 2. Dynamic Icon Loading

### Access by resource name

```kotlin
fun loadIcon(imageView: ImageView, iconName: String, size: Int, style: String) {
    val resourceName = "ic_refineui_${iconName}_${size}_${style}"
    val resourceId = resources.getIdentifier(resourceName, "drawable", packageName)

    if (resourceId != 0) {
        imageView.setImageResource(resourceId)
    } else {
        // Fallback to default icon
        imageView.setImageResource(R.drawable.ic_default)
    }
}

// Usage example
loadIcon(imageView, "add", 24, "filled")
loadIcon(imageView, "home", 20, "regular")
```

### Using IconSelector

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

## 3. Display Icon List in RecyclerView

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

        // Set icon
        val drawable = iconSelector.getIconDrawable(icon)
        holder.imageView.setImageDrawable(drawable)

        // Set text
        holder.nameText.text = icon.displayName
        holder.sizeText.text = "${icon.size}px ${icon.style}"

        // Click event
        holder.itemView.setOnClickListener {
            onIconSelected?.invoke(icon)
        }
    }

    var onIconSelected: ((IconInfo) -> Unit)? = null
}
```

## 4. Icon Picker Implementation

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
        // Style filter
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

        // Size filter
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

## 5. Adding Icons to Buttons

```kotlin
// Add icon to MaterialButton
val button = findViewById<MaterialButton>(R.id.addButton)
button.icon = ContextCompat.getDrawable(this, R.drawable.ic_refineui_add_24_filled)

// Or set from code
button.setIconResource(R.drawable.ic_refineui_add_24_filled)

// Change icon color
button.iconTint = ColorStateList.valueOf(ContextCompat.getColor(this, R.color.white))
```

## 6. Adding Icons to Menu Items

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

## 7. Adding Icons to Tab Layout

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

## 8. Applying Color Themes

```kotlin
// Auto-adjust icon colors in dark theme
imageView.imageTintList = ColorStateList.valueOf(
    ContextCompat.getColor(context, R.color.onSurface)
)

// Or use theme colors
imageView.imageTintList = ColorStateList.valueOf(
    ContextCompat.getColor(context, R.attr.colorOnSurface)
)
```

## 9. Using with Animations

```kotlin
// Icon rotation animation
val rotateAnimation = ObjectAnimator.ofFloat(imageView, View.ROTATION, 0f, 360f)
rotateAnimation.duration = 1000
rotateAnimation.repeatCount = ObjectAnimator.INFINITE
rotateAnimation.start()

// Icon fade in animation
imageView.alpha = 0f
imageView.animate()
    .alpha(1f)
    .setDuration(500)
    .start()
```

## 10. Accessibility Support

```kotlin
// Add accessibility description to icon
imageView.contentDescription = "Add new item"
imageView.isImportantForAccessibility = View.IMPORTANT_FOR_ACCESSIBILITY_YES

// Or in XML
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_add_24_filled"
    android:contentDescription="Add new item"
    android:importantForAccessibility="yes" />
```

Refer to these examples to effectively utilize RefineUI System Icons!
