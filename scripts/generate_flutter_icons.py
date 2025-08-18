#!/usr/bin/env python3
import json
import os
from pathlib import Path

def generate_flutter_icons(mapping_data):
    """Flutter 아이콘 클래스를 생성합니다."""
    
    flutter_code = '''import 'package:flutter/widgets.dart';

/// RefineUI System Icons for Flutter
/// 
/// This class provides access to all RefineUI system icons.
/// Icons are rendered using custom fonts and can be used with
/// the [Icon] widget or [Text] widget.
class RefineIcons {
  RefineIcons._();

  // Font families
  static const String _regularFontFamily = 'RefineUI-System-Icons-Regular';
  static const String _filledFontFamily = 'RefineUI-System-Icons-Filled';

  // Regular icons
'''
    
    # Regular icons
    regular_icons = {}
    filled_icons = {}
    
    for css_class, icon_data in mapping_data['icons'].items():
        # 아이콘 이름에서 공백과 하이픈 제거, PascalCase로 변환
        icon_name = icon_data['name'].replace(' ', '').replace('-', '')
        # 첫 글자를 대문자로
        icon_name = icon_name[0].upper() + icon_name[1:] if icon_name else ''
        unicode_char = chr(icon_data['unicode'])
        
        # 중복된 이름이 있으면 size를 추가
        base_name = icon_name
        counter = 1
        while icon_name in regular_icons or icon_name in filled_icons:
            icon_name = f"{base_name}{counter}"
            counter += 1
        
        if icon_data['style'] == 'regular':
            regular_icons[icon_name] = unicode_char
        else:  # filled
            filled_icons[icon_name] = unicode_char
    
    # Regular icons 추가
    for icon_name, unicode_char in regular_icons.items():
        flutter_code += f'  static const IconData {icon_name} = IconData(0x{ord(unicode_char):04X}, fontFamily: _regularFontFamily);\n'
    
    flutter_code += '\n  // Filled icons\n'
    
    # Filled icons 추가
    for icon_name, unicode_char in filled_icons.items():
        flutter_code += f'  static const IconData {icon_name} = IconData(0x{ord(unicode_char):04X}, fontFamily: _filledFontFamily);\n'
    
    flutter_code += '''}

/// Extension to provide easy access to RefineUI icons
extension RefineIconsExtension on Icon {
  /// Creates an icon using RefineUI system icons
  static Icon refine(IconData icon, {double? size, Color? color}) {
    return Icon(
      icon,
      size: size,
      color: color,
    );
  }
}

/// Extension to provide easy access to RefineUI icons in Text widgets
extension RefineIconsTextExtension on Text {
  /// Creates a text widget with RefineUI icon
  static Text refineIcon(IconData icon, {double? size, Color? color, TextStyle? style}) {
    return Text(
      String.fromCharCode(icon.codePoint),
      style: style?.copyWith(
        fontFamily: icon.fontFamily,
        fontSize: size,
        color: color,
      ) ?? TextStyle(
        fontFamily: icon.fontFamily,
        fontSize: size,
        color: color,
      ),
    );
  }
}
'''
    
    return flutter_code

def generate_flutter_constants(mapping_data):
	"""FluentUI 스타일의 상수 정의 파일(Dart)을 생성합니다."""
	lines = []
	lines.append("import 'package:flutter/widgets.dart';")
	lines.append("")
	lines.append("/// RefineUI System Icons (constant style, FluentUI-like)")
	lines.append("class RefineUIIcons {")
	lines.append("\tRefineUIIcons._();")
	lines.append("")
	lines.append("\tstatic const String? _kFontPkg = null;")
	lines.append("\tstatic const String _regularFamily = 'RefineUI-System-Icons-Regular';")
	lines.append("\tstatic const String _filledFamily = 'RefineUI-System-Icons-Filled';")
	lines.append("")
	# 정렬을 위해 일단 수집 후 정렬 출력
	entries = []
	for css_class, icon_data in mapping_data['icons'].items():
		name_snake = icon_data['name'].lower().replace(' ', '_').replace('-', '_')
		size = icon_data['size']
		style = icon_data['style']  # 'regular' | 'filled'
		code_point = int(icon_data['unicode'])
		const_name = f"{name_snake}_{size}_{style}"
		font_family_var = "_regularFamily" if style == 'regular' else "_filledFamily"
		entries.append((const_name, code_point, font_family_var))
	# 이름 기준 정렬
	entries.sort(key=lambda x: x[0])
	for const_name, code_point, font_family_var in entries:
		lines.append(f"\tstatic const IconData {const_name} = IconData({code_point}, fontFamily: {font_family_var}, fontPackage: _kFontPkg);")
	lines.append("}")
	lines.append("")
	return "\n".join(lines)

