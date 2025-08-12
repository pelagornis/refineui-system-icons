# Figma API 설정 가이드

## 🔑 Figma Personal Access Token 생성

### 1. Figma 계정 로그인
- [Figma](https://www.figma.com)에 로그인합니다.

### 2. Settings 페이지 접속
- 우측 상단의 프로필 아이콘 클릭
- **Settings** 선택

### 3. Personal Access Tokens 섹션
- 좌측 메뉴에서 **Personal Access Tokens** 클릭
- 또는 직접 URL 접속: https://www.figma.com/settings

### 4. 새 토큰 생성
- **Create new token** 버튼 클릭
- 토큰 이름 입력 (예: "RefineUI Icons Extractor")
- **Create token** 클릭

### 5. 토큰 복사 및 저장
- 생성된 토큰을 안전한 곳에 복사해두세요
- **⚠️ 주의**: 토큰은 한 번만 표시되므로 반드시 복사해두세요!

## 📁 Figma 파일 키 확인

### 1. Figma 파일 URL에서 추출
```
https://www.figma.com/file/XXXXXXXXXXXXXXX/File-Name
                    ↑
                파일 키 (32자리)
```

### 2. 파일 공유 설정
- Figma 파일에서 **Share** 버튼 클릭
- **Anyone with the link** 선택
- **Can view** 권한 설정

## 🚀 사용 방법

### 환경변수로 설정 (권장)
```bash
# macOS/Linux
export FIGMA_TOKEN="your_figma_token_here"
export FIGMA_FILE_KEY="your_file_key_here"

# Windows
set FIGMA_TOKEN=your_figma_token_here
set FIGMA_FILE_KEY=your_file_key_here
```

### 스크립트 실행 시 직접 전달
```bash
python scripts/figma_icon_extractor.py \
  --token "your_figma_token_here" \
  --file-key "your_file_key_here" \
  --page "System Icons"
```

### .env 파일 사용
```bash
# .env 파일 생성
echo "FIGMA_TOKEN=your_figma_token_here" > .env
echo "FIGMA_FILE_KEY=your_file_key_here" >> .env
```

## 🔒 보안 주의사항

### 토큰 보안
- **절대** 코드에 토큰을 하드코딩하지 마세요
- **절대** Git에 토큰을 커밋하지 마세요
- 토큰이 노출되면 즉시 재생성하세요

### .gitignore 설정
```gitignore
# .gitignore에 추가
.env
*.env
secrets/
```

### GitHub Secrets 설정
GitHub Actions에서 사용할 경우:
1. Repository Settings → Secrets and variables → Actions
2. **New repository secret** 클릭
3. `FIGMA_TOKEN`과 `FIGMA_FILE_KEY` 추가

## 🛠️ 문제 해결

### 토큰 권한 오류
```
Error: 403 Forbidden
```
- 토큰이 올바른지 확인
- 파일에 대한 접근 권한 확인
- 토큰이 만료되지 않았는지 확인

### 파일 접근 오류
```
Error: 404 Not Found
```
- 파일 키가 올바른지 확인
- 파일이 공유되어 있는지 확인
- 파일이 삭제되지 않았는지 확인

### 페이지 찾기 오류
```
Error: Page 'System Icons' not found
```
- 페이지 이름이 정확한지 확인
- 페이지가 존재하는지 확인
- 대소문자 구분 확인

## 📋 체크리스트

- [ ] Figma Personal Access Token 생성
- [ ] 토큰 안전하게 저장
- [ ] Figma 파일 키 확인
- [ ] 파일 공유 설정
- [ ] 환경변수 또는 .env 파일 설정
- [ ] .gitignore에 민감한 파일 추가
- [ ] GitHub Secrets 설정 (선택사항)

## 🔗 관련 링크

- [Figma API Documentation](https://www.figma.com/developers/api)
- [Figma Personal Access Tokens](https://www.figma.com/settings)
- [Figma File Sharing](https://help.figma.com/hc/en-us/articles/360040531773-Share-files-and-prototypes)
