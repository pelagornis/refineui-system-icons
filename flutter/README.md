# RefineUI System Icons for Flutter

A comprehensive Flutter icon library providing RefineUI system icons.

## Features

- **Font-based icons**: Lightweight and scalable
- **Regular and Filled variants**: Two icon styles available
- **Easy to use**: Simple API similar to Flutter's built-in icons
- **Type-safe**: Full IDE support with autocomplete

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  refineui_system_icons: ^1.0.0
```

## Usage

### Basic Usage

```dart
import 'package:refineui_system_icons/refineui_system_icons.dart';

// Using Icon widget
Icon(RefineIcons.home)

// Using Text widget
Text(
  String.fromCharCode(RefineIcons.home.codePoint),
  style: TextStyle(fontFamily: RefineIcons.home.fontFamily),
)
```

### With Custom Styling

```dart
// Regular icon
Icon(
  RefineIcons.settings,
  size: 24,
  color: Colors.blue,
)

// Filled icon
Icon(
  RefineIcons.settingsFilled,
  size: 32,
  color: Colors.red,
)
```

### Using Extensions

```dart
// Icon extension
Icon.refine(RefineIcons.search, size: 20, color: Colors.grey)

// Text extension
Text.refineIcon(RefineIcons.notification, size: 16, color: Colors.orange)
```

## Available Icons

The library includes hundreds of icons in both regular and filled variants. 
All icons follow the naming convention: `IconName` for regular and `IconNameFilled` for filled variants.

### Examples

- `RefineIcons.home` / `RefineIcons.homeFilled`
- `RefineIcons.settings` / `RefineIcons.settingsFilled`
- `RefineIcons.search` / `RefineIcons.searchFilled`
- `RefineIcons.notification` / `RefineIcons.notificationFilled`

## Font Setup

The fonts are automatically included in the package. Make sure to include them in your app's `pubspec.yaml`:

```yaml
flutter:
  fonts:
    - family: RefineUI-System-Icons-Regular
      fonts:
        - asset: packages/refineui_system_icons/lib/fonts/refineui-system-icons-regular.ttf
    - family: RefineUI-System-Icons-Filled
      fonts:
        - asset: packages/refineui_system_icons/lib/fonts/refineui-system-icons-filled.ttf
```

## Performance

- Font-based icons are lightweight and load quickly
- Icons scale perfectly at any size
- No additional image assets required
- Optimized for Flutter's rendering engine

## Contributing

This package is part of the RefineUI System Icons project. 
For contributions, please refer to the main project repository.
