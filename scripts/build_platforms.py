#!/usr/bin/env python3
"""
RefineUI System Icons - Platform Build Script
각 플랫폼별로 빌드하고 아이콘을 생성합니다.
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

def build_platforms():
    """각 플랫폼별로 빌드합니다."""
    print("🌐 플랫폼별 빌드 시작...")
    
    project_root = Path(__file__).parent.parent
    
    # 1. React Native (iOS/Android)
    if (project_root / "packages" / "react-native-icons").exists():
        if not run_command("cd packages/react-native-icons && npm run build", "React Native 패키지 빌드"):
            print("⚠️  React Native 빌드 실패, 계속 진행...")
    
    # 2. Flutter
    if (project_root / "flutter").exists():
        if not run_command("cd flutter && flutter build", "Flutter 빌드"):
            print("⚠️  Flutter 빌드 실패, 계속 진행...")
    
    # 3. iOS
    if (project_root / "ios").exists():
        if not run_command("cd ios && pod install", "iOS Pod 설치"):
            print("⚠️  iOS Pod 설치 실패, 계속 진행...")
    
    # 4. Android
    if (project_root / "android").exists():
        if not run_command("cd android && ./gradlew build", "Android 빌드"):
            print("⚠️  Android 빌드 실패, 계속 진행...")
    
    # 5. Web Assets
    if (project_root / "web-test").exists():
        if not run_command("cd web-test && npm run build", "Web Assets 빌드"):
            print("⚠️  Web Assets 빌드 실패, 계속 진행...")
    
    print("🎉 플랫폼별 빌드 완료!")
    return True

if __name__ == "__main__":
    success = build_platforms()
    sys.exit(0 if success else 1)
