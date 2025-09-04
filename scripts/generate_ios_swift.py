#!/usr/bin/env python3
"""
RefineUI System Icons - iOS Swift Generator
Generates iOS Swift files.
"""

import os
import sys
from pathlib import Path

def generate_ios_swift():
    """Generates iOS Swift files."""
    print("🍎 iOS Swift generation started...")
    
    project_root = Path(__file__).parent.parent
    ios_dir = project_root / "ios"
    
    if not ios_dir.exists():
        print(f"❌ iOS directory not found: {ios_dir}")
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
    
    # Create RefineIcons directory
    refine_icons_dir = ios_dir / "RefineIcons"
    refine_icons_dir.mkdir(parents=True, exist_ok=True)
    
    # Create Sources directory
    sources_dir = refine_icons_dir / "Sources"
    sources_dir.mkdir(parents=True, exist_ok=True)
    
    # 1. Generate RefineIcons.swift file
    generate_refine_icons_swift(sources_dir, ICON_NAMES)
    
    # 2. Generate RefineIcons+Extensions.swift file
    generate_extensions_swift(sources_dir, ICON_NAMES)
    
    # 3. Generate Package.swift file
    generate_package_swift(refine_icons_dir)
    
    print("✅ iOS Swift generation completed!")
    return True

def generate_refine_icons_swift(sources_dir: Path, icon_names: list):
    """Generates RefineIcons.swift file."""
    
    swift_content = """import Foundation

/// RefineUI System Icons
public enum RefineIcons {
"""
    
    # Add case for each icon
    for icon_name in icon_names:
        icon_name_camel = ''.join(word.capitalize() for word in icon_name.split('_'))
        swift_content += f"    case {icon_name_camel}\n"
    
    swift_content += """}

// MARK: - Icon Properties
extension RefineIcons {
    /// Icon's unicode character
    public var unicode: String {
        switch self {
"""
    
    # Add unicode value for each icon
    for i, icon_name in enumerate(icon_names):
        icon_name_camel = ''.join(word.capitalize() for word in icon_name.split('_'))
        unicode_value = f"\\uF{i:04d}"
        swift_content += f'        case .{icon_name_camel}: return "{unicode_value}"\n'
    
    swift_content += """        }
    }
    
    /// Icon's code point
    public var codePoint: Int {
        switch self {
"""
    
    # Add code point value for each icon
    for i, icon_name in enumerate(icon_names):
        icon_name_camel = ''.join(word.capitalize() for word in icon_name.split('_'))
        swift_content += f"        case .{icon_name_camel}: return {0xF0000 + i}\n"
    
    swift_content += """        }
    }
    
    /// Font family name
    public var fontFamily: String {
        return "RefineUI-System-Icons-Regular"
    }
}

// MARK: - Filled Icons
extension RefineIcons {
    /// Get filled version of the icon
    public var filled: RefineIconsFilled {
        switch self {
"""
    
    # Map each icon to its filled version
    for icon_name in icon_names:
        icon_name_camel = ''.join(word.capitalize() for word in icon_name.split('_'))
        swift_content += f"        case .{icon_name_camel}: return .{icon_name_camel}Filled\n"
    
    swift_content += """        }
    }
}

/// RefineUI System Icons - Filled Variants
public enum RefineIconsFilled {
"""
    
    # Add Filled icons
    for icon_name in icon_names:
        icon_name_camel = ''.join(word.capitalize() for word in icon_name.split('_'))
        swift_content += f"    case {icon_name_camel}Filled\n"
    
    swift_content += """}

// MARK: - Filled Icon Properties
extension RefineIconsFilled {
    /// Icon's unicode character
    public var unicode: String {
        switch self {
"""
    
    # Add unicode values for Filled icons
    for i, icon_name in enumerate(icon_names):
        icon_name_camel = ''.join(word.capitalize() for word in icon_name.split('_'))
        unicode_value = f"\\uF{i:04d}"
        swift_content += f'        case .{icon_name_camel}Filled: return "{unicode_value}"\n'
    
    swift_content += """        }
    }
    
    /// Icon's code point
    public var codePoint: Int {
        switch self {
"""
    
    # Add code point values for Filled icons
    for i, icon_name in enumerate(icon_names):
        icon_name_camel = ''.join(word.capitalize() for word in icon_name.split('_'))
        swift_content += f"        case .{icon_name_camel}Filled: return {0xF0000 + i}\n"
    
    swift_content += """        }
    }
    
    /// Font family name
    public var fontFamily: String {
        return "RefineUI-System-Icons-Filled"
    }
}
"""
    
    # Save file
    swift_file = sources_dir / "RefineIcons.swift"
    with open(swift_file, 'w', encoding='utf-8') as f:
        f.write(swift_content)
    
    print(f"✅ {swift_file.name} generation completed")

