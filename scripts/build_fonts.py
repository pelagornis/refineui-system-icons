#!/usr/bin/env python3
"""
RefineUI System Icons - Font Build Script
Builds and converts fonts to various formats.
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

def build_fonts():
    """Builds and converts fonts."""
    print("🎨 Font build started...")
    
    project_root = Path(__file__).parent.parent
    fonts_dir = project_root / "fonts"
    
    # Check font directory
    if not fonts_dir.exists():
        print(f"❌ Font directory not found: {fonts_dir}")
        return False
    
    # 1. TTF → WOFF2 conversion
    ttf_files = list(fonts_dir.glob("*.ttf"))
    for ttf_file in ttf_files:
        woff2_file = ttf_file.with_suffix('.woff2')
        if not woff2_file.exists():
            if not run_command(f"ttf2woff2 {ttf_file}", f"TTF → WOFF2 conversion: {ttf_file.name}"):
                print(f"⚠️  {ttf_file.name} conversion failed, continuing...")
    
    # 2. TTF → WOFF conversion
    for ttf_file in ttf_files:
        woff_file = ttf_file.with_suffix('.woff')
        if not woff_file.exists():
            if not run_command(f"ttf2woff {ttf_file}", f"TTF → WOFF conversion: {ttf_file.name}"):
                print(f"⚠️  {ttf_file.name} conversion failed, continuing...")
    
    # 3. Generate CSS files
    if not run_command("python3 scripts/generate_font_css.py", "Font CSS generation"):
        print("⚠️  CSS generation failed, continuing...")
    
    print("🎉 Font build completed!")
    return True

if __name__ == "__main__":
    success = build_fonts()
    sys.exit(0 if success else 1)
