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
        
        # Create Android color resources (only the essential color file)
        self.create_android_color_resources(android_output)
        
        print("✅ Android package completed")

    def convert_svg_to_vector_drawable(self, svg_path: str, output_path: str):
        """Convert SVG to Android Vector Drawable"""
        import re
        
        with open(svg_path, 'r', encoding='utf-8') as f:
            svg_content = f.read()
        
        # Extract viewBox from SVG
        viewbox_match = re.search(r'viewBox="([^"]*)"', svg_content)
        if viewbox_match:
            viewbox = viewbox_match.group(1)
            # Parse viewBox (e.g., "0 0 16 16")
            parts = viewbox.split()
            if len(parts) >= 4:
                width = int(float(parts[2]))
                height = int(float(parts[3]))
            else:
                width = height = 24
        else:
            width = height = 24
        
        # Extract path data from SVG
        paths = []
        path_elements = re.findall(r'<path[^>]*/>', svg_content)
        for path_element in path_elements:
            # Extract path data
            d_match = re.search(r'd="([^"]*)"', path_element)
            if not d_match:
                continue
                
            path_data = d_match.group(1)
            cleaned_path = path_data.replace('\n', ' ').replace('\t', ' ')
            cleaned_path = re.sub(r'\s+', ' ', cleaned_path).strip()
            
            # Check for fill-rule="evenodd" or clip-rule="evenodd"
            has_evenodd = False
            if 'fill-rule="evenodd"' in path_element or 'clip-rule="evenodd"' in path_element:
                has_evenodd = True
            
            paths.append((cleaned_path, has_evenodd))
        
        # Generate Android Vector Drawable
        vector_drawable = f'''<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="{width}dp"
    android:height="{height}dp"
    android:viewportWidth="{width}"
    android:viewportHeight="{height}">
'''
        
        # Add path elements
        for path_data, has_evenodd in paths:
            # Use different colors based on size
            fill_type = 'android:fillType="evenOdd"' if has_evenodd else ''
            if width == 16:
                vector_drawable += f'    <path android:pathData="{path_data}" android:fillColor="@color/refineui_default_tint" {fill_type}/>\n'
            elif width == 20:
                vector_drawable += f'    <path android:pathData="{path_data}" android:fillColor="@color/refineui_default_tint" {fill_type}/>\n'
            elif width == 24:
                vector_drawable += f'    <path android:pathData="{path_data}" android:fillColor="@color/refineui_default_tint" {fill_type}/>\n'
            elif width == 28:
                vector_drawable += f'    <path android:pathData="{path_data}" android:fillColor="@color/refineui_default_tint" {fill_type}/>\n'
            elif width == 32:
                vector_drawable += f'    <path android:pathData="{path_data}" android:fillColor="@color/refineui_default_tint" {fill_type}/>\n'
            elif width == 48:
                vector_drawable += f'    <path android:pathData="{path_data}" android:fillColor="@color/refineui_default_tint" {fill_type}/>\n'
            else:
                vector_drawable += f'    <path android:pathData="{path_data}" android:fillColor="@color/refineui_default_tint" {fill_type}/>\n'
        
        vector_drawable += '</vector>'
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(vector_drawable)

    def create_android_color_resources(self, output_dir: str):
        """Create essential Android color resources"""
        # Create color/refineui_default_tint.xml (essential for icon colors)
        color_content = '''<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:color="#212121"/>
</selector>'''
        
        color_file = os.path.join(output_dir, "color/refineui_default_tint.xml")
        os.makedirs(os.path.dirname(color_file), exist_ok=True)
        with open(color_file, 'w', encoding='utf-8') as f:
            f.write(color_content)



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
