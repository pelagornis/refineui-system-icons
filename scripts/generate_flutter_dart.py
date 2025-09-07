#!/usr/bin/env python3
"""
RefineUI System Icons - Flutter Dart Generator
Generates Flutter Dart files.
"""

import os
import sys
from pathlib import Path

def generate_flutter_dart():
    """Generates Flutter Dart files."""
    print("🦋 Flutter Dart generation started...")
    
    project_root = Path(__file__).parent.parent
    flutter_dir = project_root / "flutter"
    
    if not flutter_dir.exists():
        print(f"❌ Flutter directory not found: {flutter_dir}")
        return False
    
    # 270 icon names
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
    
    # Create lib directory
    lib_dir = flutter_dir / "lib"
    lib_dir.mkdir(parents=True, exist_ok=True)
    
    # 1. Generate refineui_system_icons.dart file
    generate_main_dart(lib_dir, ICON_NAMES)
    
    # 2. Update pubspec.yaml
    update_pubspec_yaml(flutter_dir)
    
    print("✅ Flutter Dart generation completed!")
    return True

def generate_main_dart(lib_dir: Path, icon_names: list):
    """Generates refineui_system_icons.dart file."""
    
    dart_content = """library refineui_system_icons;

export 'src/refineui_system_icons_base.dart';
export 'src/refineui_icons.dart';

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
/// Icon(RefineUIIcons.home)
/// 
/// // Using Text widget
/// Text(
///   String.fromCharCode(RefineUIIcons.home.codePoint),
///   style: TextStyle(fontFamily: RefineUIIcons.home.fontFamily),
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
    
    # Save file
    main_file = lib_dir / "refineui_system_icons.dart"
    with open(main_file, 'w', encoding='utf-8') as f:
        f.write(dart_content)
    
    print(f"✅ {main_file.name} generation completed")

def update_pubspec_yaml(flutter_dir: Path):
    """Updates pubspec.yaml file."""
    
    pubspec_file = flutter_dir / "pubspec.yaml"
    
    if pubspec_file.exists():
        # Read existing pubspec.yaml
        with open(pubspec_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Update version
        if 'version: 1.0.0' in content:
            content = content.replace('version: 1.0.0', 'version: 1.0.1')
        
        # Update description
        if 'description:' in content:
            content = content.replace(
                'description: A comprehensive Flutter icon library providing RefineUI system icons.',
                'description: A comprehensive Flutter icon library providing RefineUI system icons with 270+ icons in regular and filled variants.'
            )
        
        # Save file
        with open(pubspec_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ {pubspec_file.name} update completed")
    else:
        print(f"⚠️  {pubspec_file.name} file not found.")

if __name__ == "__main__":
    success = generate_flutter_dart()
    sys.exit(0 if success else 1)
