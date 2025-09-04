#!/usr/bin/env python3
"""
RefineUI System Icons - Web Icons Generator
React, Web, CDN, React Native 패키지용 아이콘들을 생성합니다.
"""

import os
import sys
from pathlib import Path

# 270개 아이콘 이름 (폰트에서 추출)
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

def generate_web_icons():
    """웹 아이콘들을 생성합니다."""
    print("🌐 웹 아이콘 생성 시작...")
    
    project_root = Path(__file__).parent.parent
    
    # 1. React Icons 생성
    if not generate_react_icons(project_root):
        return False
    
    # 2. Web Icons 생성
    if not generate_web_icons_package(project_root):
        return False
    
    # 3. CDN Icons 생성
    if not generate_icon_cdn(project_root):
        return False
    
    # 4. React Native Icons 생성
    if not generate_react_native_icons(project_root):
        return False
    
    print("🎉 웹 아이콘 생성 완료!")
    return True

def generate_react_icons(project_root):
    """React Icons를 생성합니다."""
    
    src_dir = project_root / "packages" / "react-icons" / "src"
    
    print(f"📋 React Icons 생성 중... {len(ICON_NAMES)}개 아이콘")
    
    # 1. 메인 index.tsx 파일 생성
    generate_main_index(src_dir)
    
    # 2. Regular 아이콘들 파일 생성
    generate_regular_icons(src_dir)
    
    # 3. Filled 아이콘들 파일 생성
    generate_filled_icons(src_dir)
    
    # 4. 유틸리티 파일 생성
    generate_utils(src_dir)
    
    print(f"✅ React Icons 생성 완료: {len(ICON_NAMES) * 2}개 export const")
    return True

def generate_web_icons_package(project_root):
    """Web Icons를 생성합니다."""
    
    src_dir = project_root / "packages" / "web-icons" / "src"
    
    print(f"📋 Web Icons 생성 중... {len(ICON_NAMES)}개 아이콘")
    
    # 1. 메인 index.ts 파일 생성
    generate_main_index_web(src_dir)
    
    # 2. Regular 아이콘들 파일 생성
    generate_regular_icons_web(src_dir)
    
    # 3. Filled 아이콘들 파일 생성
    generate_filled_icons_web(src_dir)
    
    # 4. 유틸리티 파일 생성
    generate_utils_web(src_dir)
    
    print(f"✅ Web Icons 생성 완료: {len(ICON_NAMES) * 2}개 export const")
    return True

def generate_icon_cdn(project_root):
    """Icon CDN을 생성합니다."""
    
    src_dir = project_root / "packages" / "icon-cdn" / "src"
    
    print(f"📋 Icon CDN 생성 중... {len(ICON_NAMES)}개 아이콘")
    
    # 1. 메인 index.ts 파일 생성
    generate_main_index_cdn(src_dir)
    
    # 2. Regular 아이콘들 파일 생성
    generate_regular_icons_cdn(src_dir)
    
    # 3. Filled 아이콘들 파일 생성
    generate_filled_icons_cdn(src_dir)
    
    # 4. 유틸리티 파일 생성
    generate_utils_cdn(src_dir)
    
    print(f"✅ Icon CDN 생성 완료: {len(ICON_NAMES) * 2}개 export const")
    return True

def generate_react_native_icons(project_root):
    """React Native Icons를 생성합니다."""
    
    src_dir = project_root / "packages" / "react-native-icons" / "src"
    
    print(f"📋 React Native Icons 생성 중... {len(ICON_NAMES)}개 아이콘")
    
    # 1. 메인 index.tsx 파일 생성
    generate_main_index_rn(src_dir)
    
    # 2. Regular 아이콘들 파일 생성
    generate_regular_icons_rn(src_dir)
    
    # 3. Filled 아이콘들 파일 생성
    generate_filled_icons_rn(src_dir)
    
    # 4. 유틸리티 파일 생성
    generate_utils_rn(src_dir)
    
    print(f"✅ React Native Icons 생성 완료: {len(ICON_NAMES) * 2}개 export const")
    return True

