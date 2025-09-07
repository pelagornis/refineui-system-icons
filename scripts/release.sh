#!/bin/bash

# RefineUI System Icons - Release Script
# 모든 플랫폼을 릴리즈하는 자동화 스크립트

set -e  # 에러 발생 시 스크립트 중단

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 로그 함수들
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# 현재 상태 확인
check_git_status() {
    log_info "Git 상태 확인 중..."
    
    if ! git status --porcelain | grep -q .; then
        log_success "작업 디렉토리가 깨끗합니다"
    else
        log_warning "작업 디렉토리에 변경사항이 있습니다:"
        git status --short
        read -p "계속 진행하시겠습니까? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            log_info "릴리즈가 취소되었습니다"
            exit 0
        fi
    fi
}

# 의존성 확인
check_dependencies() {
    log_info "의존성 확인 중..."
    
    # Python 확인
    if ! command -v python3 &> /dev/null; then
        log_error "Python3가 설치되지 않았습니다"
        exit 1
    fi
    
    # Node.js 확인
    if ! command -v node &> /dev/null; then
        log_error "Node.js가 설치되지 않았습니다"
        exit 1
    fi
    
    # npm 확인
    if ! command -v npm &> /dev/null; then
        log_error "npm이 설치되지 않았습니다"
        exit 1
    fi
    
    log_success "모든 의존성이 확인되었습니다"
}

# 버전 업데이트
bump_version() {
    local version_type=$1
    
    log_info "버전 업데이트 중... (타입: $version_type)"
    
    if ! python3 scripts/version_bump.py "$version_type"; then
        log_error "버전 업데이트 실패"
        exit 1
    fi
    
    log_success "버전 업데이트 완료"
}

# 릴리즈 빌드
build_release() {
    local version=$1
    log_info "릴리즈 빌드 시작... (버전: $version)"
    
    if ! python3 scripts/release_all_platforms.py "$version"; then
        log_error "릴리즈 빌드 실패"
        exit 1
    fi
    
    log_success "릴리즈 빌드 완료"
}

# Git 태그 푸시
push_release() {
    local version=$1
    
    log_info "Git 태그 푸시 중... (v$version)"
    
    if ! git push origin main --tags; then
        log_error "Git 푸시 실패"
        exit 1
    fi
    
    log_success "Git 태그 푸시 완료"
}

# GitHub API로 릴리즈 생성
create_github_release() {
    local version=$1
    local github_token=$2
    
    if [ -z "$github_token" ]; then
        log_warning "GitHub 토큰이 설정되지 않았습니다. 수동으로 릴리즈를 생성해주세요."
        return 0
    fi
    
    log_info "GitHub 릴리즈 생성 중... (v$version)"
    
    # 릴리즈 노트 생성
    local release_notes=$(generate_release_notes "$version")
    
    # 릴리즈 생성
    local release_response=$(curl -s -X POST \
        -H "Authorization: token $github_token" \
        -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^.]*\).*/\1/')/releases" \
        -d "{
            \"tag_name\": \"v$version\",
            \"target_commitish\": \"main\",
            \"name\": \"RefineUI System Icons v$version\",
            \"body\": \"$release_notes\",
            \"draft\": false,
            \"prerelease\": false
        }")
    
    # 릴리즈 생성 결과 확인
    if echo "$release_response" | grep -q '"id"'; then
        local release_id=$(echo "$release_response" | grep '"id"' | head -1 | sed 's/.*"id": \([0-9]*\).*/\1/')
        log_success "GitHub 릴리즈 생성 완료 (ID: $release_id)"
        
        # 릴리즈 파일 업로드
        upload_release_assets "$release_id" "$github_token"
    else
        log_error "GitHub 릴리즈 생성 실패"
        echo "Response: $release_response"
        return 1
    fi
}

