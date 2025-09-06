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
            Icon(RefineIcons.accessTime16Regular, size: 24),

            SizedBox(height: 20),

            // Using Icon widget with RefineIconsFilled
            Icon(RefineIconsFilled.accessTime16Filled, size: 24, color: Colors.blue),

            SizedBox(height: 20),

            // Using Text widget with font family
            Text(
              String.fromCharCode(RefineIcons.accessTime16Regular.codePoint),
              style: TextStyle(
                fontFamily: RefineIcons.accessTime16Regular.fontFamily,
                fontSize: 24,
                color: Colors.red,
              ),
            ),

            SizedBox(height: 20),

            // Using in a button
            ElevatedButton.icon(
              onPressed: () => print('Button pressed!'),
              icon: Icon(RefineIcons.accessTime16Regular, size: 16),
              label: Text('Access Time'),
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

- **Access**: `accessTime16Regular`, `accessTime16Filled`, `accessTime20Regular`, etc.
- **Add**: `add16Regular`, `add16Filled`, `add20Regular`, etc.
- **Alert**: `alertBadge16Regular`, `alertBadge16Filled`, `alertBadge20Regular`, etc.
- **Arrow**: `arrowDown16Regular`, `arrowDown16Filled`, `arrowLeft16Regular`, etc.
- **Calendar**: `calendar16Regular`, `calendar16Filled`, `calendar20Regular`, etc.
- **Checkmark**: `checkmark16Regular`, `checkmark16Filled`, `checkmark20Regular`, etc.
- **Delete**: `delete16Regular`, `delete16Filled`, `delete20Regular`, etc.
- **Edit**: `edit16Regular`, `edit16Filled`, `edit20Regular`, etc.
- **Home**: `home16Regular`, `home16Filled`, `home20Regular`, etc.
- **Search**: `search16Regular`, `search16Filled`, `search20Regular`, etc.
- **Settings**: `settings16Regular`, `settings16Filled`, `settings20Regular`, etc.
- **And many more...** (434+ icons total)

### Icon Sizes

- **16px**: `accessTime16Regular`, `accessTime16Filled`
- **20px**: `accessTime20Regular`, `accessTime20Filled`
- **24px**: `accessTime24Regular`, `accessTime24Filled`
- **28px**: `accessTime28Regular`, `accessTime28Filled`
- **32px**: `accessTime32Regular`, `accessTime32Filled`
- **48px**: `accessTime48Regular`, `accessTime48Filled`

### Two Icon Styles

- **Regular**: `RefineIcons.accessTime16Regular`
- **Filled**: `RefineIconsFilled.accessTime16Filled`

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
          RefineUIIcons.search,
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
          icon: Icon(RefineIcons.home16Regular, size: 24),
          activeIcon: Icon(RefineIconsFilled.home16Filled, size: 24, color: Colors.blue),
          label: 'Home',
        ),
        BottomNavigationBarItem(
          icon: Icon(RefineIcons.search16Regular, size: 24),
          activeIcon: Icon(RefineIconsFilled.search16Filled, size: 24, color: Colors.blue),
          label: 'Search',
        ),
        BottomNavigationBarItem(
          icon: Icon(RefineIcons.settings16Regular, size: 24),
          activeIcon: Icon(RefineIconsFilled.settings16Filled, size: 24, color: Colors.blue),
          label: 'Settings',
        ),
        BottomNavigationBarItem(
          icon: Icon(RefineIcons.person16Regular, size: 24),
          activeIcon: Icon(RefineIconsFilled.person16Filled, size: 24, color: Colors.blue),
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

   - Check if the icon name is correct (e.g., `RefineIcons.accessTime16Regular`)
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
- 💬 Community: [Discord](https://pelagornis.slack.com/)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
