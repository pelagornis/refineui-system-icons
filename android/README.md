# RefineUI System Icons - Android

Native Android integration for RefineUI System Icons with XML drawables and vector graphics.

## 📦 Installation

### Gradle

Add to your `build.gradle` (Module: app):

```gradle
dependencies {
    implementation 'com.pelagornis:refineui-system-icons:vTag'
}
```

### Manual Integration

1. Copy the `android/library` folder to your project
2. Add to your `settings.gradle`:

```gradle
include ':library'
project(':library').projectDir = new File('path/to/android/library')
```

3. Add to your app's `build.gradle`:

```gradle
dependencies {
    implementation project(':library')
}
```

## 🚀 Quick Start

### XML Usage

```xml
<!-- In your layout XML -->
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/home_24_regular"
    android:contentDescription="Home icon"
    android:tint="@color/primary_color" />
```

### Programmatic Usage

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Set icon programmatically
        val iconView = findViewById<ImageView>(R.id.icon_view)
        iconView.setImageResource(R.drawable.home_24_regular)

        // With custom tint
        iconView.setColorFilter(ContextCompat.getColor(this, R.color.primary_color))
    }
}
```

### Java Usage

```java
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Set icon programmatically
        ImageView iconView = findViewById(R.id.icon_view);
        iconView.setImageResource(R.drawable.home_24_regular);

        // With custom tint
        iconView.setColorFilter(ContextCompat.getColor(this, R.color.primary_color));
    }
}
```

## 🎨 Available Icons

### Icon Categories

- **Navigation**: `home_24_regular`, `search_24_regular`, `menu_24_regular`, `arrow_left_24_regular`, `arrow_right_24_regular`
- **Actions**: `add_24_regular`, `edit_24_regular`, `delete_24_regular`, `save_24_regular`, `cancel_24_regular`, `refresh_24_regular`
- **Communication**: `mail_24_regular`, `phone_24_regular`, `chat_24_regular`, `notification_24_regular`, `bell_24_regular`
- **Media**: `play_24_regular`, `pause_24_regular`, `stop_24_regular`, `volume_24_regular`, `mute_24_regular`, `camera_24_regular`
- **System**: `settings_24_regular`, `gear_24_regular`, `person_24_regular`, `lock_24_regular`, `key_24_regular`, `shield_24_regular`
- **Files**: `folder_24_regular`, `document_24_regular`, `image_24_regular`, `download_24_regular`
- **And many more...** (434+ icons total)

### Icon Naming Convention

Icons follow the pattern: `{name}_{size}_{style}`

- **Size**: `16`, `20`, `24`, `28`, `32`, `48`
- **Style**: `filled` or `regular`

Examples:

- `add_24_regular` - 24px regular style add icon
- `home_16_filled` - 16px filled style home icon
- `settings_32_filled` - 32px filled style settings icon

### Available Sizes

All icons are available in the following sizes:

- **16dp**: `@drawable/{name}_16_{style}` (e.g., `@drawable/add_16_regular`)
- **20dp**: `@drawable/{name}_20_{style}` (e.g., `@drawable/add_20_regular`)
- **24dp**: `@drawable/{name}_24_{style}` (e.g., `@drawable/add_24_regular`) - Most common
- **28dp**: `@drawable/{name}_28_{style}` (e.g., `@drawable/add_28_regular`)
- **32dp**: `@drawable/{name}_32_{style}` (e.g., `@drawable/add_32_regular`)
- **48dp**: `@drawable/{name}_48_{style}` (e.g., `@drawable/add_48_regular`)

## 🔧 Advanced Usage

### Custom Icon Component

```kotlin
class CustomIconView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : ImageView(context, attrs, defStyleAttr) {

    private var iconName: String? = null
    private var iconSize: Int = 24
    private var iconStyle: String = "regular"

    fun setIcon(name: String, size: Int = 24, style: String = "regular") {
        iconName = name
        iconSize = size
        iconStyle = style
        updateIcon()
    }

    private fun updateIcon() {
        iconName?.let { name ->
            val resourceId = getIconResource(name, iconSize, iconStyle)
            setImageResource(resourceId)
        }
    }

    private fun getIconResource(name: String, size: Int, style: String): Int {
        val resourceName = "${name}_${size}_${style}"
        return context.resources.getIdentifier(resourceName, "drawable", context.packageName)
    }
}
```

### Icon with Animation

```kotlin
class AnimatedIconView : ImageView {
    private var isPressed = false

