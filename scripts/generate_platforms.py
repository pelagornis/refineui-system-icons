#!/usr/bin/env python3
"""
RefineUI System Icons - Platform Generator
Generates files for all platforms.
"""

import os
import sys
import subprocess
from pathlib import Path

def run_command(command, description):
    """Executes a command and outputs the result."""
    print(f"🚀 {description}...")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {description} completed")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} failed: {e}")
        print(f"Error output: {e.stderr}")
        return False

def generate_platforms():
    """Generates files for all platforms."""
    print("🌐 Platform-specific file generation started...")
    
    project_root = Path(__file__).parent.parent
    scripts_dir = Path(__file__).parent
    
    # 1. Generate Android XML
    if (project_root / "android").exists():
        if not run_command(f"python3 {scripts_dir}/generate_android_xml.py", "Android XML generation"):
            print("⚠️  Android XML generation failed, continuing...")
    
    # 2. Generate iOS Swift
    if (project_root / "ios").exists():
        if not run_command(f"python3 {scripts_dir}/generate_ios_swift.py", "iOS Swift generation"):
            print("⚠️  iOS Swift generation failed, continuing...")
    
    # 3. Generate Flutter Dart
    if (project_root / "flutter").exists():
        if not run_command(f"python3 {scripts_dir}/generate_flutter_dart.py", "Flutter Dart generation"):
            print("⚠️  Flutter Dart generation failed, continuing...")
    
    # 4. Generate React/React Native/Web/CDN packages
    if not run_command(f"python3 {scripts_dir}/generate_web_icons.py", "Web icon packages generation"):
            print("⚠️  Web icon packages generation failed, continuing...")
    
    print("🎉 Platform-specific file generation completed!")
    return True

if __name__ == "__main__":
    success = generate_platforms()
    sys.exit(0 if success else 1)
