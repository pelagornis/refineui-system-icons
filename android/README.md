# RefineUI System Icons - Android

Android library for RefineUI System Icons. Provides over 5,196 vector icons.

## Features

- **5,196+ Icons**: Icons from various categories
- **6 Sizes**: 16px, 20px, 24px, 28px, 32px, 48px
- **2 Styles**: Regular, Filled
- **Vector Drawable**: Sharp display at any size
- **Android Native**: Optimized for Android apps

## Installation

### Gradle

```gradle
dependencies {
    implementation 'com.pelagornis:refineui-system-icons:1.0.0'
}
```

## Usage

### 1. Basic Usage

```kotlin
// Use directly in XML
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_add_24_filled" />

// Use in Kotlin
imageView.setImageResource(R.drawable.ic_refineui_home_24_regular)
```

### 2. Dynamic Resource Access

```kotlin
// Dynamic access by resource name
val resourceId = resources.getIdentifier("ic_refineui_settings_24_filled", "drawable", packageName)
if (resourceId != 0) {
    imageView.setImageResource(resourceId)
}
```

### 3. Using IconSelector

```kotlin
class MainActivity : AppCompatActivity() {
    private lateinit var iconSelector: RefineUIIconSelector

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Initialize IconSelector
        iconSelector = RefineUIIconSelector.create(this)

        // Get all icons
        val allIcons = iconSelector.getAllIcons()

        // Filter by style
        val filledIcons = iconSelector.getIconsByStyle("filled")
        val regularIcons = iconSelector.getIconsByStyle("regular")

        // Filter by size
        val size24Icons = iconSelector.getIconsBySize(24)

        // Search
        val searchResults = iconSelector.searchIcons("add")

        // Get icon Drawable
        val drawable = iconSelector.getIconDrawable("ic_refineui_add_24_filled")
        imageView.setImageDrawable(drawable)
    }
}
```

## Icon Naming Convention

Icon resource names follow this format:

```
ic_refineui_{iconName}_{size}_{style}
```

Examples:

- `ic_refineui_add_24_filled` - 24px size filled style add icon
- `ic_refineui_home_20_regular` - 20px size regular style home icon
- `ic_refineui_settings_32_filled` - 32px size filled style settings icon

## Icon Information

### IconInfo Class

```kotlin
data class IconInfo(
    val name: String,           // Icon name (e.g., "add", "home")
    val displayName: String,    // Display name (e.g., "Add", "Home")
    val resourceName: String,   // Resource name (e.g., "ic_refineui_add_24_filled")
    val resourceId: Int,        // Resource ID
    val size: Int,              // Icon size (16, 20, 24, 28, 32, 48)
    val style: String           // Icon style ("regular" or "filled")
)
```

## Sample App

This library includes a complete sample app:

1. **Main Screen**: Basic icon usage examples
2. **Icon List**: Screen to search and filter all icons
3. **Real-time Search**: Search icons by name
4. **Style/Size Filtering**: Filter by Regular/Filled styles and various sizes

To run the sample app:

```bash
cd android
./gradlew installDebug
```

## Color Customization

To change icon colors, use the `android:tint` attribute:

```xml
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/ic_refineui_add_24_filled"
    android:tint="@color/your_color" />
```

Or in code:

```kotlin
imageView.setColorFilter(ContextCompat.getColor(context, R.color.your_color))
```

## License

This project is distributed under the MIT License.

## Contributing

Please submit bug reports or feature requests through GitHub Issues.
