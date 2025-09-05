library refineui_system_icons;

export 'src/refineui_system_icons_base.dart';
export 'src/refineui_system_icons.dart';

/// RefineUI System Icons for Flutter
/// 
/// A comprehensive Flutter icon library providing RefineUI system icons.
/// 
/// ## Features
/// 
/// - **Font-based icons**: Lightweight and scalable
/// - **Regular and Filled variants**: Two icon styles available
/// - **Easy to use**: Simple API similar to Flutter's built-in icons
/// - **Type-safe**: Full IDE support with autocomplete
/// 
/// ## Usage
/// 
/// ```dart
/// import 'package:refineui_system_icons/refineui_system_icons.dart';
/// 
/// // Using Icon widget
/// Icon(RefineIcons.home)
/// 
/// // Using Text widget
/// Text(
///   String.fromCharCode(RefineIcons.home.codePoint),
///   style: TextStyle(fontFamily: RefineIcons.home.fontFamily),
/// )
/// ```
/// 
/// ## Installation
/// 
/// Add this to your `pubspec.yaml`:
/// 
/// ```yaml
/// dependencies:
///   refineui_system_icons: ^1.0.0
/// ```
/// 
/// ## Font Setup
/// 
/// The fonts are automatically included in the package. Make sure to include them in your app's `pubspec.yaml`:
/// 
/// ```yaml
/// flutter:
///   fonts:
///     - family: RefineUI-System-Icons-Regular
///       fonts:
///         - asset: packages/refineui_system_icons/lib/fonts/refineui-system-icons-regular.ttf
///     - family: RefineUI-System-Icons-Filled
///       fonts:
///         - asset: packages/refineui_system_icons/lib/fonts/refineui-system-icons-filled.ttf
/// ```
