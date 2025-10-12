# Android Library - Maven Central Publishing Guide

이 문서는 RefineUI System Icons Android 라이브러리를 Maven Central에 배포하는 방법을 설명합니다.

## 사전 준비

### 1. Sonatype Central Portal 계정 설정

1. [Sonatype Central Portal](https://central.sonatype.com/)에 계정 생성
2. User Token 생성:
   - Account → Generate User Token
   - Username과 Password를 안전하게 보관

### 2. GPG 키 생성 및 설정

```bash
# GPG 키 생성
gpg --full-generate-key

# 키 목록 확인
gpg --list-secret-keys --keyid-format LONG

# 공개 키를 키 서버에 업로드
gpg --keyserver keyserver.ubuntu.com --send-keys YOUR_KEY_ID

# Private Key를 Base64로 인코딩
gpg --armor --export-secret-keys YOUR_KEY_ID | base64 > gpg-key.base64
```

### 3. GitHub Secrets 설정

Repository Settings → Secrets and variables → Actions에서 다음 secrets를 추가:

- `SONATYPE_TOKEN_USERNAME`: Sonatype User Token의 Username
- `SONATYPE_TOKEN_PASSWORD`: Sonatype User Token의 Password
- `GPG_PRIVATE_KEY`: Base64로 인코딩된 GPG private key (gpg-key.base64 파일 내용)
- `GPG_PASSPHRASE`: GPG 키 생성 시 설정한 passphrase

## 배포 방법

### 자동 배포 (GitHub Actions)

1. 버전 업데이트:

   ```bash
   # android/gradle.properties에서 VERSION_NAME 수정
   VERSION_NAME=0.3.14
   ```

2. Git 태그 생성 및 푸시:

   ```bash
   git tag android-0.3.14
   git push origin android-0.3.14
   ```

3. GitHub Actions가 자동으로 배포를 진행합니다.

### 수동 배포 (로컬)

1. `gradle.properties` 또는 환경 변수 설정:

   ```bash
   export ORG_GRADLE_PROJECT_mavenCentralUsername="your-username"
   export ORG_GRADLE_PROJECT_mavenCentralPassword="your-password"
   export ORG_GRADLE_PROJECT_signingInMemoryKey=$(cat gpg-key.base64 | base64 --decode)
   export ORG_GRADLE_PROJECT_signingInMemoryKeyPassword="your-passphrase"
   ```

2. 배포 실행:
   ```bash
   cd android
   ./gradlew :library:publishAllPublicationsToMavenCentralRepository
   ```

## 배포 확인

1. [Sonatype Central Portal](https://central.sonatype.com/)에 로그인
2. Deployments 메뉴에서 배포 상태 확인
3. 검증이 완료되면 자동으로 Maven Central에 동기화됩니다 (약 30분 소요)

## Gradle 설정 파일 구조

```
android/
├── gradle/
│   └── libs.versions.toml          # 플러그인 버전 관리
├── library/
│   └── build.gradle.kts            # 라이브러리 빌드 및 배포 설정
└── gradle.properties               # POM 메타데이터 설정
```

## 버전 관리

- `android/gradle.properties`의 `VERSION_NAME` 값을 수정하여 버전 관리
- Semantic Versioning 사용: `MAJOR.MINOR.PATCH`
- Git 태그는 `android-X.Y.Z` 형식 사용

## 트러블슈팅

### 1. GPG 서명 실패

- GPG 키가 올바르게 Base64 인코딩되었는지 확인
- Passphrase가 정확한지 확인

### 2. Maven Central 업로드 실패

- Sonatype credentials가 올바른지 확인
- Group ID와 namespace가 일치하는지 확인

### 3. 검증 실패

- POM 파일의 필수 정보가 모두 포함되어 있는지 확인
- Source 및 Javadoc JAR가 생성되었는지 확인

## 배포 정보 확인

```bash
cd android
./gradlew :library:printPublicationInfo
```

## 참고 자료

- [Maven Central Publishing Requirements](https://central.sonatype.org/publish/requirements/)
- [Vanniktech Maven Publish Plugin](https://vanniktech.github.io/gradle-maven-publish-plugin/)
