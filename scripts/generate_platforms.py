#!/usr/bin/env python3
"""
RefineUI System Icons - Platform Generator
모든 플랫폼용 파일들을 생성합니다.
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

def generate_platforms():
    """모든 플랫폼용 파일들을 생성합니다."""
    print("🌐 플랫폼별 파일 생성 시작...")
    
    project_root = Path(__file__).parent.parent
    scripts_dir = Path(__file__).parent
    
    # 1. Android XML 생성
    if (project_root / "android").exists():
        if not run_command(f"python3 {scripts_dir}/generate_android_xml.py", "Android XML 생성"):
            print("⚠️  Android XML 생성 실패, 계속 진행...")
    
    # 2. iOS Swift 생성
    if (project_root / "ios").exists():
        if not run_command(f"python3 {scripts_dir}/generate_ios_swift.py", "iOS Swift 생성"):
            print("⚠️  iOS Swift 생성 실패, 계속 진행...")
    
    # 3. Flutter Dart 생성
    if (project_root / "flutter").exists():
        if not run_command(f"python3 {scripts_dir}/generate_flutter_dart.py", "Flutter Dart 생성"):
            print("⚠️  Flutter Dart 생성 실패, 계속 진행...")
    
    # 4. React/React Native/Web/CDN 패키지 생성
    if not run_command(f"python3 {scripts_dir}/generate_web_icons.py", "웹 아이콘 패키지 생성"):
            print("⚠️  웹 아이콘 패키지 생성 실패, 계속 진행...")
    
    print("🎉 플랫폼별 파일 생성 완료!")
    return True

if __name__ == "__main__":
    success = generate_platforms()
    sys.exit(0 if success else 1)
