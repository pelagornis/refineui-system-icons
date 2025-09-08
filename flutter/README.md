# RefineUI System Icons - Flutter

A comprehensive Flutter icon library providing RefineUI system icons with font-based rendering for optimal performance.

## 📦 Installation

Add to your `pubspec.yaml`:

```yaml
dependencies:
  refineui_system_icons: ^vTag
```

Then run:

```bash
flutter pub get
```

## 🎯 Features

- **434+ Icons**: Comprehensive collection of system icons
- **Two Styles**: Regular and Filled variants
- **Multiple Sizes**: 16px, 20px, 24px, 28px, 32px, 48px
- **Font-based**: Lightweight and scalable
- **Material Design Compatible**: Seamless integration with Flutter
- **Type-safe**: Full IDE support with autocomplete

## 🚀 Quick Start

### Basic Usage

```dart
import 'package:flutter/material.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'RefineUI Icons Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('RefineUI Icons')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Using Icon widget with RefineIcons
            Icon(RefineUIIcons.access_time_24_regular, size: 24),

            SizedBox(height: 20),

            // Using Icon widget with filled style
            Icon(RefineUIIcons.access_time_24_filled, size: 24, color: Colors.blue),

            SizedBox(height: 20),

            // Using Text widget with font family
            Text(
              String.fromCharCode(RefineUIIcons.access_time_24_regular.codePoint),
              style: TextStyle(
                fontFamily: RefineUIIcons.access_time_24_regular.fontFamily,
                fontSize: 24,
                color: Colors.red,
              ),
            ),

            SizedBox(height: 20),

            // Using in a button
            ElevatedButton.icon(
              onPressed: () => print('Button pressed!'),
              icon: Icon(RefineUIIcons.add_24_regular, size: 16),
              label: Text('Add Item'),
            ),
          ],
        ),
      ),
    );
  }
}
```

## 🎨 Available Icons

### Icon Categories

- **Access**: `access_time_16_regular`, `access_time_16_filled`, `access_time_20_regular`, etc.
- **Add**: `add_16_regular`, `add_16_filled`, `add_20_regular`, etc.
- **Alert**: `alert_badge_16_regular`, `alert_badge_16_filled`, `alert_badge_20_regular`, etc.
- **Arrow**: `arrow_down_16_regular`, `arrow_down_16_filled`, `arrow_left_16_regular`, etc.
- **Calendar**: `calendar_16_regular`, `calendar_16_filled`, `calendar_20_regular`, etc.
- **Checkmark**: `checkmark_16_regular`, `checkmark_16_filled`, `checkmark_20_regular`, etc.
- **Delete**: `delete_16_regular`, `delete_16_filled`, `delete_20_regular`, etc.
- **Edit**: `edit_16_regular`, `edit_16_filled`, `edit_20_regular`, etc.
- **Home**: `home_16_regular`, `home_16_filled`, `home_20_regular`, etc.
- **Search**: `search_16_regular`, `search_16_filled`, `search_20_regular`, etc.
- **Settings**: `settings_16_regular`, `settings_16_filled`, `settings_20_regular`, etc.
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

- **16px**: `{name}_16_{style}` (e.g., `add_16_regular`)
- **20px**: `{name}_20_{style}` (e.g., `add_20_regular`)
- **24px**: `{name}_24_{style}` (e.g., `add_24_regular`) - Most common
- **28px**: `{name}_28_{style}` (e.g., `add_28_regular`)
- **32px**: `{name}_32_{style}` (e.g., `add_32_regular`)
- **48px**: `{name}_48_{style}` (e.g., `add_48_regular`)

### Two Icon Styles

- **Regular**: `RefineUIIcons.add_24_regular`
- **Filled**: `RefineUIIcons.add_24_filled`

## 🔧 Advanced Usage

### Custom Icon Widget

```dart
import 'package:flutter/material.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';

class RefineUIIcon extends StatelessWidget {
  final IconData icon;
  final double size;
  final Color? color;
  final VoidCallback? onTap;

  const RefineUIIcon({
    Key? key,
    required this.icon,
    this.size = 24,
    this.color,
    this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Icon(
        icon,
        size: size,
        color: color ?? Theme.of(context).iconTheme.color,
      ),
    );
  }
}
```

### Icon with Animation

