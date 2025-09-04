#!/usr/bin/env python3
"""
RefineUI System Icons - Android XML Generator
Generates Android XML drawable files.
"""

import os
import sys
from pathlib import Path

def generate_android_xml():
    """Generates Android XML drawable files."""
    print("🤖 Android XML generation started...")
    
    project_root = Path(__file__).parent.parent
    android_dir = project_root / "android"
    
    if not android_dir.exists():
        print(f"❌ Android directory not found: {android_dir}")
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
    
    # Icon sizes
    ICON_SIZES = [16, 20, 24, 28, 32, 48]
    
    # Styles
    ICON_STYLES = ['regular', 'filled']
    
    # Create drawable directory
    drawable_dir = android_dir / "app" / "src" / "main" / "res" / "drawable"
    drawable_dir.mkdir(parents=True, exist_ok=True)
    
    # Generate XML files for each icon
    total_files = 0
    for icon_name in ICON_NAMES:
        for size in ICON_SIZES:
            for style in ICON_STYLES:
                xml_content = generate_xml_content(icon_name, size, style)
                xml_filename = f"ic_refineui_{icon_name}_{size}_{style}.xml"
                xml_path = drawable_dir / xml_filename
                
                with open(xml_path, 'w', encoding='utf-8') as f:
                    f.write(xml_content)
                
                total_files += 1
    
    print(f"✅ Android XML generation completed: {total_files} files")
    return True

def generate_xml_content(icon_name: str, size: int, style: str) -> str:
    """Generates XML drawable content."""
    
    # Icon unicode (should be fetched from font in practice)
    unicode = f"\\uF{size:04d}"
    
    xml_content = f"""<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="{size}dp"
    android:height="{size}dp"
    android:viewportWidth="{size}"
    android:viewportHeight="{size}">
    
    <text
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="{unicode}"
        android:textSize="{size}sp"
        android:textColor="@android:color/black"
        android:fontFamily="RefineUI-System-Icons-{style.title()}"
        android:gravity="center" />
        
</vector>"""
    
    return xml_content

if __name__ == "__main__":
    success = generate_android_xml()
    sys.exit(0 if success else 1)
