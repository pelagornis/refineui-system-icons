#!/usr/bin/env python3
"""
Build All Icons
모든 플랫폼용 아이콘을 빌드하는 메인 스크립트
"""

import os
import sys
import subprocess
from pathlib import Path

def run_script(script_name: str) -> bool:
    """스크립트 실행"""
    script_path = Path(__file__).parent / script_name
    print(f"\n🚀 {script_name} 실행 중...")
    
    try:
        result = subprocess.run([sys.executable, str(script_path)], 
                              capture_output=True, text=True, check=True)
        print(result.stdout)
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ {script_name} 실행 실패:")
        print(e.stderr)
        return False

def build_all_platforms():
    """모든 플랫폼용 아이콘 빌드"""
    print("🎯 모든 플랫폼용 아이콘 빌드 시작...")
    
    # 메타데이터 확인
    metadata_dir = "metadata"
    if not os.path.exists(metadata_dir):
        print("❌ 메타데이터 디렉토리를 찾을 수 없습니다.")
        print("먼저 Figma에서 아이콘을 추출해주세요:")
        print("python scripts/figma_icon_extractor.py --token YOUR_TOKEN --file-key YOUR_FILE_KEY")
        return False
    
    # 각 플랫폼별 빌드
    platforms = [
        ("build_web.py", "Web (React + React Native + Web Version)"),
        ("build_ios.py", "iOS"), 
        ("build_android.py", "Android")
    ]
    
    success_count = 0
    for script, platform in platforms:
        if run_script(script):
            print(f"✅ {platform} 빌드 완료")
            success_count += 1
        else:
            print(f"❌ {platform} 빌드 실패")
    
    print(f"\n🎉 빌드 완료! {success_count}/{len(platforms)} 플랫폼 성공")
    
    if success_count == len(platforms):
        print("\n📁 생성된 파일들:")
        print("  - packages/react-icons/ (React 웹용 컴포넌트)")
        print("  - packages/react-native-icons/ (React Native용 컴포넌트)")
        print("  - packages/icons-web/ (URL 접근 가능한 웹 버전)")
        print("  - packages/android/ (Android용 Vector Drawable)")
        print("  - ios/RefineIcons/ (iOS용 Asset Catalog)")
        return True
    else:
        return False

if __name__ == "__main__":
    success = build_all_platforms()
    sys.exit(0 if success else 1)
