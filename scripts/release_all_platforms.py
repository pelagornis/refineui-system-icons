#!/usr/bin/env python3
"""
RefineUI System Icons - All Platforms Release Script
Build and release icons for all platforms
"""

import os
import sys
import json
import subprocess
import shutil
from datetime import datetime
from pathlib import Path

# Project root directory
ROOT_DIR = Path(__file__).parent.parent
BUILD_DIR = ROOT_DIR / "build"
RELEASE_DIR = ROOT_DIR / "release"

def run_command(command, cwd=None):
    """Execute command and return result."""
    try:
        result = subprocess.run(
            command,
            shell=True,
            cwd=cwd or ROOT_DIR,
            capture_output=True,
            text=True,
            check=True
        )
        print(f"✅ {command}")
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"❌ {command} failed: {e}")
        print(f"Error output: {e.stderr}")
        return None

def clean_directories():
    """Clean build and release directories."""
    print("🧹 Cleaning build and release directories...")
    
    for dir_path in [BUILD_DIR, RELEASE_DIR]:
        if dir_path.exists():
            shutil.rmtree(dir_path)
        dir_path.mkdir(exist_ok=True)
        print(f"✅ {dir_path} cleaned")

def install_dependencies():
    """Install required dependencies."""
    print("📦 Installing dependencies...")
    
    # Install Python dependencies
    if Path("requirements.txt").exists():
        run_command("pip install -r requirements.txt")
    
    # Install Node.js dependencies
    if Path("package.json").exists():
        run_command("npm install")
    
    print("✅ Dependencies installed")

def build_all_platforms():
    """Build icons for all platforms."""
    print("🔨 Building all platforms...")
    
    # Generate metadata
    print("📋 Generating metadata...")
    run_command("npm run generate:metadata")
    
    # Generate web icons
    print("🌐 Generating web icons...")
    run_command("npm run generate:web-icons")
    
    # Generate Android XML
    print("🤖 Generating Android XML...")
    run_command("npm run generate:android")
    
    # Generate iOS Swift
    print("🍎 Generating iOS Swift...")
    run_command("npm run generate:ios")
    
    # Generate Flutter Dart
    print("🦋 Generating Flutter Dart...")
    run_command("npm run generate:flutter")
    
    # Generate fonts
    print("🔤 Generating fonts...")
    run_command("npm run generate:fonts")
    run_command("npm run build:fonts")
    
    # Build all platforms
    print("🚀 Building all platforms...")
    run_command("npm run build:all")
    
    print("✅ All platforms built successfully")

def create_release_packages():
    """Create release packages."""
    print("📦 Creating release packages...")
    
    # Copy built files to release directory
    if BUILD_DIR.exists():
        for item in BUILD_DIR.iterdir():
            if item.is_dir():
                shutil.copytree(item, RELEASE_DIR / item.name)
            else:
                shutil.copy2(item, RELEASE_DIR)
    
    # Create platform-specific packages
    platforms = {
        "web": ["web", "fonts"],
        "android": ["android"],
        "ios": ["ios"],
        "flutter": ["flutter"],
        "all": ["web", "fonts", "android", "ios", "flutter"]
    }
    
    for platform, dirs in platforms.items():
        platform_dir = RELEASE_DIR / f"refineui-icons-{platform}"
        platform_dir.mkdir(exist_ok=True)
        
        for dir_name in dirs:
            source_dir = RELEASE_DIR / dir_name
            if source_dir.exists():
                shutil.copytree(source_dir, platform_dir / dir_name)
        
        # Create README file
        readme_content = f"""# RefineUI System Icons - {platform.upper()}

This package contains RefineUI System Icons files for {platform} platform.

## Included Files
{chr(10).join(f"- {dir_name}/" for dir_name in dirs)}

## Installation and Usage
For detailed information, see the main README.md.

## License
MIT License
"""
        
        with open(platform_dir / "README.md", "w", encoding="utf-8") as f:
            f.write(readme_content)
        
        # Create ZIP file
        shutil.make_archive(str(platform_dir), 'zip', platform_dir.parent, platform_dir.name)
        print(f"✅ {platform} package created")

def create_release_manifest():
    """Create release manifest file."""
    print("📝 Creating release manifest...")
    
    manifest = {
        "version": "1.0.0",
        "release_date": datetime.now().isoformat(),
        "platforms": {
            "web": {
                "description": "Web SVG icons and CSS",
                "files": ["web/", "fonts/"]
            },
            "android": {
                "description": "Android XML drawables",
                "files": ["android/"]
            },
            "ios": {
                "description": "iOS Swift code",
                "files": ["ios/"]
            },
            "flutter": {
                "description": "Flutter Dart code",
                "files": ["flutter/"]
            }
        },
        "build_info": {
            "node_version": run_command("node --version") or "unknown",
            "python_version": run_command("python3 --version") or "unknown",
            "npm_version": run_command("npm --version") or "unknown"
        }
    }
    
    manifest_path = RELEASE_DIR / "release-manifest.json"
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
    
    print("✅ Release manifest created")

def main():
    """Main execution function"""
    print("🚀 RefineUI System Icons - All Platforms Release Started")
    print("=" * 60)
    
    try:
        # 1. Clean directories
        clean_directories()
        
        # 2. Install dependencies
        install_dependencies()
        
        # 3. Build all platforms
        build_all_platforms()
        
        # 4. Create release packages
        create_release_packages()
        
        # 5. Create release manifest
        create_release_manifest()
        
        print("=" * 60)
        print("🎉 All platforms release completed!")
        print(f"📁 Release files location: {RELEASE_DIR}")
        
        # List generated files
        print("\n📋 Generated release files:")
        for item in RELEASE_DIR.iterdir():
            if item.is_file():
                size = item.stat().st_size / 1024  # KB
                print(f"  📄 {item.name} ({size:.1f} KB)")
            else:
                print(f"  📁 {item.name}/")
        
    except Exception as e:
        print(f"❌ Release failed: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
