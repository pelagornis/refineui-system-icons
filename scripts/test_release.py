#!/usr/bin/env python3
"""
RefineUI System Icons - Release Script Test
릴리즈 스크립트들이 제대로 작동하는지 테스트하는 스크립트
"""

import os
import sys
import subprocess
from pathlib import Path

def test_script_exists(script_name):
    """스크립트 파일이 존재하는지 테스트합니다."""
    script_path = Path(f"scripts/{script_name}")
    if script_path.exists():
        print(f"✅ {script_name} 존재")
        return True
    else:
        print(f"❌ {script_name} 없음")
        return False

def test_script_executable(script_name):
    """스크립트가 실행 가능한지 테스트합니다."""
    script_path = Path(f"scripts/{script_name}")
    if script_path.exists() and os.access(script_path, os.X_OK):
        print(f"✅ {script_name} 실행 가능")
        return True
    else:
        print(f"❌ {script_name} 실행 불가")
        return False

def test_python_script(script_name):
    """Python 스크립트가 문법적으로 올바른지 테스트합니다."""
    script_path = Path(f"scripts/{script_name}")
    if script_path.suffix == '.py':
        try:
            result = subprocess.run(
                [sys.executable, "-m", "py_compile", str(script_path)],
                capture_output=True,
                text=True
            )
            if result.returncode == 0:
                print(f"✅ {script_name} Python 문법 검증 통과")
                return True
            else:
                print(f"❌ {script_name} Python 문법 오류: {result.stderr}")
                return False
        except Exception as e:
            print(f"❌ {script_name} 테스트 실패: {e}")
            return False
    return True

def test_npm_scripts():
    """package.json의 스크립트들이 존재하는지 테스트합니다."""
    package_json = Path("package.json")
    if not package_json.exists():
        print("❌ package.json 없음")
        return False
    
    try:
        with open(package_json, 'r', encoding='utf-8') as f:
            content = f.read()
        
        required_scripts = [
            "release:all",
            "version:bump"
        ]
        
        all_exist = True
        for script in required_scripts:
            if f'"{script}":' in content:
                print(f"✅ npm script: {script}")
            else:
                print(f"❌ npm script: {script} 없음")
                all_exist = False
        
        return all_exist
    except Exception as e:
        print(f"❌ package.json 읽기 실패: {e}")
        return False

def test_github_workflow():
    """GitHub Actions 워크플로우 파일이 존재하는지 테스트합니다."""
    workflow_paths = [
        Path(".github/workflows/release-web.yml"),
        Path(".github/workflows/release-react-native.yml"),
        Path(".github/workflows/release-ios.yml"),
        Path(".github/workflows/release-android.yml"),
        Path(".github/workflows/release-flutter.yml"),
        Path(".github/workflows/release-all.yml")
    ]
    
    found_workflows = []
    for workflow_path in workflow_paths:
        if workflow_path.exists():
            found_workflows.append(workflow_path.name)
    
    if found_workflows:
        print(f"✅ GitHub Actions 워크플로우 존재: {', '.join(found_workflows)}")
        return True
    
    print("❌ GitHub Actions 워크플로우 없음")
    return False

def main():
    """메인 테스트 함수"""
    print("🧪 RefineUI System Icons - 릴리즈 스크립트 테스트")
    print("=" * 50)
    
    tests = [
        ("릴리즈 스크립트 존재", lambda: test_script_exists("release_all_platforms.py")),
        ("버전 업데이트 스크립트 존재", lambda: test_script_exists("version_bump.py")),
        ("릴리즈 셸 스크립트 존재", lambda: test_script_exists("release.sh")),
        ("릴리즈 스크립트 실행 가능", lambda: test_script_executable("release.sh")),
        ("Python 릴리즈 스크립트 문법 검증", lambda: test_python_script("release_all_platforms.py")),
        ("Python 버전 스크립트 문법 검증", lambda: test_python_script("version_bump.py")),
        ("npm 스크립트 존재", test_npm_scripts),
        ("GitHub Actions 워크플로우 존재", test_github_workflow),
    ]
    
    passed = 0
    total = len(tests)
    
    for test_name, test_func in tests:
        print(f"\n🔍 {test_name}...")
        try:
            if test_func():
                passed += 1
        except Exception as e:
            print(f"❌ 테스트 실패: {e}")
    
    print("\n" + "=" * 50)
    print(f"📊 테스트 결과: {passed}/{total} 통과")
    
    if passed == total:
        print("🎉 모든 테스트 통과! 릴리즈 스크립트가 준비되었습니다.")
        print("\n📋 사용법:")
        print("  ./scripts/release.sh patch    # 패치 릴리즈")
        print("  ./scripts/release.sh minor    # 마이너 릴리즈")
        print("  ./scripts/release.sh major    # 메이저 릴리즈")
    else:
        print("⚠️  일부 테스트 실패. 릴리즈 전에 문제를 해결하세요.")
        sys.exit(1)

if __name__ == "__main__":
    main()
