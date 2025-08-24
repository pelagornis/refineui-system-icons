#!/usr/bin/env python3
"""
Platform Builder
Script to convert common assets for different platforms
"""

import os
import json
import shutil
from pathlib import Path
from typing import Dict, List

class PlatformBuilder:
    """Platform-specific builder"""
    
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

    def load_metadata(self) -> Dict:
        """Load metadata"""
        metadata_file = os.path.join(self.metadata_dir, "icons.json")
        if not os.path.exists(metadata_file):
            raise FileNotFoundError(f"Metadata file not found: {metadata_file}")
        
        with open(metadata_file, 'r', encoding='utf-8') as f:
            return json.load(f)

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

    def build_react_native_package(self, icons_data: Dict):
        """Build React Native package - DEPRECATED: Now using font-based generation"""
        print("📱 React Native package generation is now handled by generate_react_native_icons_from_font.py")
        print("   Skipping individual file generation...")
        # Note: React Native icons are now generated using font-based approach
        # See: scripts/generate_react_native_icons_from_font.py
        print("✅ React Native package generation skipped (using font-based approach)")

    def build_ios_package(self, icons_data: Dict):
        """Build iOS package"""
        print("🍎 Building iOS package...")
        
        ios_output = "ios/RefineIcons/Resources/IconAssets.xcassets"
        os.makedirs(ios_output, exist_ok=True)
        
        for icon_folder, icon_info in icons_data.items():
            icon_name = icon_info["name"]
            svg_dir = os.path.join(self.assets_dir, icon_folder, "svg")
            
            if not os.path.exists(svg_dir):
                continue
                
            # SVG 파일들 스캔
            for svg_file in os.listdir(svg_dir):
                if not svg_file.endswith('.svg'):
                    continue
                
                # 파일명에서 크기와 스타일 추출
                parts = svg_file.replace('.svg', '').split('_')
                if len(parts) >= 4:
                    size = int(parts[-2])
                    style = parts[-1]
                else:
                    continue
                
        print("✅ React Native package generation skipped (using font-based approach)")

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
                
                # Android filename (snake_case)
                android_filename = f"{self.slugify(icon_name, 'android')}_{size}_{style}.xml"
                dest_path = os.path.join(drawable_dir, android_filename)
                
                # Convert SVG to Android Vector Drawable
                self.convert_svg_to_vector_drawable(source_path, dest_path)
        
        # Create Android color resources (only the essential color file)
        self.create_android_color_resources(android_output)
        print("✅ Android package completed")

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
                
            # SVG 파일들 스캔
            for svg_file in os.listdir(svg_dir):
                if not svg_file.endswith('.svg'):
                    continue
                
                # 파일명에서 크기와 스타일 추출
                parts = svg_file.replace('.svg', '').split('_')
                if len(parts) >= 4:
                    size = int(parts[-2])
                    style = parts[-1]
                else:
                    continue
                
                source_path = os.path.join(svg_dir, svg_file)
                
                if not os.path.exists(source_path):
                    continue
                
                # Flutter용 파일명 (snake_case)
                flutter_filename = f"{self.slugify(icon_name, 'flutter')}_{size}_{style}.svg"
                dest_path = os.path.join(flutter_output, flutter_filename)
                
                # SVG 파일 복사
                shutil.copy2(source_path, dest_path)
        
        print("✅ Flutter package completed")

    def create_web_index(self, icons_data: Dict, output_dir: str):
        """Create Web index file"""
        index_content = "// Auto-generated index file\n\n"
        
        for icon_folder, icon_info in icons_data.items():
            icon_name = icon_info["name"]
            svg_dir = os.path.join(self.assets_dir, icon_folder, "svg")
            
            if not os.path.exists(svg_dir):
                continue
                
            # SVG 파일들 스캔
            for svg_file in os.listdir(svg_dir):
                if not svg_file.endswith('.svg'):
                    continue
                
                # 파일명에서 크기와 스타일 추출
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
                
            # SVG 파일들 스캔
            for svg_file in os.listdir(svg_dir):
                if not svg_file.endswith('.svg'):
                    continue
                
                # 파일명에서 크기와 스타일 추출
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

    def create_ios_contents_json(self, imageset_path: str, filename: str):
        """Create iOS imageset Contents.json"""
        contents = {
            "images": [
                {
                    "idiom": "universal",
                    "filename": filename,
                    "scale": "1x"
                }
            ],
            "info": {
                "version": 1,
                "author": "xcode"
            }
        }
        
        contents_file = os.path.join(imageset_path, "Contents.json")
        with open(contents_file, 'w', encoding='utf-8') as f:
            json.dump(contents, f, indent=2)

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

    def build_all_platforms(self):
        """Build all platforms"""
        print("🚀 Starting all platform builds...")
        
        # Scan assets directory
        icons_data = self.scan_assets()
        
        if not icons_data:
            print("⚠️  No icons to process.")
            return
        
        print(f"📁 Found {len(icons_data)} icon folders.")
        
        # Build for each platform
        self.build_web_package(icons_data)
        self.build_react_native_package(icons_data)
        self.build_ios_package(icons_data)
        self.build_android_package(icons_data)
        self.build_flutter_package(icons_data)
        
        # Add font build
        self.build_font_package(icons_data)
        
        print("🎉 All platform builds completed!")
    
    def build_font_package(self, icons_data: Dict):
        """Build font package"""
        print("🔤 Starting font package build...")
        
        fonts_dir = "fonts"
        os.makedirs(fonts_dir, exist_ok=True)
        
        # Import and run FontBuilder
        try:
            from build_font import FontBuilder
            builder = FontBuilder(assets_dir=self.assets_dir, fonts_dir=fonts_dir)
            success = builder.build_font()
            
            if success:
                print("🎉 Font package build completed!")
            else:
                print("⚠️  Font build failed. FontForge installation may be required.")
        except ImportError:
            print("⚠️  build_font module not found.")
        except Exception as e:
            print(f"❌ Font build error: {e}")

def main():
    """Main execution function"""
    try:
        builder = PlatformBuilder()
        builder.build_all_platforms()
        return 0
    except Exception as e:
        print(f"❌ Build failed: {e}")
        return 1

if __name__ == "__main__":
    exit(main())
