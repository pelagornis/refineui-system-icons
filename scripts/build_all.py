#!/usr/bin/env python3
"""
RefineUI System Icons - Build All Script
모든 플랫폼을 빌드하고 아이콘을 생성합니다.
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

def build_all():
    """모든 플랫폼을 빌드합니다."""
    print("🎯 RefineUI System Icons 전체 빌드 시작...")
    
    project_root = Path(__file__).parent.parent
    scripts_dir = Path(__file__).parent
    
    # 1. 메타데이터 생성
    if not run_command("npm run generate:metadata", "메타데이터 생성"):
        return False
    
    # 2. 폰트 CSS 생성
    if not run_command(f"python3 {scripts_dir}/generate_font_css.py", "폰트 CSS 생성"):
        return False
    
    # 3. 플랫폼별 파일 생성
    if not run_command(f"python3 {scripts_dir}/generate_platforms.py", "플랫폼별 파일 생성"):
        return False
    
    # 4. 모든 패키지 빌드
    if not run_command("npm run build", "모든 패키지 빌드"):
        return False
    
    # 5. 폰트 빌드
    if not run_command(f"python3 {scripts_dir}/build_fonts.py", "폰트 빌드"):
        return False
    
    # 6. 플랫폼별 빌드
    if not run_command(f"python3 {scripts_dir}/build_platforms.py", "플랫폼별 빌드"):
        return False
    
    print("🎉 전체 빌드 완료!")
    return True

if __name__ == "__main__":
    success = build_all()
    sys.exit(0 if success else 1)
