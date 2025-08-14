# Figma API Setup Guide

## 🔑 Generate Figma Personal Access Token

### 1. Login to Figma Account

- Login to [Figma](https://www.figma.com).

### 2. Access Settings Page

- Click the profile icon in the top right
- Select **Settings**

### 3. Personal Access Tokens Section

- Click **Personal Access Tokens** in the left menu
- Or access directly: https://www.figma.com/settings

### 4. Create New Token

- Click **Create new token** button
- Enter token name (e.g., "RefineUI Icons Extractor")
- Click **Create token**

### 5. Copy and Save Token

- Copy the generated token to a safe place
- **⚠️ Warning**: Token is shown only once, so make sure to copy it!

## 📁 Figma File Key Verification

### 1. Extract from Figma File URL

```
https://www.figma.com/file/XXXXXXXXXXXXXXX/File-Name
                    ↑
                File key (32 characters)
```

### 2. File Sharing Settings

- Click **Share** button in Figma file
- Select **Anyone with the link**
- Set **Can view** permission

## 🚀 Usage Methods

### Set as Environment Variables (Recommended)

```bash
# macOS/Linux
export FIGMA_TOKEN="your_figma_token_here"
export FIGMA_FILE_KEY="your_file_key_here"

# Windows
set FIGMA_TOKEN=your_figma_token_here
set FIGMA_FILE_KEY=your_file_key_here
```

### Pass Directly When Running Script

```bash
python scripts/figma_icon_extractor.py \
  --token "your_figma_token_here" \
  --file-key "your_file_key_here" \
  --page "System Icons"
```

### Use .env File

```bash
# Create .env file
echo "FIGMA_TOKEN=your_figma_token_here" > .env
echo "FIGMA_FILE_KEY=your_file_key_here" >> .env
```

## 🔒 Security Considerations

### Token Security

- **Never** hardcode tokens in code
- **Never** commit tokens to Git
- Regenerate token immediately if exposed

### .gitignore Configuration

```gitignore
# Add to .gitignore
.env
*.env
secrets/
```

### GitHub Secrets Configuration

When using with GitHub Actions:

1. Repository Settings → Secrets and variables → Actions
2. Click **New repository secret**
3. Add `FIGMA_TOKEN` and `FIGMA_FILE_KEY`

## 🛠️ Troubleshooting

### Token Permission Error

```
Error: 403 Forbidden
```

- Verify token is correct
- Check file access permissions
- Verify token hasn't expired

### File Access Error

```
Error: 404 Not Found
```

- Verify file key is correct
- Check if file is shared
- Verify file hasn't been deleted

### Page Not Found Error

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
