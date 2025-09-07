#!/usr/bin/env python3
"""
RefineUI System Icons - iOS Swift Generator
Generates iOS Swift files in RefineUI style.
"""

import os
import sys
import json
from pathlib import Path

def generate_ios_swift():
    """Generates iOS Swift files."""
    print("🍎 iOS Swift generation started...")
    
    project_root = Path(__file__).parent.parent
    ios_dir = project_root / "ios"
    
    if not ios_dir.exists():
        print(f"❌ iOS directory not found: {ios_dir}")
        return False
    
    # Get all available icon assets
    assets_dir = ios_dir / "Resources" / "Assets.xcassets"
    if not assets_dir.exists():
        print(f"❌ Assets directory not found: {assets_dir}")
        return False
    
    # Extract icon names from assets
    icon_cases = []
    for imageset_dir in assets_dir.iterdir():
        if imageset_dir.is_dir() and imageset_dir.name.endswith('.imageset'):
            icon_name = imageset_dir.name.replace('ic_refineui_', '').replace('.imageset', '')
            icon_cases.append(icon_name)
    
    # Sort icon cases
    icon_cases.sort()
    
    # Use existing Sources directory
    sources_dir = ios_dir / "Sources"
    if not sources_dir.exists():
        sources_dir.mkdir(parents=True, exist_ok=True)
    
    # 1. Generate RefineIcons.swift file
    generate_refine_icons_swift(sources_dir, icon_cases)
    
    # 2. Generate RefineIcons+Extensions.swift file
    generate_extensions_swift(sources_dir)
    
    # 3. Generate Package.swift file
    generate_package_swift(ios_dir)
    
    print("✅ iOS Swift generation completed!")
    return True

def generate_refine_icons_swift(sources_dir: Path, icon_cases: list):
    """Generates RefineIcons.swift file in RefineUI style."""
    
    swift_content = """import Foundation

/// RefineUI System Icons
@objc public enum RefineUIIcons: Int, Equatable, CaseIterable {
"""
    
    # Add cases for each icon
    for i, icon_case in enumerate(icon_cases):
        # Convert to camelCase for enum case name
        case_name = convert_to_camel_case(icon_case)
        swift_content += f"    case {case_name} = {i}\n"
    
    swift_content += """
    public var resourceString: String {
        switch self {
"""
    
    # Add resource string for each icon
    for icon_case in icon_cases:
        case_name = convert_to_camel_case(icon_case)
        resource_name = f"ic_refineui_{icon_case}"
        swift_content += f'        case .{case_name}: return "{resource_name}"\n'
    
    swift_content += """        }
    }
}
"""
    
    # Write to file
    swift_file = sources_dir / "RefineUIIcons.swift"
    with open(swift_file, 'w', encoding='utf-8') as f:
        f.write(swift_content)
    
    print("✅ RefineUIIcons.swift generation completed")

def convert_to_camel_case(icon_case: str) -> str:
    """Convert icon case name to camelCase."""
    parts = icon_case.split('_')
    if len(parts) < 2:
        return parts[0]
    
    # First part is lowercase, rest are capitalized
    result = parts[0]
    for part in parts[1:]:
        result += part.capitalize()
    
    return result

def generate_extensions_swift(sources_dir: Path):
    """Generates RefineIcons+Extensions.swift file."""
    
    swift_content = """import SwiftUI

// MARK: - Bundle Helper
extension Bundle {
    /// The bundle for RefineUIIcons resources
    static var refineUIIcons: Bundle {
        #if SWIFT_PACKAGE
        return Bundle.module
        #else
        return Bundle(for: RefineUIIcons.self)
        #endif
    }
}

// MARK: - SwiftUI Extensions
extension Image {
    /// Create an image from RefineUI icon
    /// - Parameter icon: The icon to display
    /// - Returns: SwiftUI Image
    public init(refineIcon icon: RefineUIIcons) {
        self.init(icon.resourceString, bundle: Bundle.refineUIIcons)
    }
}

// MARK: - UIKit Extensions
#if canImport(UIKit)
import UIKit

extension UIImage {
    /// Create an image from RefineUI icon
    /// - Parameter icon: The icon to display
    /// - Returns: UIImage
    public convenience init?(refineIcon icon: RefineUIIcons) {
        self.init(named: icon.resourceString, in: Bundle.refineUIIcons, compatibleWith: nil)
    }
}
#endif
"""
    
    # Write to file
    extensions_file = sources_dir / "RefineUIIcons+Extensions.swift"
    with open(extensions_file, 'w', encoding='utf-8') as f:
        f.write(swift_content)
    
    print("✅ RefineUIIcons+Extensions.swift generation completed")

def generate_package_swift(ios_dir: Path):
    """Generates Package.swift file."""
    
    package_content = """// swift-tools-version: 5.7
import PackageDescription

let package = Package(
    name: "RefineUIIcons",
    platforms: [
        .iOS(.v13),
        .macOS(.v10_15)
    ],
    products: [
        .library(
            name: "RefineUIIcons",
            targets: ["RefineUIIcons"]
        )
    ],
    targets: [
        .target(
            name: "RefineUIIcons",
            path: "Sources",
            resources: [
                .process("Resources")
            ]
        )
    ]
)
"""
    
    # Write to file
    package_file = ios_dir / "Package.swift"
    with open(package_file, 'w', encoding='utf-8') as f:
        f.write(package_content)
    
    print("✅ Package.swift generation completed")

if __name__ == "__main__":
    generate_ios_swift()