    init {
        setImageResource(R.drawable.heart_24_regular)
        setOnClickListener {
            animateIcon()
        }
    }

    private fun animateIcon() {
        isPressed = !isPressed

        animate()
            .scaleX(if (isPressed) 1.2f else 1.0f)
            .scaleY(if (isPressed) 1.2f else 1.0f)
            .setDuration(100)
            .start()

        setColorFilter(if (isPressed) Color.RED else Color.GRAY)
    }
}
```

### Dynamic Icon Selection

```kotlin
enum class IconType(val iconName: String, val color: Int) {
    HOME("home", Color.BLUE),
    SEARCH("search", Color.GREEN),
    SETTINGS("settings", Color.ORANGE),
    USER("person", Color.PURPLE)
}

class DynamicIconView : ImageView {
    fun setIconType(type: IconType) {
        val resourceId = getIconResource(type.iconName)
        setImageResource(resourceId)
        setColorFilter(type.color)
    }

    private fun getIconResource(name: String): Int {
        val resourceName = "${name}_24_regular"
        return context.resources.getIdentifier(resourceName, "drawable", context.packageName)
    }
}
```

## 🎯 Best Practices

### 1. **Performance Optimization**

- Use vector drawables for better performance
- Cache icon views when possible
- Use appropriate icon sizes for different screen densities

```kotlin
class OptimizedIconView : ImageView {
    private var cachedIcon: String? = null

    fun setIcon(name: String) {
        if (cachedIcon != name) {
            cachedIcon = name
            updateIcon(name)
        }
    }

    private fun updateIcon(name: String) {
        val resourceId = getIconResource(name)
        setImageResource(resourceId)
    }
}
```

### 2. **Accessibility**

```xml
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/refineui_icon_search"
    android:contentDescription="Search"
    android:focusable="true"
    android:clickable="true"
    android:background="?attr/selectableItemBackgroundBorderless" />
```

### 3. **Theme Integration**

```xml
<!-- In your theme -->
<style name="AppTheme" parent="Theme.Material3.DayNight">
    <item name="colorPrimary">@color/primary_color</item>
    <item name="colorOnPrimary">@color/on_primary_color</item>
</style>

<!-- In your layout -->
<ImageView
    android:layout_width="24dp"
    android:layout_height="24dp"
    android:src="@drawable/settings_24_regular"
    android:tint="?attr/colorPrimary" />
```

### 4. **Responsive Design**

```kotlin
class ResponsiveIconView : ImageView {
    override fun onSizeChanged(w: Int, h: Int, oldw: Int, oldh: Int) {
        super.onSizeChanged(w, h, oldw, oldh)

        val size = minOf(w, h)
        val iconSize = when {
            size <= 16 -> 16
            size <= 20 -> 20
            size <= 24 -> 24
            size <= 32 -> 32
            else -> 48
        }

        updateIconSize(iconSize)
    }

    private fun updateIconSize(size: Int) {
        // Update icon based on size
    }
}
```

## 📱 Platform-Specific Features

### Material Design Integration

```xml
<com.google.android.material.button.MaterialButton
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Download"
    app:icon="@drawable/download_24_regular"
    app:iconGravity="textStart"
    app:iconPadding="8dp" />
```

### Android 12+ Features

```kotlin
class ModernIconView : ImageView {
    init {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            // Use dynamic colors for Android 12+
            setImageResource(R.drawable.settings_24_regular)
            setColorFilter(getContext().getColor(android.R.color.system_accent1_600))
        } else {
            setImageResource(R.drawable.settings_24_regular)
            setColorFilter(ContextCompat.getColor(context, R.color.primary_color))
        }
    }
}
```

## 🎨 Styling Examples

### Navigation Bar Icons

```xml
<LinearLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="horizontal"
    android:gravity="center"
    android:padding="16dp"
    android:background="@color/background_color">

    <ImageView
        android:layout_width="24dp"
        android:layout_height="24dp"
        android:src="@drawable/menu_24_regular"
        android:padding="8dp"
        android:background="?attr/selectableItemBackgroundBorderless"
        android:clickable="true" />

    <View
        android:layout_width="0dp"
        android:layout_height="1dp"
        android:layout_weight="1" />

    <ImageView
        android:layout_width="20dp"
        android:layout_height="20dp"
        android:src="@drawable/search_20_regular"
        android:padding="8dp"
        android:background="?attr/selectableItemBackgroundBorderless"
        android:clickable="true" />

    <ImageView
        android:layout_width="20dp"
        android:layout_height="20dp"
        android:src="@drawable/notification_20_regular"
        android:padding="8dp"
        android:background="?attr/selectableItemBackgroundBorderless"
        android:clickable="true" />

    <ImageView
        android:layout_width="20dp"
        android:layout_height="20dp"
        android:src="@drawable/person_20_regular"
        android:padding="8dp"
        android:background="?attr/selectableItemBackgroundBorderless"
        android:clickable="true" />