def generate_extensions_swift(sources_dir: Path, icon_names: list):
    """Generates RefineIcons+Extensions.swift file."""
    
    swift_content = """import SwiftUI

// MARK: - SwiftUI Extensions
extension Image {
    /// Create an image from RefineUI icon
    /// - Parameter icon: The icon to display
    /// - Returns: SwiftUI Image
    public init(refineIcon icon: RefineIcons) {
        self.init(systemName: icon.unicode)
    }
    
    /// Create an image from RefineUI filled icon
    /// - Parameter icon: The icon to display
    /// - Returns: SwiftUI Image
    public init(refineIconFilled icon: RefineIconsFilled) {
        self.init(systemName: icon.unicode)
    }
}

extension Text {
    /// Create text from RefineUI icon
    /// - Parameter icon: The icon to display
    /// - Returns: SwiftUI Text
    public init(refineIcon icon: RefineIcons) {
        self.init(icon.unicode)
    }
    
    /// Create text from RefineUI filled icon
    /// - Parameter icon: The icon to display
    /// - Returns: SwiftUI Text
    public init(refineIconFilled icon: RefineIconsFilled) {
        self.init(icon.unicode)
    }
}

// MARK: - UIKit Extensions
#if canImport(UIKit)
import UIKit

extension UIImage {
    /// Create an image from RefineUI icon
    /// - Parameter icon: The icon to display
    /// - Returns: UIImage
    public convenience init?(refineIcon icon: RefineIcons, size: CGSize = CGSize(width: 24, height: 24)) {
        let font = UIFont(name: icon.fontFamily, size: size.width) ?? UIFont.systemFont(ofSize: size.width)
        let attributes: [NSAttributedString.Key: Any] = [
            .font: font,
            .foregroundColor: UIColor.black
        ]
        
        let attributedString = NSAttributedString(string: icon.unicode, attributes: attributes)
        let textSize = attributedString.size()
        
        UIGraphicsBeginImageContextWithOptions(size, false, 0)
        defer { UIGraphicsEndImageContext() }
        
        let rect = CGRect(
            x: (size.width - textSize.width) / 2,
            y: (size.height - textSize.height) / 2,
            width: textSize.width,
            height: textSize.height
        )
        
        attributedString.draw(in: rect)
        
        guard let image = UIGraphicsGetImageFromCurrentImageContext() else { return nil }
        self.init(cgImage: image.cgImage!)
    }
}
#endif
"""
    
    # Save file
    extensions_file = sources_dir / "RefineIcons+Extensions.swift"
    with open(extensions_file, 'w', encoding='utf-8') as f:
        f.write(swift_content)
    
    print(f"✅ {extensions_file.name} generation completed")

def generate_package_swift(refine_icons_dir: Path):
    """Generates Package.swift file."""
    
    package_content = """// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "RefineIcons",
    platforms: [
        .iOS(.v13),
        .macOS(.v12)
    ],
    products: [
        .library(
            name: "RefineIcons",
            targets: ["RefineIcons"]
        )
    ],
    targets: [
        .target(
            name: "RefineIcons",
            resources: [
                .process("Resources")
            ]
        )
    ]
)
"""
    
    # Save file
    package_file = refine_icons_dir / "Package.swift"
    with open(package_file, 'w', encoding='utf-8') as f:
        f.write(package_content)
    
    print(f"✅ {package_file.name} generation completed")

if __name__ == "__main__":
    success = generate_ios_swift()
    sys.exit(0 if success else 1)
