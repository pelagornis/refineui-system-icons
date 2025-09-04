#!/usr/bin/env python3
"""
RefineUI System Icons - Build All Script
Builds and generates icons for all platforms.
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

def build_all():
    """Builds all platforms."""
    print("🎯 RefineUI System Icons full build started...")
    
    project_root = Path(__file__).parent.parent
    scripts_dir = Path(__file__).parent
    
    # 1. Generate metadata
    if not run_command("npm run generate:metadata", "Metadata generation"):
        return False
    
    # 2. Generate font CSS
    if not run_command(f"python3 {scripts_dir}/generate_font_css.py", "Font CSS generation"):
        return False
    
    # 3. Generate platform-specific files
    if not run_command(f"python3 {scripts_dir}/generate_platforms.py", "Platform-specific file generation"):
        return False
    
    # 4. Build all packages
    if not run_command("npm run build", "All packages build"):
        return False
    
    # 5. Build fonts
    if not run_command(f"python3 {scripts_dir}/build_fonts.py", "Font build"):
        return False
    
    # 6. Platform-specific builds
    if not run_command(f"python3 {scripts_dir}/build_platforms.py", "Platform-specific builds"):
        return False
    
    print("🎉 Full build completed!")
    return True

if __name__ == "__main__":
    success = build_all()
    sys.exit(0 if success else 1)
