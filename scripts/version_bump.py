#!/usr/bin/env python3
"""
RefineUI System Icons - Version Bump Script
프로젝트 버전을 업데이트하고 릴리즈 태그를 생성하는 스크립트
"""

import os
import sys
import re
import subprocess
from pathlib import Path

def run_command(command, cwd=None):
    """명령어를 실행하고 결과를 반환합니다."""
    try:
        result = subprocess.run(
            command,
            shell=True,
            cwd=cwd or Path.cwd(),
            capture_output=True,
            text=True,
            check=True
        )
        print(f"✅ {command}")
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"❌ {command} 실패: {e}")
        return None

def get_current_version():
    """현재 버전을 가져옵니다."""
    package_json = Path("package.json")
    if package_json.exists():
        with open(package_json, 'r', encoding='utf-8') as f:
            content = f.read()
            match = re.search(r'"version":\s*"([^"]+)"', content)
            if match:
                return match.group(1)
    return "1.0.0"

def bump_version(version_type):
    """버전을 업데이트합니다."""
    current = get_current_version()
    major, minor, patch = map(int, current.split('.'))
    
    if version_type == 'major':
        major += 1
        minor = 0
        patch = 0
    elif version_type == 'minor':
        minor += 1
        patch = 0
    elif version_type == 'patch':
        patch += 1
    else:
        print(f"❌ 잘못된 버전 타입: {version_type}")
        print("사용법: major, minor, patch 중 하나를 선택하세요.")
        return None
    
    new_version = f"{major}.{minor}.{patch}"
    return new_version

def update_package_json(version):
    """package.json의 버전을 업데이트합니다."""
    package_json = Path("package.json")
    if package_json.exists():
        with open(package_json, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 버전 업데이트
        content = re.sub(r'"version":\s*"[^"]+"', f'"version": "{version}"', content)
        
        with open(package_json, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ package.json 버전 업데이트: {version}")

def update_ios_podspec(version):
    """iOS Podspec 파일의 버전을 업데이트합니다."""
    podspec_files = list(Path(".").glob("*.podspec"))
    for podspec in podspec_files:
        with open(podspec, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 버전 업데이트
        content = re.sub(r's\.version\s*=\s*["\'][^"\']+["\']', f's.version = "{version}"', content)
        
        with open(podspec, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ {podspec.name} 버전 업데이트: {version}")

def update_swift_package(version):
    """Swift Package의 버전을 업데이트합니다."""
    package_swift = Path("Package.swift")
    if package_swift.exists():
        with open(package_swift, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 버전 업데이트
        content = re.sub(r'version:\s*["\'][^"\']+["\']', f'version: "{version}"', content)
        
        with open(package_swift, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Package.swift 버전 업데이트: {version}")

def create_git_tag(version):
    """Git 태그를 생성합니다."""
    # 변경사항 커밋
    run_command("git add .")
    run_command(f'git commit -m "chore: bump version to {version}"')
    
    # 태그 생성
    run_command(f'git tag -a v{version} -m "Release version {version}"')
    
    print(f"✅ Git 태그 v{version} 생성 완료")

def main():
    """메인 실행 함수"""
    if len(sys.argv) != 2:
        print("사용법: python3 scripts/version_bump.py [major|minor|patch]")
        print("예시:")
        print("  python3 scripts/version_bump.py patch    # 1.0.0 -> 1.0.1")
        print("  python3 scripts/version_bump.py minor    # 1.0.0 -> 1.1.0")
        print("  python3 scripts/version_bump.py major    # 1.0.0 -> 2.0.0")
        sys.exit(1)
    
    version_type = sys.argv[1].lower()
    if version_type not in ['major', 'minor', 'patch']:
        print("❌ 잘못된 버전 타입입니다. major, minor, patch 중 하나를 선택하세요.")
        sys.exit(1)
    
    print(f"🚀 RefineUI System Icons 버전 업데이트 시작")
    print(f"📋 버전 타입: {version_type}")
    
    # 현재 버전 확인
    current_version = get_current_version()
    print(f"📌 현재 버전: {current_version}")
    
    # 새 버전 계산
    new_version = bump_version(version_type)
    if not new_version:
        sys.exit(1)
    
    print(f"🆕 새 버전: {new_version}")
    
    # 파일들 업데이트
    update_package_json(new_version)
    update_ios_podspec(new_version)
    update_swift_package(new_version)
    
    # Git 태그 생성
    create_git_tag(new_version)
    
    print("=" * 50)
    print(f"🎉 버전 {new_version} 업데이트 완료!")
    print(f"📝 다음 명령어로 릴리즈를 시작하세요:")
    print(f"   git push origin main --tags")
    print(f"   npm run release:all")

if __name__ == "__main__":
    main()
