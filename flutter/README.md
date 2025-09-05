# RefineUI System Icons - Flutter

Flutter package for RefineUI System Icons with Material Design compatibility.

## 📦 Installation

Add to your `pubspec.yaml`:

```yaml
dependencies:
  refineui_system_icons: ^1.0.0
```

Then run:

```bash
flutter pub get
```

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
            // Basic usage
            RefineUIIcon(RefineUIIcons.home, size: 24),

            SizedBox(height: 20),

            // With custom color
            RefineUIIcon(RefineUIIcons.search, size: 20, color: Colors.blue),

            SizedBox(height: 20),

            // With custom style
            RefineUIIcon(
              RefineUIIcons.settings,
              size: 16,
              color: Colors.red,
            ),

            SizedBox(height: 20),

            // With onTap
            GestureDetector(
              onTap: () => print('Heart tapped!'),
              child: RefineUIIcon(
                RefineUIIcons.heart,
                size: 24,
                color: Colors.pink,
              ),
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

- **Navigation**: `home`, `search`, `menu`, `back`, `forward`, `up`, `down`, `left`, `right`
- **Actions**: `add`, `edit`, `delete`, `save`, `cancel`, `refresh`, `download`, `upload`
- **Communication**: `mail`, `phone`, `chat`, `notification`, `bell`, `message`
- **Media**: `play`, `pause`, `stop`, `volume`, `mute`, `camera`, `image`, `video`
- **System**: `settings`, `gear`, `user`, `lock`, `unlock`, `key`, `shield`
- **Files**: `folder`, `file`, `document`, `image`, `pdf`, `zip`, `download`
- **And many more...** (434+ icons total)

### Icon Sizes

- **16px**: `size: 16`
- **20px**: `size: 20`
- **24px**: `size: 24` (default)
- **32px**: `size: 32`
- **48px**: `size: 48`

## 🔧 Advanced Usage

### Custom Icon Widget

```dart
import 'package:flutter/material.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';

class CustomIcon extends StatelessWidget {
  final IconData icon;
  final double size;
  final Color? color;
  final VoidCallback? onTap;

  const CustomIcon({
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
      child: RefineUIIcon(
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

class AnimatedIcon extends StatefulWidget {
  final IconData icon;
  final double size;
  final Color? color;

  const AnimatedIcon({
    Key? key,
    required this.icon,
    this.size = 24,
    this.color,
  }) : super(key: key);

  @override
  _AnimatedIconState createState() => _AnimatedIconState();
}

class _AnimatedIconState extends State<AnimatedIcon>
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
            child: RefineUIIcon(
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

class ThemedIcon extends StatelessWidget {
  final IconData icon;
  final double size;

  const ThemedIcon({
    Key? key,
    required this.icon,
    this.size = 24,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return RefineUIIcon(
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

class NavigationBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      type: BottomNavigationBarType.fixed,
      items: [
        BottomNavigationBarItem(
          icon: RefineUIIcon(RefineUIIcons.home, size: 24),
          activeIcon: RefineUIIcon(RefineUIIcons.home, size: 24, color: Colors.blue),
          label: 'Home',
        ),
        BottomNavigationBarItem(
          icon: RefineUIIcon(RefineUIIcons.search, size: 24),
          activeIcon: RefineUIIcon(RefineUIIcons.search, size: 24, color: Colors.blue),
          label: 'Search',
        ),
        BottomNavigationBarItem(
          icon: RefineUIIcon(RefineUIIcons.settings, size: 24),
          activeIcon: RefineUIIcon(RefineUIIcons.settings, size: 24, color: Colors.blue),
          label: 'Settings',
        ),
        BottomNavigationBarItem(
          icon: RefineUIIcon(RefineUIIcons.user, size: 24),
          activeIcon: RefineUIIcon(RefineUIIcons.user, size: 24, color: Colors.blue),
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

class IconButton extends StatelessWidget {
  final IconData icon;
  final String text;
  final VoidCallback? onPressed;

  const IconButton({
    Key? key,
    required this.icon,
    required this.text,
    this.onPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton.icon(
      onPressed: onPressed,
      icon: RefineUIIcon(icon, size: 16, color: Colors.white),
      label: Text(text),
    );
  }
}
```

## 🛠️ Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/refineui/system-icons.git
cd system-icons

# Install dependencies
npm install

# Build Flutter icons
npm run generate:flutter
npm run build:flutter
```

### Adding New Icons

1. Add SVG files to `src/icons/`
2. Run `npm run generate:metadata`
3. Run `npm run generate:flutter`
4. Test your changes in Flutter app

## 🐛 Troubleshooting

### Common Issues

1. **Icon not displaying**

   - Check if the icon name is correct
   - Verify the package is installed
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

- 📧 Email: support@refineui.com
- 🐛 Issues: [GitHub Issues](https://github.com/refineui/system-icons/issues)
- 📖 Documentation: [docs.refineui.com](https://docs.refineui.com)
- 💬 Community: [Discord](https://discord.gg/refineui)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
