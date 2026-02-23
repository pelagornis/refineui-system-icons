#!/usr/bin/env python3
"""
RefineUI System Icons - Web Icons Generator
Generates icons for React, Web, CDN, React Native packages.
"""

import json
import os
import re
import sys
from pathlib import Path

def to_export_name(icon_name: str) -> str:
    """Valid JS export name: 'local-language' or 'Local language' -> 'LocalLanguage'."""
    return "".join(w.capitalize() for w in re.split(r"[\s\-]+", icon_name) if w)


def to_display_name(icon_name: str) -> str:
    """Display name for createIconHTML (matches metadata key). From icon-mapping already correct."""
    return icon_name or ""


def load_icon_names(project_root: Path):
    """Load unique icon names from fonts/icon-mapping.json (matches metadata.icons keys)."""
    path = project_root / "fonts" / "icon-mapping.json"
    if not path.exists():
        return None
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    names = sorted(set(e.get("name") for e in (data.get("icons") or {}).values() if e.get("name")))
    return names if names else None


ICON_NAMES = []  # Filled in generate_web_icons() from icon-mapping.json

def generate_web_icons():
    """Generates web icons."""
    print("🌐 Web icon generation started...")
    
    project_root = Path(__file__).parent.parent
    global ICON_NAMES
    ICON_NAMES = load_icon_names(project_root)
    if not ICON_NAMES:
        print("❌ Could not load icon names from fonts/icon-mapping.json")
        return False
    
    # 1. Generate React Icons
    if not generate_react_icons(project_root):
        return False
    
    # 2. Generate Web Icons
    if not generate_web_icons_package(project_root):
        return False
    
    # 3. Generate CDN Icons
    if not generate_icon_cdn(project_root):
        return False
    
    # 4. Generate React Native Icons
    if not generate_react_native_icons(project_root):
        return False
    
    print("🎉 Web icon generation completed!")
    return True

def generate_react_icons(project_root):
    """Generates React Icons."""
    
    src_dir = project_root / "packages" / "react-icons" / "src"
    
    print(f"📋 Generating React Icons... {len(ICON_NAMES)} icons")
    
    # 1. Generate main index.tsx file
    generate_main_index(src_dir)
    
    # 2. Generate Regular icons file
    generate_regular_icons(src_dir)
    
    # 3. Generate Filled icons file
    generate_filled_icons(src_dir)
    
    # 4. Generate utility file
    generate_utils(src_dir)
    
    print(f"✅ React Icons generation completed: {len(ICON_NAMES) * 2} export const")
    return True

def generate_web_icons_package(project_root):
    """Generates Web Icons."""
    
    src_dir = project_root / "packages" / "web-icons" / "src"
    
    print(f"📋 Generating Web Icons... {len(ICON_NAMES)} icons")
    
    # 1. Generate main index.ts file
    generate_main_index_web(src_dir)
    
    # 2. Generate Regular icons file
    generate_regular_icons_web(src_dir)
    
    # 3. Generate Filled icons file
    generate_filled_icons_web(src_dir)
    
    # 4. Generate utility file
    generate_utils_web(src_dir)
    
    print(f"✅ Web Icons generation completed: {len(ICON_NAMES) * 2} export const")
    return True

def generate_icon_cdn(project_root):
    """Generates Icon CDN."""
    
    src_dir = project_root / "packages" / "icon-cdn" / "src"
    
    print(f"📋 Generating Icon CDN... {len(ICON_NAMES)} icons")
    
    # 1. Generate main index.ts file
    generate_main_index_cdn(src_dir)
    
    # 2. Generate Regular icons file
    generate_regular_icons_cdn(src_dir)
    
    # 3. Generate Filled icons file
    generate_filled_icons_cdn(src_dir)
    
    # 4. Generate utility file
    generate_utils_cdn(src_dir)
    
    print(f"✅ Icon CDN generation completed: {len(ICON_NAMES) * 2} export const")
    return True

def generate_react_native_icons(project_root):
    """Generates React Native Icons."""
    
    src_dir = project_root / "packages" / "react-native-icons" / "src"
    
    print(f"📋 Generating React Native Icons... {len(ICON_NAMES)} icons")
    
    # 1. Generate main index.tsx file
    generate_main_index_rn(src_dir)
    
    # 2. Generate Regular icons file
    generate_regular_icons_rn(src_dir)
    
    # 3. Generate Filled icons file
    generate_filled_icons_rn(src_dir)
    
    # 4. Generate utility file
    generate_utils_rn(src_dir)
    
    print(f"✅ React Native Icons generation completed: {len(ICON_NAMES) * 2} export const")
    return True

