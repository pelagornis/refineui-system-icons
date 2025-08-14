#!/usr/bin/env python3
"""
Flutter Platform Builder
Build Flutter-specific packages
"""

import os
import json
import shutil
from pathlib import Path
from typing import Dict, List

class FlutterPlatformBuilder:
    """Flutter platform-specific builder"""
    
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

    def build_flutter_package(self, icons_data: Dict):
        """Build Flutter package"""
        print("🦋 Building Flutter package...")
        
        flutter_output = "packages/flutter"
        os.makedirs(flutter_output, exist_ok=True)
        
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
                
                source_path = os.path.join(svg_dir, svg_file)
                
                if not os.path.exists(source_path):
                    continue
                
                # Flutter filename (snake_case)
                flutter_filename = f"{self.slugify(icon_name, 'flutter')}_{size}_{style}.svg"
                dest_path = os.path.join(flutter_output, flutter_filename)
                
                # Copy SVG file
                shutil.copy2(source_path, dest_path)
        
        print("✅ Flutter package completed")

    def build_flutter_platform(self):
        """Build Flutter platform packages"""
        print("🚀 Starting Flutter platform builds...")
        
        # Scan assets directory
        icons_data = self.scan_assets()
        
        if not icons_data:
            print("⚠️  No icons to process.")
            return False
        
        print(f"📁 Found {len(icons_data)} icon folders.")
        
        # Build Flutter package
        self.build_flutter_package(icons_data)
        
        print("🎉 Flutter platform builds completed!")
        return True

def main():
    """Main execution function"""
    try:
        builder = FlutterPlatformBuilder()
        success = builder.build_flutter_platform()
        return 0 if success else 1
    except Exception as e:
        print(f"❌ Build failed: {e}")
        return 1

if __name__ == "__main__":
    exit(main())