</LinearLayout>
```

### Button with Icon

```xml
<com.google.android.material.button.MaterialButton
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Download"
    app:icon="@drawable/download_24_regular"
    app:iconGravity="textStart"
    app:iconPadding="8dp"
    app:iconSize="16dp" />
```

### Icon Grid

```xml
<androidx.recyclerview.widget.RecyclerView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:padding="16dp"
    app:layoutManager="androidx.recyclerview.widget.GridLayoutManager"
    app:spanCount="3" />
```

```kotlin
class IconAdapter : RecyclerView.Adapter<IconAdapter.IconViewHolder>() {
    private val icons = listOf(
        "home" to "Home",
        "search" to "Search",
        "settings" to "Settings",
        "user" to "User",
        "mail" to "Mail",
        "phone" to "Phone"
    )

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): IconViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_icon, parent, false)
        return IconViewHolder(view)
    }

    override fun onBindViewHolder(holder: IconViewHolder, position: Int) {
        val (iconName, iconLabel) = icons[position]
        holder.bind(iconName, iconLabel)
    }

    override fun getItemCount() = icons.size

    class IconViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private val iconView: ImageView = itemView.findViewById(R.id.icon_view)
        private val labelView: TextView = itemView.findViewById(R.id.label_view)

        fun bind(iconName: String, label: String) {
            val resourceId = getIconResource(iconName)
            iconView.setImageResource(resourceId)
            labelView.text = label
        }

        private fun getIconResource(name: String): Int {
            val resourceName = "${name}_24_regular"
            return itemView.context.resources.getIdentifier(resourceName, "drawable", itemView.context.packageName)
        }
    }
}
```

## 🔍 Icon Search and Discovery

### Finding Icons by Category

```kotlin
object IconCategories {
    val navigation = listOf("home", "search", "menu", "arrow_left", "arrow_right")
    val actions = listOf("add", "edit", "delete", "save", "cancel")
    val communication = listOf("mail", "phone", "chat", "notification")
    val media = listOf("play", "pause", "stop", "volume", "camera")
    val system = listOf("settings", "gear", "person", "lock", "unlock")
    val files = listOf("folder", "document", "image", "download")
}
```

### Icon Search Function

```kotlin
fun searchIcons(query: String): List<String> {
    val allIcons = IconCategories.navigation +
                   IconCategories.actions +
                   IconCategories.communication +
                   IconCategories.media +
                   IconCategories.system +
                   IconCategories.files

    return allIcons.filter { icon ->
        icon.contains(query, ignoreCase = true)
    }
}

// Usage
val searchResults = searchIcons("home")
// Returns: ["home"]
```

## 🛠️ Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/refineui/system-icons.git
cd system-icons

# Install dependencies
npm install

# Build Android icons
npm run generate:android
npm run build:android
```

### Adding New Icons

1. Add SVG files to `src/icons/`
2. Run `npm run generate:metadata`
3. Run `npm run generate:android`
4. Test your changes in Android app

## 🐛 Troubleshooting

### Common Issues

1. **Icon not displaying**

   - Check if the icon name is correct
   - Verify the library is properly integrated
   - Check Android Studio logs

2. **Build issues**

   - Clean and rebuild project
   - Check Gradle sync
   - Verify dependencies

3. **Vector drawable issues**
   - Ensure minSdk is 21+ for vector drawables
   - Check for conflicting drawable names
   - Verify XML syntax

### Getting Help

- 📧 Email: support@refineui.com
- 🐛 Issues: [GitHub Issues](https://github.com/refineui/system-icons/issues)
- 📖 Documentation: [docs.refineui.com](https://docs.refineui.com)
- 💬 Community: [Discord](https://discord.gg/refineui)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
