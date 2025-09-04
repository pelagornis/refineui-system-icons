#!/usr/bin/env python3
"""
RefineUI System Icons - Flutter Dart Generator
Flutter용 Dart 파일들을 생성합니다.
"""

import os
import sys
from pathlib import Path

def generate_flutter_dart():
    """Flutter용 Dart 파일들을 생성합니다."""
    print("🦋 Flutter Dart 생성 시작...")
    
    project_root = Path(__file__).parent.parent
    flutter_dir = project_root / "flutter"
    
    if not flutter_dir.exists():
        print(f"❌ Flutter 디렉토리를 찾을 수 없습니다: {flutter_dir}")
        return False
    
    # 270개 아이콘 이름
    ICON_NAMES = [
        'access', 'accessibility', 'add', 'airplane', 'album', 'alert', 'align', 'android', 'app', 'appstore',
        'autosum', 'backpack', 'backspace', 'badge', 'balloon', 'bar', 'barcode', 'battery', 'block', 'bluetooth',
        'blur', 'board', 'book', 'bookmark', 'bug', 'calculator', 'calendar', 'camera', 'cart', 'carton',
        'chart', 'chat', 'checkmark', 'chess', 'chevron', 'circle', 'clipboard', 'clock', 'cloud', 'clover',
        'code', 'comma', 'comment', 'cone', 'contrast', 'control', 'cookie', 'copy', 'couch', 'cpu',
        'crop', 'crown', 'css', 'cube', 'cursor', 'cut', 'dart', 'database', 'delete', 'dentist',
        'desk', 'desktop', 'dialpad', 'diamond', 'dismiss', 'doctor', 'document', 'door', 'drag', 'drawer',
        'drop', 'dual', 'dumbbell', 'dust', 'earth', 'edit', 'elevator', 'emoji', 'engine', 'equal',
        'error', 'eye', 'eyedropper', 'fast', 'filmstrip', 'filter', 'fire', 'flag', 'flash', 'flashlight',
        'flip', 'folder', 'frame', 'full', 'games', 'gantt', 'gas', 'gavel', 'gif', 'gift',
        'git', 'glasses', 'global', 'grid', 'guest', 'guitar', 'hammer', 'hard', 'hat', 'hd',
        'hdr', 'headphones', 'headset', 'heart', 'hexagon', 'highlight', 'highway', 'home', 'hourglass', 'html',
        'image', 'important', 'incognito', 'info', 'ios', 'iot', 'javascript', 'joystick', 'json', 'key',
        'keyboard', 'kiosk', 'kotlin', 'laptop', 'layer', 'lightbulb', 'line', 'link', 'local', 'location',
        'lock', 'luggage', 'macos', 'mail', 'mailbox', 'map', 'markdown', 'math', 'megaphone', 'mic',
        'moon', 'more', 'mouse', 'movie', 'network', 'news', 'next', 'note', 'notebook', 'notepad',
        'number', 'opacity', 'open', 'options', 'organization', 'orientation', 'oval', 'oven', 'padding', 'page',
        'paint', 'parallelogram', 'password', 'pause', 'payment', 'pen', 'pentagon', 'person', 'phone', 'piano',
        'pin', 'pipeline', 'play', 'playstore', 'port', 'power', 'preview', 'previous', 'print', 'pulse',
        'python', 'qr', 'question', 'radio', 'ram', 'record', 'rectangle', 'refineui', 'rewind', 'rhombus',
        'ribbon', 'road', 'rocket', 'rotation', 'router', 'rss', 'ruler', 'run', 'save', 'scales',
        'script', 'search', 'send', 'serial', 'server', 'service', 'settings', 'shape', 'shapes', 'share',
        'shell', 'shield', 'shopping', 'sim', 'slide', 'smartwatch', 'sound', 'spacebar', 'sport', 'spray',
        'square', 'star', 'stop', 'subtract', 'swift', 'tab', 'tablet', 'tag', 'target', 'temperature',
        'tent', 'text', 'textbox', 'thinking', 'ticket', 'timer', 'toggle', 'toolbox', 'trophy', 'tv',
        'typescript', 'umbrella', 'usb', 'verified', 'video', 'voicemail', 'vote', 'walkie', 'wallet', 'wand',
        'warning', 'washer', 'water', 'weather', 'web', 'wifi', 'windows', 'wrench', 'xray', 'zoom'
    ]
    
    # lib 디렉토리 생성
    lib_dir = flutter_dir / "lib"
    lib_dir.mkdir(parents=True, exist_ok=True)
    
    # 1. refineui_system_icons.dart 파일 생성
    generate_main_dart(lib_dir, ICON_NAMES)
    
    # 2. refineui_system_icons_base.dart 파일 생성
    generate_base_dart(lib_dir, ICON_NAMES)
    
    # 3. pubspec.yaml 업데이트
    update_pubspec_yaml(flutter_dir)
    
    print("✅ Flutter Dart 생성 완료!")
    return True

def generate_main_dart(lib_dir: Path, icon_names: list):
    """refineui_system_icons.dart 파일을 생성합니다."""
    
    dart_content = """library refineui_system_icons;

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
"""
    
    # 파일 저장
    main_file = lib_dir / "refineui_system_icons.dart"
    with open(main_file, 'w', encoding='utf-8') as f:
        f.write(dart_content)
    
    print(f"✅ {main_file.name} 생성 완료")

