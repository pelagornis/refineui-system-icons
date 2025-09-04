#!/usr/bin/env python3
"""
RefineUI System Icons - Font CSS Generator
폰트 파일을 기반으로 CSS 파일을 생성합니다.
"""

import os
import sys
from pathlib import Path

def generate_font_css():
    """폰트 CSS를 생성합니다."""
    print("🎨 폰트 CSS 생성 시작...")
    
    project_root = Path(__file__).parent.parent
    fonts_dir = project_root / "fonts"
    
    if not fonts_dir.exists():
        print(f"❌ 폰트 디렉토리를 찾을 수 없습니다: {fonts_dir}")
        return False
    
    # 폰트 파일들 찾기
    ttf_files = list(fonts_dir.glob("*.ttf"))
    woff2_files = list(fonts_dir.glob("*.woff2"))
    woff_files = list(fonts_dir.glob("*.woff"))
    
    if not ttf_files and not woff2_files and not woff_files:
        print("❌ 폰트 파일을 찾을 수 없습니다.")
        return False
    
    # CSS 파일 생성
    for font_file in ttf_files + woff2_files + woff_files:
        generate_css_for_font(font_file)
    
    print("🎉 폰트 CSS 생성 완료!")
    return True

def generate_css_for_font(font_file: Path):
    """특정 폰트 파일에 대한 CSS를 생성합니다."""
    font_name = font_file.stem
    font_family = font_name.replace('-', ' ').title()
    
    # 폰트 타입 결정
    if font_file.suffix == '.ttf':
        font_type = 'truetype'
    elif font_file.suffix == '.woff2':
        font_type = 'woff2'
    elif font_file.suffix == '.woff':
        font_type = 'woff'
    else:
        return
    
    # CSS 파일명
    css_file = font_file.with_suffix('.css')
    
    # CSS 내용 생성
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
    
    # 아이콘 클래스들 생성 (예시 - 실제로는 더 정교한 로직 필요)
    icon_sizes = [16, 20, 24, 28, 32, 48]
    icon_styles = ['regular', 'filled']
    
    # 270개 아이콘 이름 (generate_270_icons.py에서 가져온 것)
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
    
    # 각 아이콘에 대해 CSS 클래스 생성
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
    
    # CSS 파일 저장
    with open(css_file, 'w', encoding='utf-8') as f:
        f.write(css_content)
    
    print(f"✅ {css_file.name} 생성 완료")

if __name__ == "__main__":
    success = generate_font_css()
    sys.exit(0 if success else 1)
