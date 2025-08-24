#!/usr/bin/env python3
"""
Build All Platforms
Build all platform-specific packages
"""

import os
import sys
import subprocess
from pathlib import Path

def run_script(script_name: str) -> bool:
    """Run platform-specific script"""
    script_path = Path(__file__).parent / script_name
    print(f"\n🚀 Running {script_name}...")
    
    try:
        result = subprocess.run([sys.executable, str(script_path)], 
                              capture_output=True, text=True, check=True)
        print(result.stdout)
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ {script_name} failed:")
        print(e.stderr)
        return False

def build_all_platforms():
    """Build all platform-specific packages"""
    print("🎯 Starting all platform builds...")
    
    # Check if assets directory exists
    assets_dir = "assets"
    if not os.path.exists(assets_dir):
        print("❌ Assets directory not found.")
        print("Please extract icons from Figma first:")
        print("python scripts/figma_icon_extractor.py --token YOUR_TOKEN --file-key YOUR_FILE_KEY")
        return False
    
    # Platform-specific builds
    platforms = [
        ("generate_react_icons_from_font.py", "React Icons (Font-based)"),
        ("generate_react_native_icons_from_font.py", "React Native Icons (Font-based)"),
        ("build_ios.py", "iOS"), 
        ("build_android.py", "Android"),
        ("build_flutter.py", "Flutter"),
        ("build_font.py", "Font")
    ]
    
    success_count = 0
    for script, platform in platforms:
        if run_script(script):
            print(f"✅ {platform} build completed")
            success_count += 1
        else:
            print(f"❌ {platform} build failed")
    
    print(f"\n🎉 Build summary: {success_count}/{len(platforms)} platforms successful")
    
    if success_count == len(platforms):
        print("\n📁 Generated files:")
        print("  - packages/react-icons/ (React web components)")
        print("  - packages/react-native-icons/ (React Native components)")
        print("  - packages/flutter/ (Flutter SVG files)")
        print("  - android/library/src/main/res/ (Android Vector Drawable)")
        print("  - ios/RefineIcons/ (iOS Asset Catalog)")
        print("  - fonts/ (Web fonts)")
        return True
    else:
        return False

if __name__ == "__main__":
    success = build_all_platforms()
    sys.exit(0 if success else 1)