```dart
import 'package:flutter/material.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';

class AnimatedRefineUIIcon extends StatefulWidget {
  final IconData icon;
  final double size;
  final Color? color;

  const AnimatedRefineUIIcon({
    Key? key,
    required this.icon,
    this.size = 24,
    this.color,
  }) : super(key: key);

  @override
  _AnimatedRefineUIIconState createState() => _AnimatedRefineUIIconState();
}

class _AnimatedRefineUIIconState extends State<AnimatedRefineUIIcon>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _scaleAnimation;
  bool _isPressed = false;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(milliseconds: 100),
      vsync: this,
    );
    _scaleAnimation = Tween<double>(
      begin: 1.0,
      end: 1.2,
    ).animate(CurvedAnimation(
      parent: _controller,
      curve: Curves.easeInOut,
    ));
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        setState(() {
          _isPressed = !_isPressed;
        });

        if (_isPressed) {
          _controller.forward();
        } else {
          _controller.reverse();
        }
      },
      child: AnimatedBuilder(
        animation: _scaleAnimation,
        builder: (context, child) {
          return Transform.scale(
            scale: _scaleAnimation.value,
            child: Icon(
              widget.icon,
              size: widget.size,
              color: _isPressed ? Colors.red : widget.color,
            ),
          );
        },
      ),
    );
  }
}
```

## 🎯 Best Practices

### 1. **Performance Optimization**

- Use consistent icon sizes throughout your app
- Cache icon widgets when possible
- Use `const` constructors when possible

### 2. **Accessibility**

```dart
import 'package:flutter/material.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';

class AccessibleIcon extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Semantics(
      label: 'Search',
      hint: 'Double tap to search',
      button: true,
      child: GestureDetector(
        onTap: () => print('Search tapped!'),
        child: RefineUIIcon(
          RefineUIIcons.search_24_regular,
          size: 24,
        ),
      ),
    );
  }
}
```

### 3. **Theme Integration**

```dart
import 'package:flutter/material.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';

class ThemedRefineUIIcon extends StatelessWidget {
  final IconData icon;
  final double size;

  const ThemedRefineUIIcon({
    Key? key,
    required this.icon,
    this.size = 24,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Icon(
      icon,
      size: size,
      color: Theme.of(context).iconTheme.color,
    );
  }
}
```

## 🎨 Styling Examples

### Navigation Bar Icons

```dart
import 'package:flutter/material.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';

class RefineUINavigationBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      type: BottomNavigationBarType.fixed,
      items: [
        BottomNavigationBarItem(
          icon: Icon(RefineUIIcons.home_24_regular, size: 24),
          activeIcon: Icon(RefineUIIcons.home_24_filled, size: 24, color: Colors.blue),
          label: 'Home',
        ),
        BottomNavigationBarItem(
          icon: Icon(RefineUIIcons.search_24_regular, size: 24),
          activeIcon: Icon(RefineUIIcons.search_24_filled, size: 24, color: Colors.blue),
          label: 'Search',
        ),
        BottomNavigationBarItem(
          icon: Icon(RefineUIIcons.settings_24_regular, size: 24),
          activeIcon: Icon(RefineUIIcons.settings_24_filled, size: 24, color: Colors.blue),
          label: 'Settings',
        ),
        BottomNavigationBarItem(
          icon: Icon(RefineUIIcons.person_24_regular, size: 24),
          activeIcon: Icon(RefineUIIcons.person_24_filled, size: 24, color: Colors.blue),
          label: 'Profile',
        ),
      ],
    );
  }
}
```

### Button with Icon

```dart
import 'package:flutter/material.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';

class RefineUIButton extends StatelessWidget {
  final IconData icon;
  final String text;
  final VoidCallback? onPressed;

  const RefineUIButton({
    Key? key,
    required this.icon,
    required this.text,
    this.onPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton.icon(
      onPressed: onPressed,
      icon: Icon(icon, size: 16, color: Colors.white),
      label: Text(text),
    );
  }
}
```

## 🛠️ Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/pelagornis/refineui-system-icons.git
cd refineui-system-icons

# Install dependencies
npm install

# Build Flutter icons
python3 scripts/generate_flutter_dart.py
```

### Adding New Icons

1. Add SVG files to `assets/` directory
2. Run `python3 scripts/generate_flutter_dart.py`
3. Test your changes in Flutter app

## 🐛 Troubleshooting

### Common Issues

1. **Icon not displaying**

   - Check if the icon name is correct (e.g., `RefineUIIcons.access_time_24_regular`)
   - Verify the package is installed: `flutter pub get`
   - Check Flutter console for errors

2. **Performance issues**

   - Use `const` constructors when possible
   - Avoid unnecessary rebuilds
   - Consider using `RepaintBoundary` for complex icons

3. **Styling issues**
   - Check for conflicting styles
   - Verify theme integration
   - Use appropriate icon sizes

### Getting Help

- 📧 Email: support@pelagornis.com
- 🐛 Issues: [GitHub Issues](https://github.com/pelagornis/refineui-system-icons/issues)
- 📖 Documentation: [opensource.pelagornis.com](https://opensource.pelagornis.com)
- 💬 Community: [Slack](https://pelagornis.slack.com/)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