# React Icons generation functions
def generate_main_index(src_dir):
    """Generates React Icons main index.tsx file."""
    
    content = [
        "import React from 'react';",
        "",
        "// === Import and export all icons ===",
        "export * from './regular-icons';",
        "export * from './filled-icons';",
        "",
        "// === Import and export utility functions ===",
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
        "// === Type export ===",
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
    """Generates React Icons Regular style icons."""
    
    content = [
        "// === Regular style icons ===",
        "// This file is auto-generated. Do not modify.",
        "",
        "import { createIconComponent } from './utils';",
        "",
    ]
    
    # Regular style icons
    for icon_name in ICON_NAMES:
        content.append(f"export const {to_export_name(icon_name)} = createIconComponent('{to_display_name(icon_name)}', 'regular');")
    
    with open(src_dir / "regular-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_filled_icons(src_dir):
    """Generates React Icons Filled style icons."""
    
    content = [
        "// === Filled style icons ===",
        "// This file is auto-generated. Do not modify.",
        "",
        "import { createIconComponent } from './utils';",
        "",
    ]
    
    # Filled style icons
    for icon_name in ICON_NAMES:
        content.append(f"export const {to_export_name(icon_name)}Filled = createIconComponent('{to_display_name(icon_name)}', 'filled');")
    
    with open(src_dir / "filled-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_utils(src_dir):
    """Generates React Icons utility file."""
    
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
        "// === Icon component creation method ===",
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
        "// === Utility functions ===",
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

# Web Icons generation functions
def generate_main_index_web(src_dir):
    """Generates Web Icons main index.ts file."""
    
    content = [
        "// === Web Icons Package ===",
        "// This file is auto-generated. Do not modify.",
        "",
        "import { createIconHTML } from './utils';",
        "",
        "// === Import and export all icons ===",
        "export * from './regular-icons';",
        "export * from './filled-icons';",
        "",
        "// === Import and export utility functions ===",
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
        "// === Type export ===",
        "export type { IconData } from './IconUtils';",
    ]
    
    with open(src_dir / "index.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_regular_icons_web(src_dir):
    """Generates Web Icons Regular style icons."""
    
    content = [
        "// === Regular style icons ===",
        "// This file is auto-generated. Do not modify.",
        "",
        "import { createIconHTML } from './utils';",
        "",
    ]
    
    # Regular style icons (export name: PascalCase for names with spaces)
    for icon_name in ICON_NAMES:
        content.append(f"export const {to_export_name(icon_name)} = createIconHTML('{to_display_name(icon_name)}', 'regular');")
    
    with open(src_dir / "regular-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_filled_icons_web(src_dir):
    """Generates Web Icons Filled style icons."""
    
    content = [
        "// === Filled style icons ===",
        "// This file is auto-generated. Do not modify.",
        "",
        "import { createIconHTML } from './utils';",
        "",
    ]
    
    # Filled style icons
    for icon_name in ICON_NAMES:
        content.append(f"export const {to_export_name(icon_name)}Filled = createIconHTML('{to_display_name(icon_name)}', 'filled');")
    
    with open(src_dir / "filled-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_utils_web(src_dir):
    """Generates Web Icons utility file."""
    
    content = [
        "import IconUtils from './IconUtils';",
        "",
        "// === Icon HTML generation method ===",
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
        "// === Utility functions ===",
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

# Icon CDN generation functions
def generate_main_index_cdn(src_dir):
    """Generates Icon CDN main index.ts file."""
    
    content = [
        "// === Icon CDN Package ===",
        "// This file is auto-generated. Do not modify.",
        "",
        "// === Import and export all icons ===",
        "export * from './regular-icons';",
        "export * from './filled-icons';",
        "",
        "// === Import and export utility functions ===",
        "export { ",
        "  createIconURL,",
        "  getCDNBaseUrl,",
        "  getIconURL,",
        "  mapIconName,",
        "  generateSampleSVG,",
        "  isValidIconSize,",
        "  isValidIconStyle,",
        "  generateIconFileName,",
        "} from './utils';",
        "",
        "// === IconUtils export ===",
        "export { default as IconUtils } from './IconUtils';",
        "",
        "// === Type export ===",
        "export type { IconData } from './IconUtils';",
    ]
    
    with open(src_dir / "index.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_regular_icons_cdn(src_dir):
    """Generates Icon CDN Regular style icons."""
    
    content = [
        "// === Regular style icons ===",
        "// This file is auto-generated. Do not modify.",
        "",
        "import { createIconURL } from './utils';",
        "",
    ]
    
    # Regular style icons
    for icon_name in ICON_NAMES:
        content.append(f"export const {to_export_name(icon_name)}Regular = createIconURL('{icon_name.lower().replace(chr(32), '-')}', 24, 'regular');")
    
    with open(src_dir / "regular-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_filled_icons_cdn(src_dir):
    """Generates Icon CDN Filled style icons."""
    
    content = [
        "// === Filled style icons ===",
        "// This file is auto-generated. Do not modify.",
        "",
        "import { createIconURL } from './utils';",
        "",
    ]
    
    # Filled style icons
    for icon_name in ICON_NAMES:
        content.append(f"export const {to_export_name(icon_name)}Filled = createIconURL('{icon_name.lower().replace(chr(32), '-')}', 24, 'filled');")
    
    with open(src_dir / "filled-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_utils_cdn(src_dir):
    """Generates Icon CDN utility file."""
    
    print(f"🔧 Generating CDN utils.ts at {src_dir / 'utils.ts'}")
    
    content = [
        "// CDN package utilities for SVG icon URLs",
        "",
        "// CDN base URL",
        "const CDN_BASE_URL = 'https://jihoonahn.github.io/refineui-system-icons/cdn';",
        "",
        "// === SVG URL generation method ===",
        "export const createIconURL = (iconName: string, size: number = 24, style: 'regular' | 'filled' = 'regular') => {",
        "  return `${CDN_BASE_URL}/icons/${size}/${iconName}-${style}.svg`;",
        "};",
        "",
        "// === CDN utility functions ===",
        "export const getCDNBaseUrl = () => CDN_BASE_URL;",
        "",
        "// === Functions needed for build.ts ===",
        "export const mapIconName = (iconDir: string): string => {",
        "  // Convert folder name to icon name using the mapping from constants",
        "  const { ICON_NAME_MAPPING } = require('./constants');",
        "  return ICON_NAME_MAPPING[iconDir] || iconDir.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();",
        "};",
        "",
        "export const generateSampleSVG = (iconName: string, size: number, style: string): string => {",
        "  return `<svg width=\"${size}\" height=\"${size}\" viewBox=\"0 0 ${size} ${size}\" xmlns=\"http://www.w3.org/2000/svg\">",
        "  <rect width=\"${size}\" height=\"${size}\" fill=\"${style === 'filled' ? '#000' : 'none'}\" stroke=\"#000\" stroke-width=\"1\"/>",
        "  <text x=\"${size/2}\" y=\"${size/2 + 4}\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"${size/3}\" fill=\"#000\">${iconName}</text>",
        "</svg>`;",
        "};",
        "",
        "// === Functions needed for cdn.ts ===",
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
        "// === Utility functions ===",
        "export const getIconURL = (iconName: string, size: number = 24, style: 'regular' | 'filled' = 'regular') => {",
        "  return createIconURL(iconName, size, style);",
        "};",
    ]
    
    with open(src_dir / "utils.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))
    
    print(f"✅ CDN utils.ts generated successfully with createIconURL export")

# React Native Icons generation functions
def generate_main_index_rn(src_dir):
    """Generates React Native Icons main index.tsx file."""
    
    content = [
        "import React from 'react';",
        "import { Text, TextProps } from 'react-native';",
        "",
        "// === Import and export all icons ===",
        "export * from './regular-icons';",
        "export * from './filled-icons';",
        "",
        "// === Import and export utility functions ===",
        "export { ",
        "  createIconComponent, ",
        "  getIconChar, ",
        "  getIconClass, ",
        "  getFontFamily ",
        "} from './utils';",
        "",
        "// === Type export ===",
        "export type { IconProps } from './utils';",
        "",
        "// === IconUtils export ===",
        "export { default as IconUtils } from './IconUtils';",
        "",
        "// === Type export ===",
        "export type { IconData } from './IconUtils';",
    ]
    
    with open(src_dir / "index.tsx", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_regular_icons_rn(src_dir):
    """Generates React Native Icons Regular style icons."""
    
    content = [
        "// === Regular style icons ===",
        "// This file is auto-generated. Do not modify.",
        "",
        "import { createIconComponent } from './utils';",
        "",
    ]
    
    # Regular style icons
    for icon_name in ICON_NAMES:
        content.append(f"export const {to_export_name(icon_name)} = createIconComponent('{to_display_name(icon_name)}', 'regular');")
    
    with open(src_dir / "regular-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_filled_icons_rn(src_dir):
    """Generates React Native Icons Filled style icons."""
    
    content = [
        "// === Filled style icons ===",
        "// This file is auto-generated. Do not modify.",
        "",
        "import { createIconComponent } from './utils';",
        "",
    ]
    
    # Filled style icons
    for icon_name in ICON_NAMES:
        content.append(f"export const {to_export_name(icon_name)}Filled = createIconComponent('{to_display_name(icon_name)}', 'filled');")
    
    with open(src_dir / "filled-icons.ts", 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))

def generate_utils_rn(src_dir):
    """Generates React Native Icons utility file."""
    
    content = [
        "import React from 'react';",
        "import { Text, TextProps } from 'react-native';",
        "import IconUtils from './IconUtils';",
        "",
        "export interface IconProps extends TextProps {",
        "  size?: number;",
        "  color?: string;",
        "  iconStyle?: 'regular' | 'filled';",
        "  [key: string]: any;",
        "}",
        "",
        "// === Icon component creation method ===",
        "export const createIconComponent = (iconName: string, style: 'regular' | 'filled') => {",
        "  return (props: IconProps) => {",
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
        "    return React.createElement(Text as any, {",
        "      style: [styleObj, props.style],",
        "      ...props,",
        "    }, iconChar);",
        "  };",
        "};",
        "",
        "// === Utility functions ===",
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
    print("🚀 Web icon package generation started...")
    success = generate_web_icons()
    
    if success:
        print("🎉 Web icon package generation completed!")
        print(f"📊 Total {len(ICON_NAMES)} icons × 2 styles = {len(ICON_NAMES) * 2} icons")
    else:
        print("❌ Web icon package generation failed!")
        sys.exit(1)
