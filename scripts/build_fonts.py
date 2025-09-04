#!/usr/bin/env python3
"""
RefineUI System Icons - Font Build Script
폰트를 빌드하고 다양한 형식으로 변환합니다.
"""

import os
import sys
import subprocess
from pathlib import Path

def run_command(command, description):
    """명령어를 실행하고 결과를 출력합니다."""
    print(f"🚀 {description}...")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {description} 완료")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} 실패: {e}")
        print(f"에러 출력: {e.stderr}")
        return False

def build_fonts():
    """폰트를 빌드하고 변환합니다."""
    print("🎨 폰트 빌드 시작...")
    
    project_root = Path(__file__).parent.parent
    fonts_dir = project_root / "fonts"
    
    # 폰트 디렉토리 확인
    if not fonts_dir.exists():
        print(f"❌ 폰트 디렉토리를 찾을 수 없습니다: {fonts_dir}")
        return False
    
    # 1. TTF → WOFF2 변환
    ttf_files = list(fonts_dir.glob("*.ttf"))
    for ttf_file in ttf_files:
        woff2_file = ttf_file.with_suffix('.woff2')
        if not woff2_file.exists():
            if not run_command(f"ttf2woff2 {ttf_file}", f"TTF → WOFF2 변환: {ttf_file.name}"):
                print(f"⚠️  {ttf_file.name} 변환 실패, 계속 진행...")
    
    # 2. TTF → WOFF 변환
    for ttf_file in ttf_files:
        woff_file = ttf_file.with_suffix('.woff')
        if not woff_file.exists():
            if not run_command(f"ttf2woff {ttf_file}", f"TTF → WOFF 변환: {ttf_file.name}"):
                print(f"⚠️  {ttf_file.name} 변환 실패, 계속 진행...")
    
    # 3. CSS 파일 생성
    if not run_command("python3 scripts/generate_font_css.py", "폰트 CSS 생성"):
        print("⚠️  CSS 생성 실패, 계속 진행...")
    
    print("🎉 폰트 빌드 완료!")
    return True

if __name__ == "__main__":
    success = build_fonts()
    sys.exit(0 if success else 1)
