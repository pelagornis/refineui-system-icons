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
import re
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

def update_versions(version):
    """Update version numbers across all platform files."""
    print(f"📝 Updating versions to {version}...")
    
    # Update root package.json
    if (ROOT_DIR / "package.json").exists():
        run_command(f"npm version {version} --no-git-tag-version")
    
    # Update individual package versions
    package_dirs = [
        "packages/react-icons",
        "packages/react-native-icons", 
        "packages/web-icons",
        "packages/icon-cdn"
    ]
    
    for package_dir in package_dirs:
        package_path = ROOT_DIR / package_dir
        if (package_path / "package.json").exists():
            run_command(f"npm version {version} --no-git-tag-version", cwd=package_path)
    
    # Update iOS Podspec (if exists)
    podspec_path = ROOT_DIR / "RefineUIIcons.podspec"
    if podspec_path.exists():
        content = podspec_path.read_text()
        content = re.sub(r"s\.version\s*=\s*['\"][^'\"]*['\"]", f's.version = \'{version}\'', content)
        podspec_path.write_text(content)
    else:
        print(f"ℹ️  Podspec file not found: {podspec_path} (using Swift Package Manager)")
    
    # Update iOS Package.swift
    package_swift_path = ROOT_DIR / "Package.swift"
    if package_swift_path.exists():
        content = package_swift_path.read_text()
        content = re.sub(r'version:\s*["\'][^"\']*["\']', f'version: "{version}"', content)
        package_swift_path.write_text(content)
    
    # Update Flutter pubspec.yaml
    pubspec_path = ROOT_DIR / "flutter" / "pubspec.yaml"
    if pubspec_path.exists():
        content = pubspec_path.read_text()
        content = re.sub(r'version:\s*[^\n]*', f'version: {version}', content)
        pubspec_path.write_text(content)
    
    # Update Android build.gradle.kts
    gradle_path = ROOT_DIR / "android" / "library" / "build.gradle.kts"
    if gradle_path.exists():
        content = gradle_path.read_text()
        content = re.sub(r'versionName\s*=\s*["\'][^"\']*["\']', f'versionName = "{version}"', content)
        gradle_path.write_text(content)
    
    print(f"✅ All versions updated to {version}")

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
    
    # Generate fonts (TTF from SVGs + icon-mapping, then WOFF2/WOFF + CSS, then copy to packages)
    print("🔤 Generating fonts...")
    run_command("npm run generate:ttf")
    run_command("npm run build:fonts")
    run_command("npm run copy:fonts")
    
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
    
    print("✅ Release packages created")

def create_release_manifest():
    """Create release manifest file."""
    print("📝 Creating release manifest...")
    
    # Get current version from package.json
    package_json_path = ROOT_DIR / "package.json"
    if package_json_path.exists():
        with open(package_json_path, "r", encoding="utf-8") as f:
            package_data = json.load(f)
            current_version = package_data.get("version", "0.1.2")
    else:
        current_version = "0.1.2"
    
    manifest = {
        "version": current_version,
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
    
    # Get version from command line argument or default
    version = "1.0.0"
    if len(sys.argv) > 1:
        version = sys.argv[1]
    
    try:
        # 1. Clean directories
        clean_directories()
        
        # 2. Update versions
        update_versions(version)
        
        # 3. Install dependencies
        install_dependencies()
        
        # 4. Build all platforms
        build_all_platforms()
        
        # 5. Create release packages
        create_release_packages()
        
        # 6. Create release manifest
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
