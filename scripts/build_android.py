#!/usr/bin/env python3
"""
Android Platform Builder
Build Android-specific packages (Vector Drawable)
"""

import os
import json
import shutil
from pathlib import Path
from typing import Dict, List

class AndroidPlatformBuilder:
    """Android platform-specific builder"""
    
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
        
        # Android DPI mapping
        self.dpi_mapping = {
            16: "mdpi",
            20: "hdpi", 
            24: "xhdpi",
            32: "xxhdpi",
            48: "xxxhdpi"
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

    def build_android_package(self, icons_data: Dict):
        """Build Android package"""
        print("🤖 Building Android package...")
        
        android_output = "android/library/src/main/res"
        os.makedirs(android_output, exist_ok=True)
        
        # Create single drawable directory
        drawable_dir = os.path.join(android_output, "drawable")
        os.makedirs(drawable_dir, exist_ok=True)
        
        # Process all icons directly
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
                
                # Android filename (ic_refineui_iconName_size_theme format)
                android_filename = f"ic_refineui_{self.slugify(icon_name, 'android')}_{size}_{style}.xml"
                dest_path = os.path.join(drawable_dir, android_filename)
                
                # Convert SVG to Android Vector Drawable
                self.convert_svg_to_vector_drawable(source_path, dest_path)
        
        # Create Android resource files
        self.create_android_resources(icons_data, android_output)
        
        # Copy resources to app
        self.copy_resources_to_app(android_output)
        print("✅ Android package completed")

    def convert_svg_to_vector_drawable(self, svg_path: str, output_path: str):
        """Convert SVG to Android Vector Drawable"""
        with open(svg_path, 'r', encoding='utf-8') as f:
            svg_content = f.read()
        
        # Simple conversion (more sophisticated parsing needed in practice)
        vector_drawable = f'''<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="24"
    android:viewportHeight="24">
    
    <!-- Convert SVG content here -->
    <path android:fillColor="#000000" android:pathData="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2z"/>
    
</vector>'''
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(vector_drawable)

    def create_android_resources(self, icons_data: Dict, output_dir: str):
        """Create Android resource files"""
        # Create strings.xml
        strings_content = '''<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- Icon names -->
'''
        
        for icon_folder, icon_info in icons_data.items():
            icon_name = icon_info["name"]
            strings_content += f'    <string name="icon_{self.slugify(icon_name, "android")}">{icon_name}</string>\n'
        
        strings_content += '</resources>'
        
        strings_file = os.path.join(output_dir, "values/strings.xml")
        os.makedirs(os.path.dirname(strings_file), exist_ok=True)
        with open(strings_file, 'w', encoding='utf-8') as f:
            f.write(strings_content)

    def copy_resources_to_app(self, library_output: str):
        """Copy resources to Android app"""
        print("📱 Copying resources to Android app...")
        
        app_output = "android/app/src/main/res"
        os.makedirs(app_output, exist_ok=True)
        
        # Copy drawable resources
        library_drawable = os.path.join(library_output, "drawable")
        app_drawable = os.path.join(app_output, "drawable")
        if os.path.exists(library_drawable):
            os.makedirs(app_drawable, exist_ok=True)
            for file in os.listdir(library_drawable):
                source = os.path.join(library_drawable, file)
                dest = os.path.join(app_drawable, file)
                shutil.copy2(source, dest)
        
        # Copy values resources
        library_values = os.path.join(library_output, "values")
        app_values = os.path.join(app_output, "values")
        if os.path.exists(library_values):
            os.makedirs(app_values, exist_ok=True)
            for file in os.listdir(library_values):
                source = os.path.join(library_values, file)
                dest = os.path.join(app_values, file)
                shutil.copy2(source, dest)
        
        # Copy raw resources
        library_raw = os.path.join(library_output, "raw")
        app_raw = os.path.join(app_output, "raw")
        if os.path.exists(library_raw):
            os.makedirs(app_raw, exist_ok=True)
            for file in os.listdir(library_raw):
                source = os.path.join(library_raw, file)
                dest = os.path.join(app_raw, file)
                shutil.copy2(source, dest)
        
        print("✅ Resources copied to Android app")

    def build_android_platform(self):
        """Build Android platform packages"""
        print("🚀 Starting Android platform builds...")
        
        # Scan assets directory
        icons_data = self.scan_assets()
        
        if not icons_data:
            print("⚠️  No icons to process.")
            return False
        
        print(f"📁 Found {len(icons_data)} icon folders.")
        
        # Build Android package
        self.build_android_package(icons_data)
        
        print("🎉 Android platform builds completed!")
        return True

def main():
    """Main execution function"""
    try:
        builder = AndroidPlatformBuilder()
        success = builder.build_android_platform()
        return 0 if success else 1
    except Exception as e:
        print(f"❌ Build failed: {e}")
        return 1

if __name__ == "__main__":
    exit(main())
