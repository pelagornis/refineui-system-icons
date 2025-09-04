#!/usr/bin/env python3
"""
RefineUI System Icons - All Platforms Release Script
모든 플랫폼의 아이콘을 빌드하고 릴리즈하는 스크립트
"""

import os
import sys
import json
import subprocess
import shutil
from datetime import datetime
from pathlib import Path

# 프로젝트 루트 디렉토리
ROOT_DIR = Path(__file__).parent.parent
BUILD_DIR = ROOT_DIR / "build"
RELEASE_DIR = ROOT_DIR / "release"

def run_command(command, cwd=None):
    """명령어를 실행하고 결과를 반환합니다."""
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
        print(f"❌ {command} 실패: {e}")
        print(f"에러 출력: {e.stderr}")
        return None

def clean_directories():
    """빌드 및 릴리즈 디렉토리를 정리합니다."""
    print("🧹 빌드 및 릴리즈 디렉토리 정리 중...")
    
    for dir_path in [BUILD_DIR, RELEASE_DIR]:
        if dir_path.exists():
            shutil.rmtree(dir_path)
        dir_path.mkdir(exist_ok=True)
        print(f"✅ {dir_path} 정리 완료")

def install_dependencies():
    """필요한 의존성을 설치합니다."""
    print("📦 의존성 설치 중...")
    
    # Python 의존성 설치
    if Path("requirements.txt").exists():
        run_command("pip install -r requirements.txt")
    
    # Node.js 의존성 설치
    if Path("package.json").exists():
        run_command("npm install")
    
    print("✅ 의존성 설치 완료")

def build_all_platforms():
    """모든 플랫폼의 아이콘을 빌드합니다."""
    print("🔨 모든 플랫폼 빌드 중...")
    
    # 메타데이터 생성
    print("📋 메타데이터 생성 중...")
    run_command("npm run generate:metadata")
    
    # 웹 아이콘 생성
    print("🌐 웹 아이콘 생성 중...")
    run_command("npm run generate:web-icons")
    
    # Android XML 생성
    print("🤖 Android XML 생성 중...")
    run_command("npm run generate:android")
    
    # iOS Swift 생성
    print("🍎 iOS Swift 생성 중...")
    run_command("npm run generate:ios")
    
    # Flutter Dart 생성
    print("🦋 Flutter Dart 생성 중...")
    run_command("npm run generate:flutter")
    
    # 폰트 생성
    print("🔤 폰트 생성 중...")
    run_command("npm run generate:fonts")
    run_command("npm run build:fonts")
    
    # 모든 플랫폼 빌드
    print("🚀 모든 플랫폼 빌드 중...")
    run_command("npm run build:all")
    
    print("✅ 모든 플랫폼 빌드 완료")

def create_release_packages():
    """릴리즈 패키지를 생성합니다."""
    print("📦 릴리즈 패키지 생성 중...")
    
    # 빌드된 파일들을 릴리즈 디렉토리로 복사
    if BUILD_DIR.exists():
        for item in BUILD_DIR.iterdir():
            if item.is_dir():
                shutil.copytree(item, RELEASE_DIR / item.name)
            else:
                shutil.copy2(item, RELEASE_DIR)
    
    # 플랫폼별 패키지 생성
    platforms = {
        "web": ["web", "fonts"],
        "android": ["android"],
        "ios": ["ios"],
        "flutter": ["flutter"],
        "all": ["web", "fonts", "android", "ios", "flutter"]
    }
    
    for platform, dirs in platforms.items():
        platform_dir = RELEASE_DIR / f"refineui-icons-{platform}"
        platform_dir.mkdir(exist_ok=True)
        
        for dir_name in dirs:
            source_dir = RELEASE_DIR / dir_name
            if source_dir.exists():
                shutil.copytree(source_dir, platform_dir / dir_name)
        
        # README 파일 생성
        readme_content = f"""# RefineUI System Icons - {platform.upper()}

이 패키지는 RefineUI System Icons의 {platform} 플랫폼용 파일들을 포함합니다.

## 포함된 파일들
{chr(10).join(f"- {dir_name}/" for dir_name in dirs)}

## 설치 및 사용법
자세한 내용은 메인 README.md를 참조하세요.

## 라이선스
MIT License
"""
        
        with open(platform_dir / "README.md", "w", encoding="utf-8") as f:
            f.write(readme_content)
        
        # ZIP 파일 생성
        shutil.make_archive(str(platform_dir), 'zip', platform_dir.parent, platform_dir.name)
        print(f"✅ {platform} 패키지 생성 완료")

def create_release_manifest():
    """릴리즈 매니페스트 파일을 생성합니다."""
    print("📝 릴리즈 매니페스트 생성 중...")
    
    manifest = {
        "version": "1.0.0",
        "release_date": datetime.now().isoformat(),
        "platforms": {
            "web": {
                "description": "웹용 SVG 아이콘 및 CSS",
                "files": ["web/", "fonts/"]
            },
            "android": {
                "description": "Android XML 드로어블",
                "files": ["android/"]
            },
            "ios": {
                "description": "iOS Swift 코드",
                "files": ["ios/"]
            },
            "flutter": {
                "description": "Flutter Dart 코드",
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
    
    print("✅ 릴리즈 매니페스트 생성 완료")

def main():
    """메인 실행 함수"""
    print("🚀 RefineUI System Icons - 전체 플랫폼 릴리즈 시작")
    print("=" * 60)
    
    try:
        # 1. 디렉토리 정리
        clean_directories()
        
        # 2. 의존성 설치
        install_dependencies()
        
        # 3. 모든 플랫폼 빌드
        build_all_platforms()
        
        # 4. 릴리즈 패키지 생성
        create_release_packages()
        
        # 5. 릴리즈 매니페스트 생성
        create_release_manifest()
        
        print("=" * 60)
        print("🎉 모든 플랫폼 릴리즈 완료!")
        print(f"📁 릴리즈 파일 위치: {RELEASE_DIR}")
        
        # 생성된 파일들 목록 출력
        print("\n📋 생성된 릴리즈 파일들:")
        for item in RELEASE_DIR.iterdir():
            if item.is_file():
                size = item.stat().st_size / 1024  # KB
                print(f"  📄 {item.name} ({size:.1f} KB)")
            else:
                print(f"  📁 {item.name}/")
        
    except Exception as e:
        print(f"❌ 릴리즈 실패: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
