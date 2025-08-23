# Figma API 설정 가이드 🔑

이 가이드는 RefineUI System Icons를 Figma에서 추출하기 위한 설정 방법을 설명합니다.

## 📋 필요한 정보

1. **Figma Personal Access Token**
2. **Figma File Key**

## 🔑 1. Figma Personal Access Token 생성

### 단계별 가이드

1. **Figma 웹사이트 접속**

   - https://www.figma.com 에 접속
   - 계정으로 로그인

2. **계정 설정으로 이동**

   - 우측 상단 프로필 아이콘 클릭
   - "Settings" 선택

3. **Personal access tokens 섹션 찾기**

   - "Account" 탭에서 "Personal access tokens" 섹션 찾기
   - "Create new token" 버튼 클릭

4. **토큰 생성**

   - 토큰 이름 입력 (예: "RefineUI Icons")
   - "Create token" 클릭

5. **토큰 복사 및 저장**
   - 생성된 토큰을 복사
   - ⚠️ **중요**: 이 토큰은 한 번만 표시되므로 안전한 곳에 저장!

### 토큰 권한 확인

토큰에 다음 권한이 있는지 확인하세요:

- ✅ **Read files**: 파일 읽기 권한
- ✅ **Read team files**: 팀 파일 읽기 권한 (팀 파일인 경우)

## 📄 2. Figma File Key 찾기

### 단계별 가이드

1. **Figma에서 아이콘 파일 열기**

   - 아이콘이 포함된 Figma 파일 열기

2. **브라우저 주소창 확인**

   - 주소창의 URL을 확인:

   ```
   https://www.figma.com/file/XXXXXXXXXXXXXXX/System-Icons
   ```

3. **파일 키 추출**
   - `/file/` 다음에 오는 긴 문자열이 파일 키
   - 예시: `XXXXXXXXXXXXXXX` 부분

### 파일 접근 권한 확인

파일이 다음 중 하나의 조건을 만족해야 합니다:

- ✅ **공개 파일**: 누구나 접근 가능
- ✅ **팀 파일**: 토큰 소유자가 팀 멤버
- ✅ **개인 파일**: 토큰 소유자의 파일

## 🛠️ 3. 환경 설정

### 방법 1: .env 파일 사용 (권장)

1. **프로젝트 루트에 .env 파일 생성**

   ```bash
   cp .env.example .env
   ```

2. **.env 파일 편집**

   ```env
   # Figma API 설정
   FIGMA_TOKEN=your_figma_personal_access_token_here
   FIGMA_FILE_KEY=your_figma_file_key_here

   # 선택적 설정
   FIGMA_BATCH_SIZE=50
   FIGMA_MAX_ICONS=0
   FIGMA_TEST_LIMIT=10
   ```

3. **실제 값으로 교체**
   - `your_figma_personal_access_token_here` → 실제 토큰
   - `your_figma_file_key_here` → 실제 파일 키

### 방법 2: 환경변수 직접 설정

#### macOS/Linux

```bash
export FIGMA_TOKEN="your_figma_personal_access_token_here"
export FIGMA_FILE_KEY="your_figma_file_key_here"
```

#### Windows (Command Prompt)

```cmd
set FIGMA_TOKEN=your_figma_personal_access_token_here
set FIGMA_FILE_KEY=your_figma_file_key_here
```

#### Windows (PowerShell)

```powershell
$env:FIGMA_TOKEN="your_figma_personal_access_token_here"
$env:FIGMA_FILE_KEY="your_figma_file_key_here"
```

### 방법 3: 명령줄 인수 사용

```bash
python scripts/figma_icon_extractor.py \
  --token "your_figma_personal_access_token_here" \
  --file-key "your_figma_file_key_here"
```

## 🚀 4. 테스트 및 실행

### 1. 설정 확인

```bash
# 테스트 모드로 실행 (10개 아이콘만)
FIGMA_TEST_LIMIT=10 python scripts/figma_icon_extractor.py
```

### 2. 전체 실행

```bash
# 증분 업데이트 (기본값)
python scripts/figma_icon_extractor.py

# 전체 동기화
python scripts/figma_icon_extractor.py --full-sync
```

## 🔧 5. 고급 설정

### 환경변수 옵션

| 변수명             | 기본값 | 설명                         |
| ------------------ | ------ | ---------------------------- |
| `FIGMA_TOKEN`      | -      | Figma Personal Access Token  |
| `FIGMA_FILE_KEY`   | -      | Figma 파일 키                |
| `FIGMA_BATCH_SIZE` | 50     | 배치 처리 크기               |
| `FIGMA_MAX_ICONS`  | 0      | 최대 처리 아이콘 수 (0=전체) |
| `FIGMA_TEST_LIMIT` | -      | 테스트용 아이콘 수 제한      |

### 예시 설정

```env
# 기본 설정
FIGMA_TOKEN=figd_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FIGMA_FILE_KEY=xxxxxxxxxxxxxxxxxxxxxxxx

# 고급 설정
FIGMA_BATCH_SIZE=100
FIGMA_MAX_ICONS=50
FIGMA_TEST_LIMIT=5
```

## ❗ 6. 문제 해결

### 일반적인 오류

#### 1. "Figma API 토큰이 필요합니다"

- ✅ `.env` 파일이 올바르게 설정되었는지 확인
- ✅ 환경변수가 올바르게 설정되었는지 확인

#### 2. "Figma 파일 키가 필요합니다"

- ✅ 파일 키가 올바르게 추출되었는지 확인
- ✅ 파일에 접근 권한이 있는지 확인

#### 3. "페이지를 찾을 수 없습니다"

- ✅ 페이지 이름이 "System Icons"인지 확인
- ✅ `--page` 인수로 다른 페이지 이름 지정

#### 4. "Rate limit 도달"

- ✅ API 호출 제한에 도달
- ✅ 잠시 후 다시 시도하거나 배치 크기 줄이기

### 디버깅

```bash
# 상세 로그로 실행
python -u scripts/figma_icon_extractor.py 2>&1 | tee figma_extract.log
```

## 📚 7. 추가 리소스

- [Figma API 문서](https://www.figma.com/developers/api)
- [Personal Access Tokens](https://www.figma.com/developers/api#access-tokens)
- [File API](https://www.figma.com/developers/api#files)

## 🔒 8. 보안 주의사항

- ⚠️ **토큰을 절대 공개 저장소에 커밋하지 마세요**
- ⚠️ **토큰을 다른 사람과 공유하지 마세요**
- ⚠️ **토큰이 노출되면 즉시 재생성하세요**
- ✅ **.env 파일을 .gitignore에 추가하세요**
- ✅ **토큰을 안전한 곳에 백업하세요**
