#!/usr/bin/env python3
"""
RefineUI System Icons - Platform Build Script
Builds and generates icons for each platform.
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

def build_platforms():
    """Builds for each platform."""
    print("🌐 Platform-specific build started...")
    
    project_root = Path(__file__).parent.parent
    
    # 1. React Native (iOS/Android)
    if (project_root / "packages" / "react-native-icons").exists():
        if not run_command("cd packages/react-native-icons && npm run build", "React Native package build"):
            print("⚠️  React Native build failed, continuing...")
    
    # 2. Flutter
    if (project_root / "flutter").exists():
        if not run_command("cd flutter && flutter build", "Flutter build"):
            print("⚠️  Flutter build failed, continuing...")
    
    # 3. iOS
    if (project_root / "ios").exists():
        if not run_command("cd ios && pod install", "iOS Pod installation"):
            print("⚠️  iOS Pod installation failed, continuing...")
    
    # 4. Android
    if (project_root / "android").exists():
        if not run_command("cd android && ./gradlew build", "Android build"):
            print("⚠️  Android build failed, continuing...")
    
    # 5. Web Assets
    if (project_root / "web-test").exists():
        if not run_command("cd web-test && npm run build", "Web Assets build"):
            print("⚠️  Web Assets build failed, continuing...")
    
    print("🎉 Platform-specific build completed!")
    return True

if __name__ == "__main__":
    success = build_platforms()
    sys.exit(0 if success else 1)