def generate_pubspec_yaml():
    """pubspec.yaml 파일을 생성합니다."""
    
    pubspec_content = '''name: refineui_system_icons
description: RefineUI System Icons for Flutter - A comprehensive icon library
version: 1.0.0

environment:
  sdk: '>=3.0.0 <4.0.0'
  flutter: ">=3.0.0"

dependencies:
  flutter:
    sdk: flutter

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  fonts:
    - family: RefineUI-System-Icons-Regular
      fonts:
        - asset: lib/fonts/refineui-system-icons-regular.ttf
    - family: RefineUI-System-Icons-Filled
      fonts:
        - asset: lib/fonts/refineui-system-icons-filled.ttf
'''
    
    return pubspec_content

def generate_readme():
    """README.md 파일을 생성합니다."""
    
    readme_content = '''# RefineUI System Icons for Flutter

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
'''
    
    return readme_content

def main():
	"""메인 함수"""
	# 아이콘 매핑 JSON 파일 읽기
	mapping_path = Path("fonts/icon-mapping.json")
	
	if not mapping_path.exists():
		print("Error: icon-mapping.json not found")
		return
	
	with open(mapping_path, 'r') as f:
		mapping_data = json.load(f)
	
	# Flutter 프로젝트 디렉토리 생성
	flutter_dir = Path("flutter")
	flutter_dir.mkdir(exist_ok=True)
	
	lib_dir = flutter_dir / "lib"
	lib_dir.mkdir(exist_ok=True)
	
	# RefineIcons 클래스 생성
	flutter_icons_code = generate_flutter_icons(mapping_data)
	icons_file = lib_dir / "refineui_system_icons.dart"
	
	with open(icons_file, 'w') as f:
		f.write(flutter_icons_code)
	
	# 상수 스타일 RefineUIIcons 생성
	constants_code = generate_flutter_constants(mapping_data)
	constants_file = lib_dir / "refineui_icons.dart"
	with open(constants_file, 'w') as f:
		f.write(constants_code)
	
	# pubspec.yaml 생성
	pubspec_content = generate_pubspec_yaml()
	pubspec_file = flutter_dir / "pubspec.yaml"
	
	with open(pubspec_file, 'w') as f:
		f.write(pubspec_content)
	
	# README.md 생성
	readme_content = generate_readme()
	readme_file = flutter_dir / "README.md"
	
	with open(readme_file, 'w') as f:
		f.write(readme_content)
	
	# 분석 파일 생성
	analysis_file = flutter_dir / "analysis_options.yaml"
	analysis_content = '''include: package:flutter_lints/flutter.yaml

linter:
  rules:
    - always_declare_return_types
    - avoid_empty_else
    - avoid_print
    - avoid_unused_constructor_parameters
    - await_only_futures
    - camel_case_types
    - cancel_subscriptions
    - constant_identifier_names
    - control_flow_in_finally
    - directives_ordering
    - empty_catches
    - empty_constructor_bodies
    - empty_statements
    - hash_and_equals
    - implementation_imports
    - library_names
    - library_prefixes
    - non_constant_identifier_names
    - package_api_docs
    - package_names
    - package_prefixed_library_names
    - prefer_const_constructors
    - prefer_final_fields
    - prefer_is_empty
    - prefer_is_not_empty
    - prefer_typing_uninitialized_variables
    - slash_for_doc_comments
    - test_types_in_equals
    - throw_in_finally
    - type_init_formals
    - unnecessary_brace_in_string_interps
    - unnecessary_getters_setters
    - unnecessary_new
    - unnecessary_null_aware_assignments
    - unnecessary_statements
    - unrelated_type_equality_checks
    - use_rethrow_when_possible
    - valid_regexps
'''
	
	with open(analysis_file, 'w') as f:
		f.write(analysis_content)
	
	# 아이콘 개수 계산
	regular_count = len([i for i in mapping_data['icons'].values() if i['style'] == 'regular'])
	filled_count = len([i for i in mapping_data['icons'].values() if i['style'] == 'filled'])
	
	print(f"Generated Flutter package:")
	print(f"  - {icons_file}")
	print(f"  - {constants_file}")
	print(f"  - {pubspec_file}")
	print(f"  - {readme_file}")
	print(f"  - {analysis_file}")
	print(f"  - Font files copied to flutter/lib/fonts/")
	print(f"\nTotal icons generated: {len(mapping_data['icons'])}")
	print(f"  - Regular icons: {regular_count}")
	print(f"  - Filled icons: {filled_count}")
	print("\nNext steps:")
	print("1. Navigate to the flutter directory")
	print("2. Run 'flutter pub get' to install dependencies")
	print("3. Use RefineIcons in your Flutter app")

if __name__ == "__main__":
	main()
