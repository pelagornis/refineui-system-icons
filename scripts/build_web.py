#!/usr/bin/env python3
"""
Web Platform Builder
Build Web-specific packages (React + React Native + Web Version)
"""

import os
import json
import shutil
from pathlib import Path
from typing import Dict, List

class WebPlatformBuilder:
    """Web platform-specific builder"""
    
    def __init__(self):
        self.assets_dir = "assets"
        self.metadata_dir = "metadata"
        
        # Platform-specific naming rules
        self.naming_rules = {
            "web": "kebab-case",      # icon-name.svg
            "ios": "camelCase",       # iconName.svg
            "android": "snake_case",  # icon_name.svg
            "flutter": "snake_case"   # icon_name.svg
        }

    def slugify(self, name: str, platform: str = "web") -> str:
        """Convert icon name to slug according to platform-specific naming rules"""
        # Basic kebab-case conversion
        import re
        slug = re.sub(r'[^a-zA-Z0-9\s-]', '', name)
        slug = re.sub(r'\s+', '-', slug.lower())
        slug = re.sub(r'-+', '-', slug).strip('-')
        
        # Platform-specific conversion
        if platform == "ios":
            # Convert to camelCase
            parts = slug.split('-')
            return parts[0] + ''.join(word.capitalize() for word in parts[1:])
        elif platform in ["android", "flutter"]:
            # Convert to snake_case
            return slug.replace('-', '_')
        
        return slug

    def scan_assets(self) -> Dict:
        """Scan assets directory to collect icon information"""
        icons_data = {}
        
        if not os.path.exists(self.assets_dir):
            raise FileNotFoundError(f"Assets directory not found: {self.assets_dir}")
        
        for icon_folder in os.listdir(self.assets_dir):
            icon_path = os.path.join(self.assets_dir, icon_folder)
            if not os.path.isdir(icon_path):
                continue
            
            # Check metadata.json file
            metadata_file = os.path.join(icon_path, "metadata.json")
            if not os.path.exists(metadata_file):
                continue
            
            # Load metadata
            with open(metadata_file, 'r', encoding='utf-8') as f:
                icon_metadata = json.load(f)
            
            icons_data[icon_folder] = icon_metadata
        
        return icons_data

    def build_web_package(self, icons_data: Dict):
        """Build Web package - DEPRECATED: Now using font-based generation"""
        print("🌐 Web package generation is now handled by generate_react_icons_from_font.py")
        print("   Skipping individual file generation...")
        # Note: React icons are now generated using font-based approach
        # See: scripts/generate_react_icons_from_font.py
        print("✅ Web package generation skipped (using font-based approach)")

    def build_react_native_package(self, icons_data: Dict):
        """Build React Native package - DEPRECATED: Now using font-based generation"""
        print("📱 React Native package generation is now handled by generate_react_native_icons_from_font.py")
        print("   Skipping individual file generation...")
        # Note: React Native icons are now generated using font-based approach
        # See: scripts/generate_react_native_icons_from_font.py
        print("✅ React Native package generation skipped (using font-based approach)")

    def create_web_index(self, icons_data: Dict, output_dir: str):
        """Create Web index file"""
        index_content = "// Auto-generated index file\n\n"
        
        for icon_folder, icon_info in icons_data.items():
            icon_name = icon_info["name"]
            svg_dir = os.path.join(self.assets_dir, icon_folder, "svg")
            
            if not os.path.exists(svg_dir):
                continue
                
            # Scan SVG files
            for svg_file in os.listdir(svg_dir):
                if not svg_file.endswith('.svg'):
                    continue
                
                # Extract size and style from filename
                parts = svg_file.replace('.svg', '').split('_')
                if len(parts) >= 4:
                    size = int(parts[-2])
                    style = parts[-1]
                else:
                    continue
                
                component_name = self.slugify(icon_name, "ios").replace('-', '').title()
                component_name = f"{component_name}{size}{style.title()}"
                index_content += f"export {{ {component_name}Icon }} from './{component_name}Icon';\n"
        
        index_file = os.path.join(output_dir, "index.ts")
        with open(index_file, 'w', encoding='utf-8') as f:
            f.write(index_content)

    def create_react_native_index(self, icons_data: Dict, output_dir: str):
        """Create React Native index file"""
        index_content = "// Auto-generated index file\n\n"
        
        for icon_folder, icon_info in icons_data.items():
            icon_name = icon_info["name"]
            svg_dir = os.path.join(self.assets_dir, icon_folder, "svg")
            
            if not os.path.exists(svg_dir):
                continue
                
            # Scan SVG files
            for svg_file in os.listdir(svg_dir):
                if not svg_file.endswith('.svg'):
                    continue
                
                # Extract size and style from filename
                parts = svg_file.replace('.svg', '').split('_')
                if len(parts) >= 4:
                    size = int(parts[-2])
                    style = parts[-1]
                else:
                    continue
                
                component_name = self.slugify(icon_name, "ios").replace('-', '').title()
                component_name = f"{component_name}{size}{style.title()}"
                index_content += f"export {{ {component_name}Icon }} from './{component_name}Icon';\n"
        
        index_file = os.path.join(output_dir, "index.ts")
        with open(index_file, 'w', encoding='utf-8') as f:
            f.write(index_content)

    def build_web_platform(self):
        """Build Web platform packages"""
        print("🚀 Starting Web platform builds...")
        
        # Scan assets directory
        icons_data = self.scan_assets()
        
        if not icons_data:
            print("⚠️  No icons to process.")
            return False
        
        print(f"📁 Found {len(icons_data)} icon folders.")
        
        # Build Web packages
        self.build_web_package(icons_data)
        self.build_react_native_package(icons_data)
        
        print("🎉 Web platform builds completed!")
        return True

def main():
    """Main execution function"""
    try:
        builder = WebPlatformBuilder()
        success = builder.build_web_platform()
        return 0 if success else 1
    except Exception as e:
        print(f"❌ Build failed: {e}")
        return 1

if __name__ == "__main__":
    exit(main())