# React Icons 생성 함수들
def generate_main_index(src_dir):
    """React Icons 메인 index.tsx 파일을 생성합니다."""
    
    content = [
        "import React from 'react';",
        "",
        "// === 모든 아이콘들을 import 및 export ===",
        "export * from './regular-icons';",
        "export * from './filled-icons';",
        "",
        "// === 유틸리티 함수들 import 및 export ===",
        "export { ",
        "  createIconComponent, ",
        "  getIconChar, ",
        "  getIconClass, ",
        "  getFontFamily ",
        "} from './utils';",
        "",
        "// === IconUtils export ===",
        "export { default as IconUtils } from './IconUtils';",
        "",
        "// === 타입 export ===",
        "export type { IconData } from './IconUtils';",
        "",
        "// === IconProps interface export ===",
        "export interface IconProps {",
        "  size?: number;",
        "  color?: string;",
        "  style?: 'regular' | 'filled';",
        "  className?: string;",
        "  onClick?: () => void;",
        "  [key: string]: any;",
        "}",
    ]
    
    with open(src_dir / "index.tsx", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_regular_icons(src_dir):
    """React Icons Regular 스타일 아이콘들을 생성합니다."""
    
    content = [
        "// === Regular 스타일 아이콘들 ===",
        "// 이 파일은 자동 생성됩니다. 수정하지 마세요.",
        "",
        "import { createIconComponent } from './utils';",
        "",
    ]
    
    # Regular 스타일 아이콘들
    for icon_name in ICON_NAMES:
        content.append(f"export const {icon_name.capitalize()} = createIconComponent('{icon_name.capitalize()}', 'regular');")
    
    with open(src_dir / "regular-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_filled_icons(src_dir):
    """React Icons Filled 스타일 아이콘들을 생성합니다."""
    
    content = [
        "// === Filled 스타일 아이콘들 ===",
        "// 이 파일은 자동 생성됩니다. 수정하지 마세요.",
        "",
        "import { createIconComponent } from './utils';",
        "",
    ]
    
    # Filled 스타일 아이콘들
    for icon_name in ICON_NAMES:
        content.append(f"export const {icon_name.capitalize()}Filled = createIconComponent('{icon_name.capitalize()}', 'filled');")
    
    with open(src_dir / "filled-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_utils(src_dir):
    """React Icons 유틸리티 파일을 생성합니다."""
    
    content = [
        "import React from 'react';",
        "import IconUtils from './IconUtils';",
        "",
        "export interface IconProps {",
        "  size?: number;",
        "  color?: string;",
        "  style?: 'regular' | 'filled';",
        "  className?: string;",
        "  onClick?: () => void;",
        "  [key: string]: any;",
        "}",
        "",
        "// === 아이콘 컴포넌트 생성 메서드 ===",
        "export const createIconComponent = (iconName: string, style: 'regular' | 'filled') => {",
        "  return (props: IconProps) => {",
        "    const iconChar = IconUtils.getIconChar(iconName, style, props.size || 24);",
        "    const fontFamily = IconUtils.getFontFamily(style);",
        "",
        "    if (!iconChar) return null;",
        "",
        "    const styleObj: React.CSSProperties = {",
        "      fontFamily,",
        "      fontSize: props.size || 24,",
        "      color: props.color || 'currentColor',",
        "      display: 'inline-block',",
        "      lineHeight: 1,",
        "      verticalAlign: 'middle',",
        "    };",
        "",
        "    if (props.style) {",
        "      Object.assign(styleObj, props.style);",
        "    }",
        "",
        "    return React.createElement('span', {",
        "      style: styleObj,",
        "      className: props.className,",
        "      onClick: props.onClick,",
        "    }, iconChar);",
        "  };",
        "};",
        "",
        "// === 유틸리티 함수들 ===",
        "export { default as IconUtils } from './IconUtils';",
        "",
        "export const getIconChar = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {",
        "  return IconUtils.getIconChar(iconName, style, size);",
        "};",
        "",
        "export const getIconClass = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {",
        "  return IconUtils.getIconClass(iconName, style, size);",
        "};",
        "",
        "export const getFontFamily = (style: 'regular' | 'filled' = 'regular') => {",
        "  return IconUtils.getFontFamily(style);",
        "};",
    ]
    
    with open(src_dir / "utils.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

# Web Icons 생성 함수들
def generate_main_index_web(src_dir):
    """Web Icons 메인 index.ts 파일을 생성합니다."""
    
    content = [
        "// === Web Icons Package ===",
        "// 이 파일은 자동 생성됩니다. 수정하지 마세요.",
        "",
        "import { createIconHTML } from './utils';",
        "",
        "// === 모든 아이콘들을 import 및 export ===",
        "export * from './regular-icons';",
        "export * from './filled-icons';",
        "",
        "// === 유틸리티 함수들 import 및 export ===",
        "export { ",
        "  getIconChar,",
        "  getIconClass,",
        "  getFontFamily,",
        "  createIconHTML,",
        "} from './utils';",
        "",
        "// === IconUtils export ===",
        "export { default as IconUtils } from './IconUtils';",
        "",
        "// === 타입 export ===",
        "export type { IconData } from './IconUtils';",
    ]
    
    with open(src_dir / "index.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_regular_icons_web(src_dir):
    """Web Icons Regular 스타일 아이콘들을 생성합니다."""
    
    content = [
        "// === Regular 스타일 아이콘들 ===",
        "// 이 파일은 자동 생성됩니다. 수정하지 마세요.",
        "",
        "import { createIconHTML } from './utils';",
        "",
    ]
    
    # Regular 스타일 아이콘들
    for icon_name in ICON_NAMES:
        content.append(f"export const {icon_name.capitalize()} = createIconHTML('{icon_name.capitalize()}', 'regular');")
    
    with open(src_dir / "regular-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_filled_icons_web(src_dir):
    """Web Icons Filled 스타일 아이콘들을 생성합니다."""
    
    content = [
        "// === Filled 스타일 아이콘들 ===",
        "// 이 파일은 자동 생성됩니다. 수정하지 마세요.",
        "",
        "import { createIconHTML } from './utils';",
        "",
    ]
    
    # Filled 스타일 아이콘들
    for icon_name in ICON_NAMES:
        content.append(f"export const {icon_name.capitalize()}Filled = createIconHTML('{icon_name.capitalize()}', 'filled');")
    
    with open(src_dir / "filled-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_utils_web(src_dir):
    """Web Icons 유틸리티 파일을 생성합니다."""
    
    content = [
        "import IconUtils from './IconUtils';",
        "",
        "// === 아이콘 HTML 생성 메서드 ===",
        "export const createIconHTML = (iconName: string, style: 'regular' | 'filled') => {",
        "  return (size: number = 24, color: string = 'currentColor', className: string = '') => {",
        "    const iconChar = IconUtils.getIconChar(iconName, style, size);",
        "    const fontFamily = IconUtils.getFontFamily(style);",
        "",
        "    if (!iconChar) return '';",
        "",
        "    return `<span style=\"font-family: '${fontFamily}'; font-size: ${size}px; color: ${color}; display: inline-block; line-height: 1; vertical-align: middle;\" class=\"${className}\">${iconChar}</span>`;",
        "  };",
        "};",
        "",
        "// === 유틸리티 함수들 ===",
        "export { default as IconUtils } from './IconUtils';",
        "",
        "export const getIconChar = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {",
        "  return IconUtils.getIconChar(iconName, style, size);",
        "};",
        "",
        "export const getIconClass = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {",
        "  return IconUtils.getIconClass(iconName, style, size);",
        "};",
        "",
        "export const getFontFamily = (style: 'regular' | 'filled' = 'regular') => {",
        "  return IconUtils.getFontFamily(style);",
        "};",
    ]
    
    with open(src_dir / "utils.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

# Icon CDN 생성 함수들
def generate_main_index_cdn(src_dir):
    """Icon CDN 메인 index.ts 파일을 생성합니다."""
    
    content = [
        "// === Icon CDN Package ===",
        "// 이 파일은 자동 생성됩니다. 수정하지 마세요.",
        "",
        "import { createIconHTML, getIconChar, getIconClass, getFontFamily, getCSSUrl, getFontUrl, getCDNBaseUrl } from './utils';",
        "",
        "// === 모든 아이콘들을 import 및 export ===",
        "export * from './regular-icons';",
        "export * from './filled-icons';",
        "",
        "// === 유틸리티 함수들 import 및 export ===",
        "export { ",
        "  getIconChar,",
        "  getIconClass,",
        "  getFontFamily,",
        "  createIconHTML,",
        "  getCSSUrl,",
        "  getFontUrl,",
        "  getCDNBaseUrl,",
        "} from './utils';",
        "",
        "// === IconUtils export ===",
        "export { default as IconUtils } from './IconUtils';",
        "",
        "// === 타입 export ===",
        "export type { IconData } from './IconUtils';",
    ]
    
    with open(src_dir / "index.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_regular_icons_cdn(src_dir):
    """Icon CDN Regular 스타일 아이콘들을 생성합니다."""
    
    content = [
        "// === Regular 스타일 아이콘들 ===",
        "// 이 파일은 자동 생성됩니다. 수정하지 마세요.",
        "",
        "import { createIconHTML } from './utils';",
        "",
    ]
    
    # Regular 스타일 아이콘들
    for icon_name in ICON_NAMES:
        content.append(f"export const {icon_name.capitalize()} = createIconHTML('{icon_name.capitalize()}', 'regular');")
    
    with open(src_dir / "regular-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_filled_icons_cdn(src_dir):
    """Icon CDN Filled 스타일 아이콘들을 생성합니다."""
    
    content = [
        "// === Filled 스타일 아이콘들 ===",
        "// 이 파일은 자동 생성됩니다. 수정하지 마세요.",
        "",
        "import { createIconHTML } from './utils';",
        "",
    ]
    
    # Filled 스타일 아이콘들
    for icon_name in ICON_NAMES:
        content.append(f"export const {icon_name.capitalize()}Filled = createIconHTML('{icon_name.capitalize()}', 'filled');")
    
    with open(src_dir / "filled-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_utils_cdn(src_dir):
    """Icon CDN 유틸리티 파일을 생성합니다."""
    
    content = [
        "import IconUtils from './IconUtils';",
        "",
        "// CDN 기본 URL",
        "const CDN_BASE_URL = 'https://jihoonahn.github.io/refineui-system-icons/cdn';",
        "",
        "// === 아이콘 HTML 생성 메서드 ===",
        "export const createIconHTML = (iconName: string, style: 'regular' | 'filled') => {",
        "  return (size: number = 24, color: string = 'currentColor', className: string = '') => {",
        "    const iconChar = IconUtils.getIconChar(iconName, style, size);",
        "    const fontFamily = IconUtils.getFontFamily(style);",
        "",
        "    if (!iconChar) return '';",
        "",
        "    return `<span style=\"font-family: '${fontFamily}'; font-size: ${size}px; color: ${color}; display: inline-block; line-height: 1; vertical-align: middle;\" class=\"${className}\">${iconChar}</span>`;",
        "  };",
        "};",
        "",
        "// === CDN 유틸리티 함수들 ===",
        "export const getCSSUrl = () => `${CDN_BASE_URL}/fonts/refineui-system-icons.css`;",
        "export const getFontUrl = (style: 'regular' | 'filled' = 'regular') => {",
        "  const fontFamily = IconUtils.getFontFamily(style);",
        "  return `${CDN_BASE_URL}/fonts/${fontFamily}.woff2`;",
        "};",
        "export const getCDNBaseUrl = () => CDN_BASE_URL;",
        "",
        "// === build.ts에서 필요한 함수들 ===",
        "export const mapIconName = (iconDir: string): string => {",
        "  // 폴더 이름을 아이콘 이름으로 변환",
        "  return iconDir.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();",
        "};",
        "",
        "export const generateSampleSVG = (iconName: string, size: number, style: string): string => {",
        "  return `<svg width=\"${size}\" height=\"${size}\" viewBox=\"0 0 ${size} ${size}\" xmlns=\"http://www.w3.org/2000/svg\">",
        "  <rect width=\"${size}\" height=\"${size}\" fill=\"${style === 'filled' ? '#000' : 'none'}\" stroke=\"#000\" stroke-width=\"1\"/>",
        "  <text x=\"${size/2}\" y=\"${size/2 + 4}\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"${size/3}\" fill=\"#000\">${iconName}</text>",
        "</svg>`;",
        "};",
        "",
        "// === cdn.ts에서 필요한 함수들 ===",
        "export const isValidIconSize = (size: number): boolean => {",
        "  return [16, 20, 24, 28, 32, 48].includes(size);",
        "};",
        "",
        "export const isValidIconStyle = (style: string): style is 'regular' | 'filled' => {",
        "  return style === 'regular' || style === 'filled';",
        "};",
        "",
        "export const generateIconFileName = (iconName: string, style: string): string => {",
        "  return `${iconName}-${style}.svg`;",
        "};",
        "",
        "// === 유틸리티 함수들 ===",
        "export { default as IconUtils } from './IconUtils';",
        "",
        "export const getIconChar = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {",
        "  return IconUtils.getIconChar(iconName, style, size);",
        "};",
        "",
        "export const getIconClass = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {",
        "  return IconUtils.getIconClass(iconName, style, size);",
        "};",
        "",
        "export const getFontFamily = (style: 'regular' | 'filled' = 'regular') => {",
        "  return IconUtils.getFontFamily(style);",
        "};",
    ]
    
    with open(src_dir / "utils.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

# React Native Icons 생성 함수들
def generate_main_index_rn(src_dir):
    """React Native Icons 메인 index.tsx 파일을 생성합니다."""
    
    content = [
        "import React from 'react';",
        "import { Text, TextProps } from 'react-native';",
        "",
        "// === 모든 아이콘들을 import 및 export ===",
        "export * from './regular-icons';",
        "export * from './filled-icons';",
        "",
        "// === 유틸리티 함수들 import 및 export ===",
        "export { ",
        "  createIconComponent, ",
        "  getIconChar, ",
        "  getIconClass, ",
        "  getFontFamily ",
        "} from './utils';",
        "",
        "// === IconUtils export ===",
        "export { default as IconUtils } from './IconUtils';",
        "",
        "// === 타입 export ===",
        "export type { IconData } from './IconUtils';",
        "",
        "// === IconProps interface export ===",
        "export interface IconProps extends TextProps {",
        "  size?: number;",
        "  color?: string;",
        "  style?: 'regular' | 'filled';",
        "  [key: string]: any;",
        "}",
    ]
    
    with open(src_dir / "index.tsx", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_regular_icons_rn(src_dir):
    """React Native Icons Regular 스타일 아이콘들을 생성합니다."""
    
    content = [
        "// === Regular 스타일 아이콘들 ===",
        "// 이 파일은 자동 생성됩니다. 수정하지 마세요.",
        "",
        "import { createIconComponent } from './utils';",
        "",
    ]
    
    # Regular 스타일 아이콘들
    for icon_name in ICON_NAMES:
        content.append(f"export const {icon_name.capitalize()} = createIconComponent('{icon_name.capitalize()}', 'regular');")
    
    with open(src_dir / "regular-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_filled_icons_rn(src_dir):
    """React Native Icons Filled 스타일 아이콘들을 생성합니다."""
    
    content = [
        "// === Filled 스타일 아이콘들 ===",
        "// 이 파일은 자동 생성됩니다. 수정하지 마세요.",
        "",
        "import { createIconComponent } from './utils';",
        "",
    ]
    
    # Filled 스타일 아이콘들
    for icon_name in ICON_NAMES:
        content.append(f"export const {icon_name.capitalize()}Filled = createIconComponent('{icon_name.capitalize()}', 'filled');")
    
    with open(src_dir / "filled-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_utils_rn(src_dir):
    """React Native Icons 유틸리티 파일을 생성합니다."""
    
    content = [
        "import React from 'react';",
        "import { Text, TextProps } from 'react-native';",
        "import IconUtils from './IconUtils';",
        "",
        "export interface IconProps extends TextProps {",
        "  size?: number;",
        "  color?: string;",
        "  style?: 'regular' | 'filled';",
        "  [key: string]: any;",
        "}",
        "",
        "// === 아이콘 컴포넌트 생성 메서드 ===",
        "export const createIconComponent = (iconName: string, style: 'regular' | 'filled') => {",
        "  return React.forwardRef<Text, IconProps>((props, ref) => {",
        "    const iconChar = IconUtils.getIconChar(iconName, style, props.size || 24);",
        "    const fontFamily = IconUtils.getFontFamily(style);",
        "",
        "    if (!iconChar) return null;",
        "",
        "    const styleObj = {",
        "      fontFamily,",
        "      fontSize: props.size || 24,",
        "      color: props.color || 'currentColor',",
        "      lineHeight: 1,",
        "    };",
        "",
        "    return React.createElement(Text, {",
        "      ref,",
        "      style: [styleObj, props.style],",
        "      ...props,",
        "    }, iconChar);",
        "  });",
        "};",
        "",
        "// === 유틸리티 함수들 ===",
        "export { default as IconUtils } from './IconUtils';",
        "",
        "export const getIconChar = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {",
        "  return IconUtils.getIconChar(iconName, style, size);",
        "};",
        "",
        "export const getIconClass = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {",
        "  return IconUtils.getIconClass(iconName, style, size);",
        "};",
        "",
        "export const getFontFamily = (style: 'regular' | 'filled' = 'regular') => {",
        "  return IconUtils.getFontFamily(style);",
        "};",
    ]
    
    with open(src_dir / "utils.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

if __name__ == "__main__":
    print("🚀 웹 아이콘 패키지 생성 시작...")
    print(f"📊 총 {len(ICON_NAMES)}개 아이콘 × 2스타일 = {len(ICON_NAMES) * 2}개 export const")
    
    # 웹 아이콘 패키지들 생성
    success = generate_web_icons()
    
    if success:
        print("🎉 웹 아이콘 패키지 생성 완료!")
        print(f"📊 총 {len(ICON_NAMES)}개 아이콘 × 2스타일 = {len(ICON_NAMES) * 2}개 아이콘")
    else:
        print("❌ 웹 아이콘 패키지 생성 실패!")
        sys.exit(1)