def generate_base_dart(lib_dir: Path, icon_names: list):
    """refineui_system_icons_base.dart 파일을 생성합니다."""
    
    dart_content = """import 'package:flutter/widgets.dart';

/// RefineUI System Icons Base Class
/// 
/// This class provides the base functionality for all RefineUI icons.
abstract class RefineUIIconData extends IconData {
  const RefineUIIconData(int codePoint, {String? fontFamily})
      : super(codePoint, fontFamily: fontFamily);
  
  /// Get the filled version of this icon
  RefineUIIconData get filled;
  
  /// Get the regular version of this icon
  RefineUIIconData get regular;
  
  /// Check if this is a filled icon
  bool get isFilled;
  
  /// Check if this is a regular icon
  bool get isRegular;
}

/// RefineUI System Icons - Regular Variants
class RefineIcons {
"""
    
    # 각 아이콘에 대해 static const 추가
    for icon_name in icon_names:
        icon_name_camel = ''.join(word.capitalize() for word in icon_name.split('_'))
        dart_content += f"  static const {icon_name_camel} = RefineUIIconDataRegular(0x{0xF0000 + icon_names.index(icon_name):05X});\n"
    
    dart_content += """}

/// RefineUI System Icons - Filled Variants
class RefineIconsFilled {
"""
    
    # Filled 아이콘들 추가
    for icon_name in icon_names:
        icon_name_camel = ''.join(word.capitalize() for word in icon_name.split('_'))
        dart_content += f"  static const {icon_name_camel} = RefineUIIconDataFilled(0x{0xF0000 + icon_names.index(icon_name):05X});\n"
    
    dart_content += """}

/// Regular Icon Data Implementation
class RefineUIIconDataRegular extends RefineUIIconData {
  const RefineUIIconDataRegular(int codePoint) : super(codePoint, fontFamily: 'RefineUI-System-Icons-Regular');
  
  @override
  RefineUIIconData get filled => RefineUIIconDataFilled(codePoint);
  
  @override
  RefineUIIconData get regular => this;
  
  @override
  bool get isFilled => false;
  
  @override
  bool get isRegular => true;
}

/// Filled Icon Data Implementation
class RefineUIIconDataFilled extends RefineUIIconData {
  const RefineUIIconDataFilled(int codePoint) : super(codePoint, fontFamily: 'RefineUI-System-Icons-Filled');
  
  @override
  RefineUIIconData get filled => this;
  
  @override
  RefineUIIconData get regular => RefineUIIconDataRegular(codePoint);
  
  @override
  bool get isFilled => true;
  
  @override
  bool get isRegular => false;
}

/// Extensions for easier usage
extension RefineUIIconExtension on RefineUIIconData {
  /// Create an Icon widget with this icon data
  Icon toIcon({double? size, Color? color, String? semanticLabel}) {
    return Icon(this, size: size, color: color, semanticLabel: semanticLabel);
  }
  
  /// Create a Text widget with this icon
  Text toText({double? size, Color? color, TextStyle? style}) {
    return Text(
      String.fromCharCode(codePoint),
      style: style?.copyWith(
        fontFamily: fontFamily,
        fontSize: size,
        color: color,
      ) ?? TextStyle(
        fontFamily: fontFamily,
        fontSize: size,
        color: color,
      ),
    );
  }
}

/// Extensions for Icon widget
extension IconRefineUIExtension on Icon {
  /// Create an icon with RefineUI icon data
  static Icon refine(RefineUIIconData icon, {double? size, Color? color, String? semanticLabel}) {
    return Icon(icon, size: size, color: color, semanticLabel: semanticLabel);
  }
}

/// Extensions for Text widget
extension TextRefineUIExtension on Text {
  /// Create text with RefineUI icon
  static Text refineIcon(RefineUIIconData icon, {double? size, Color? color, TextStyle? style}) {
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
"""
    
    # 파일 저장
    base_file = lib_dir / "src" / "refineui_system_icons_base.dart"
    base_file.parent.mkdir(parents=True, exist_ok=True)
    
    with open(base_file, 'w', encoding='utf-8') as f:
        f.write(dart_content)
    
    print(f"✅ {base_file.name} 생성 완료")

def update_pubspec_yaml(flutter_dir: Path):
    """pubspec.yaml 파일을 업데이트합니다."""
    
    pubspec_file = flutter_dir / "pubspec.yaml"
    
    if pubspec_file.exists():
        # 기존 pubspec.yaml 읽기
        with open(pubspec_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 버전 업데이트
        if 'version: 1.0.0' in content:
            content = content.replace('version: 1.0.0', 'version: 1.0.1')
        
        # 설명 업데이트
        if 'description:' in content:
            content = content.replace(
                'description: A comprehensive Flutter icon library providing RefineUI system icons.',
                'description: A comprehensive Flutter icon library providing RefineUI system icons with 270+ icons in regular and filled variants.'
            )
        
        # 파일 저장
        with open(pubspec_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ {pubspec_file.name} 업데이트 완료")
    else:
        print(f"⚠️  {pubspec_file.name} 파일을 찾을 수 없습니다.")

if __name__ == "__main__":
    success = generate_flutter_dart()
    sys.exit(0 if success else 1)
