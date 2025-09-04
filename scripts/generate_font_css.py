#!/usr/bin/env python3
"""
RefineUI System Icons - Font CSS Generator
Generates CSS files based on font files.
"""

import os
import sys
from pathlib import Path

def generate_font_css():
    """Generates font CSS."""
    print("🎨 Font CSS generation started...")
    
    project_root = Path(__file__).parent.parent
    fonts_dir = project_root / "fonts"
    
    if not fonts_dir.exists():
        print(f"❌ Font directory not found: {fonts_dir}")
        return False
    
    # Find font files
    ttf_files = list(fonts_dir.glob("*.ttf"))
    woff2_files = list(fonts_dir.glob("*.woff2"))
    woff_files = list(fonts_dir.glob("*.woff"))
    
    if not ttf_files and not woff2_files and not woff_files:
        print("❌ Font files not found.")
        return False
    
    # Generate CSS files
    for font_file in ttf_files + woff2_files + woff_files:
        generate_css_for_font(font_file)
    
    print("🎉 Font CSS generation completed!")
    return True

def generate_css_for_font(font_file: Path):
    """Generates CSS for a specific font file."""
    font_name = font_file.stem
    font_family = font_name.replace('-', ' ').title()
    
    # Determine font type
    if font_file.suffix == '.ttf':
        font_type = 'truetype'
    elif font_file.suffix == '.woff2':
        font_type = 'woff2'
    elif font_file.suffix == '.woff':
        font_type = 'woff'
    else:
        return
    
    # CSS filename
    css_file = font_file.with_suffix('.css')
    
    # Generate CSS content
    css_content = f"""/* RefineUI System Icons Font CSS - {font_family} */
@font-face {{
    font-family: '{font_family}';
    src: url('./{font_file.name}') format('{font_type}');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}}

/* Individual icon classes */
"""
    
    # Generate icon classes (example - actual logic needs to be more sophisticated)
    icon_sizes = [16, 20, 24, 28, 32, 48]
    icon_styles = ['regular', 'filled']
    
    # 270 icon names (from generate_270_icons.py)
    icon_names = [
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
    
    # Generate CSS classes for each icon
    for icon_name in icon_names:
        for size in icon_sizes:
            for style in icon_styles:
                css_content += f""".ic_refineui_{icon_name}_{size}_{style}:before {{
    font-family: '{font_family}';
    font-weight: normal;
    font-style: normal;
    content: "\\F{size:04d}";
}}

"""
    
    # Save CSS file
    with open(css_file, 'w', encoding='utf-8') as f:
        f.write(css_content)
    
    print(f"✅ {css_file.name} generation completed")

if __name__ == "__main__":
    success = generate_font_css()
    sys.exit(0 if success else 1)