# 릴리즈 노트 생성
generate_release_notes() {
    local version=$1
    
    cat << EOF
## 🎉 RefineUI System Icons v$version

### 📦 NPM Packages
\`\`\`bash
npm install @refineui/react-icons@$version
npm install @refineui/react-native-icons@$version
npm install @refineui/web-icons@$version
\`\`\`

### 🍎 iOS
\`\`\`ruby
pod 'RefineUIIcons', '$version'
\`\`\`

### 🤖 Android
\`\`\`gradle
implementation 'com.pelagornis:library:$version'
\`\`\`

### 🦋 Flutter
\`\`\`yaml
dependencies:
  refineui_system_icons: ^$version
\`\`\`

### 🌟 Features
- **434+ icons** with multiple sizes and styles
- **Cross-platform consistency** across all platforms
- **TypeScript support** for web platforms
- **Native integration** for mobile platforms
- **Optimized performance** for each platform

### 📁 Files
Complete source code and distribution files for all platforms are attached below.
EOF
}

# 릴리즈 파일 업로드
upload_release_assets() {
    local release_id=$1
    local github_token=$2
    
    log_info "릴리즈 파일 업로드 중..."
    
    # 폰트 파일들과 설정 파일들을 업로드
    local files_to_upload=(
        "fonts"
        "RefineUIIcons.podspec"
        "Package.swift"
        "flutter/pubspec.yaml"
    )
    
    for file_path in "${files_to_upload[@]}"; do
        if [ -e "$file_path" ]; then
            local filename=$(basename "$file_path")
            log_info "업로드 중: $filename"
            
            # 파일을 tar.gz로 압축
            local archive_name="${filename}.tar.gz"
            tar -czf "$archive_name" "$file_path" 2>/dev/null || continue
            
            local upload_response=$(curl -s -X POST \
                -H "Authorization: token $github_token" \
                -H "Content-Type: application/gzip" \
                --data-binary @"$archive_name" \
                "https://uploads.github.com/repos/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^.]*\).*/\1/')/releases/$release_id/assets?name=$archive_name")
            
            if echo "$upload_response" | grep -q '"id"'; then
                log_success "업로드 완료: $archive_name"
            else
                log_warning "업로드 실패: $archive_name"
            fi
            
            # 임시 파일 삭제
            rm -f "$archive_name"
        fi
    done
}

# 릴리즈 요약
show_release_summary() {
    local version=$1
    
    echo
    echo "🎉 릴리즈 완료!"
    echo "=================="
    echo "📌 버전: v$version"
    echo "📁 빌드된 파일들이 GitHub 릴리즈에 업로드됩니다"
    
    if [ -n "$GITHUB_TOKEN" ]; then
        echo "✅ GitHub 릴리즈가 자동으로 생성되었습니다"
        echo "🔗 https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^.]*\).*/\1/')/releases/tag/v$version"
    else
        echo "⚠️  GitHub 토큰이 없어 수동으로 릴리즈를 생성해주세요"
        echo "🔗 https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^.]*\).*/\1/')/releases/new"
    fi
    
    echo
    echo "📋 다음 단계:"
    echo "1. GitHub에서 릴리즈 확인"
    echo "2. 각 플랫폼별 패키지 배포 (npm publish 등)"
    echo
}

# 메인 함수
main() {
    echo "🚀 RefineUI System Icons - 릴리즈 스크립트"
    echo "=========================================="
    
    # 인수 확인
    if [ $# -eq 0 ]; then
        echo "사용법: $0 [major|minor|patch]"
        echo
        echo "버전 타입:"
        echo "  patch  - 버그 수정 (1.0.0 -> 1.0.1)"
        echo "  minor  - 새로운 기능 (1.0.0 -> 1.1.0)"
        echo "  major  - 주요 변경사항 (1.0.0 -> 2.0.0)"
        echo
        echo "환경변수:"
        echo "  GITHUB_TOKEN  - GitHub API 토큰 (자동 릴리즈 생성용)"
        echo
        echo "예시:"
        echo "  $0 patch"
        echo "  GITHUB_TOKEN=your_token $0 minor"
        echo "  $0 major"
        exit 1
    fi
    
    local version_type=$1
    
    # 유효한 버전 타입 확인
    if [[ ! "$version_type" =~ ^(major|minor|patch)$ ]]; then
        log_error "잘못된 버전 타입입니다: $version_type"
        echo "사용 가능한 타입: major, minor, patch"
        exit 1
    fi
    
    # 현재 디렉토리가 Git 저장소인지 확인
    if [ ! -d ".git" ]; then
        log_error "현재 디렉토리가 Git 저장소가 아닙니다"
        exit 1
    fi
    
    # 릴리즈 프로세스 시작
    log_info "릴리즈 프로세스 시작 (타입: $version_type)"
    
    check_git_status
    check_dependencies
    bump_version "$version_type"
    
    # 새 버전 가져오기
    local new_version=$(node -p "require('./package.json').version")
    
    # 릴리즈 빌드 (버전 전달)
    build_release "$new_version"
    
    # Git 푸시
    push_release "$new_version"
    
    # GitHub 릴리즈 생성 (토큰이 있는 경우)
    if [ -n "$GITHUB_TOKEN" ]; then
        create_github_release "$new_version" "$GITHUB_TOKEN"
    else
        log_warning "GITHUB_TOKEN 환경변수가 설정되지 않았습니다."
        log_info "GitHub 토큰을 설정하려면: export GITHUB_TOKEN=your_token"
    fi
    
    # 릴리즈 요약 표시
    show_release_summary "$new_version"
}

# 스크립트 실행
main "$@"
