# RefineUI System Icons - Android

Native Android integration for RefineUI System Icons with XML drawables and vector graphics.

[![Maven Central](https://img.shields.io/maven-central/v/com.pelagornis/refineui-system-icons.svg?label=Maven%20Central)](https://central.sonatype.com/artifact/com.pelagornis/refineui-system-icons)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![API](https://img.shields.io/badge/API-24%2B-brightgreen.svg?style=flat)](https://android-arsenal.com/api?level=24)

**5,000+ High-Quality System Icons** | Regular & Filled Styles | Vector Drawables | Material Design Compatible

## 📦 Installation

### Maven Central (Recommended)

Add the dependency to your project's `build.gradle` or `build.gradle.kts`:

#### Gradle (Groovy)

```gradle
dependencies {
    implementation 'com.pelagornis:refineui-system-icons:0.3.14'
}
```

#### Gradle Kotlin DSL

```kotlin
dependencies {
    implementation("com.pelagornis:refineui-system-icons:0.3.14")
}
```

> 💡 **Tip**: For the latest version, check [Maven Central](https://central.sonatype.com/artifact/com.pelagornis/refineui-system-icons) or use `+` for automatic updates.

### Version Catalog (Recommended)

If you're using `gradle/libs.versions.toml`:

```toml
[versions]
refineui-icons = "0.3.14"

[libraries]
refineui-system-icons = { group = "com.pelagornis", name = "refineui-system-icons", version.ref = "refineui-icons" }
```

```kotlin
dependencies {
    implementation(libs.refineui.system.icons)
}
```

### Requirements

- **minSdkVersion**: 24 (Android 7.0 Nougat)
- **compileSdkVersion**: 34+
- **Kotlin**: 1.8.0+

### Manual Integration

To build locally:

1. Clone this repository
2. Copy the `android/library` folder to your project
3. Add to your `settings.gradle`:

```gradle
include ':refineui-system-icons'
project(':refineui-system-icons').projectDir = new File('path/to/android/library')
```

4. Add to your app's `build.gradle`:

```gradle
dependencies {
    implementation project(':refineui-system-icons')
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
git clone https://github.com/pelagornis/refineui-system-icons.git
cd refineui-system-icons

# Install Python dependencies
pip install -r requirements.txt

# Generate Android XML resources
python3 scripts/generate_android_xml.py

# Build the Android library
cd android
./gradlew :library:assembleRelease
```

### Publishing to Maven Central

This library is automatically published to Maven Central via GitHub Actions.

To publish manually:

```bash
cd android
./gradlew :library:publishAllPublicationsToMavenCentralRepository
```

For more details, see [PUBLISHING.md](PUBLISHING.md).

### Adding New Icons

1. Add SVG files to the `assets/` directory
2. Generate metadata: `python3 scripts/generate_metadata.py`
3. Generate Android XML: `python3 scripts/generate_android_xml.py`
4. Test changes in your Android app

## 🐛 Troubleshooting

### Common Issues

#### 1. Icon not displaying

**Problem**: Icon is not showing on screen.

**Solution**:

- Verify the icon name is correct (`@drawable/icon_name_24_regular`)
- Make sure you've run Gradle sync
- Try Clean & Rebuild your project
- Check Android Studio's Logcat for errors

```bash
# Clean & Rebuild
./gradlew clean
./gradlew assembleDebug
```

#### 2. Dependency Resolution Failed

**Problem**: `Could not find com.pelagornis:refineui-system-icons:X.X.X`

**Solution**:

- Verify Maven Central repository is added:
  ```gradle
  repositories {
      mavenCentral()
  }
  ```
- Check if the version exists on [Maven Central](https://central.sonatype.com/artifact/com.pelagornis/refineui-system-icons)
- Check network connection and proxy settings

#### 3. Build issues

**Problem**: Build fails with errors

**Solution**:

- Ensure minSdkVersion is 24 or higher
- Update Gradle version: `./gradlew wrapper --gradle-version=8.0`
- Ensure Kotlin version is 1.8.0 or higher
- Clear Gradle cache: `./gradlew clean --refresh-dependencies`

#### 4. Vector drawable issues

**Problem**: Vector drawable rendering issues

**Solution**:

- Set minSdk to 21 or higher
- Enable Vector Drawable support:
  ```gradle
  android {
      defaultConfig {
          vectorDrawables.useSupportLibrary = true
      }
  }
  ```
- Verify AppCompat library is being used

#### 5. Resource name conflicts

**Problem**: Resource name conflicts with other libraries

**Solution**:

- This library uses unique naming patterns for all drawables (`{name}_{size}_{style}`)
- If conflicts occur, please report them on GitHub Issues

### Performance Tips

- **Proguard/R8**: Unused resources are automatically removed in release builds
- **Vector Drawables**: Automatically optimized for all screen densities
- **APK Size**: Includes ~6MB of vector drawables (compressed to ~1-2MB)

### Getting Help

If your issue persists:

- 🐛 **Issues**: [GitHub Issues](https://github.com/pelagornis/refineui-system-icons/issues)
- 📖 **Documentation**: [Publishing Guide](PUBLISHING.md)
- 💡 **Examples**: [Example App](../app)

When submitting an issue, please include:

- Android version
- Gradle version
- Library version
- Error logs (full stack trace)
- Minimal reproducible example

## 🔗 Related Links

- 📦 **Maven Central**: [com.pelagornis:refineui-system-icons](https://central.sonatype.com/artifact/com.pelagornis/refineui-system-icons)
- 🔄 **Release Notes**: [GitHub Releases](https://github.com/pelagornis/refineui-system-icons/releases)
- 🌐 **Other Platforms**:
  - [iOS/Swift Package](../ios)
  - [React](../packages/react-icons)
  - [React Native](../packages/react-native-icons)
  - [Flutter](../flutter)
  - [Web](../packages/web-icons)

## 📄 License

MIT License - see [LICENSE](../LICENSE) file for details.

## 🙏 Contributing

Contributions are welcome! Bug reports, feature requests, and pull requests are all appreciated.

For more details, see [PUBLISHING.md](PUBLISHING.md).
