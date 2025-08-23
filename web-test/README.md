# RefineUI System Icons - Web Package Test

이 페이지는 RefineUI System Icons의 각 web package들을 테스트할 수 있는 통합 테스트 환경입니다.

## 🚀 시작하기

### 1. HTTP 서버 실행
```bash
cd web-test
python3 -m http.server 8080
```

### 2. 브라우저에서 접속
```
http://localhost:8080
```

## 📦 테스트 가능한 패키지들

### 1. **CDN Package Test**
- CDN을 통한 아이콘 로딩 테스트
- 아이콘 선택, 크기 조정, 색상 변경 가능
- 실시간 미리보기

### 2. **Web Package Test**
- 웹 패키지의 아이콘 갤러리 테스트
- 검색 기능으로 아이콘 필터링
- 스타일(Regular/Filled) 및 크기별 필터링
- 그리드 형태로 아이콘 표시

### 3. **React Package Test**
- React 패키지 사용법 시뮬레이션
- 아이콘 선택 및 스타일링 테스트
- React 컴포넌트 사용법 미리보기

### 4. **React Native Package Test**
- React Native 패키지 사용법 시뮬레이션
- 모바일 환경에서의 아이콘 표시 테스트
- 터치 인터랙션 테스트

## 🎨 기능들

### ✅ **실시간 미리보기**
- 아이콘 선택 시 즉시 미리보기 업데이트
- 크기, 색상 변경 실시간 반영

### ✅ **검색 및 필터링**
- 아이콘 이름으로 검색
- 스타일별 필터링 (Regular/Filled)
- 크기별 필터링 (16px ~ 48px)

### ✅ **반응형 디자인**
- 모바일, 태블릿, 데스크톱 지원
- 터치 친화적 인터페이스

### ✅ **개발자 도구**
- 브라우저 콘솔에서 `window.RefineUITest` 객체 접근 가능
- 디버깅 정보 제공

## 🔧 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - 현대적인 스타일링 및 애니메이션
- **Vanilla JavaScript** - 순수 JavaScript로 구현
- **Web Fonts** - 아이콘 폰트 로딩

## 📁 파일 구조

```
web-test/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 로직
└── README.md           # 이 파일
```

## 🎯 사용법

### 1. **CDN Package 테스트**
1. "CDN Package Test" 섹션으로 이동
2. 드롭다운에서 아이콘 선택
3. 크기와 색상 조정
4. 실시간 미리보기 확인

### 2. **Web Package 테스트**
1. "Web Package Test" 섹션으로 이동
2. 검색창에 아이콘 이름 입력
3. 스타일과 크기 필터 선택
4. 그리드에서 아이콘 클릭하여 상호작용

### 3. **React Package 테스트**
1. "React Package Test" 섹션으로 이동
2. React 컴포넌트 사용법 시뮬레이션
3. props 변경 시 미리보기 업데이트

### 4. **React Native Package 테스트**
1. "React Native Package Test" 섹션으로 이동
2. 모바일 환경 시뮬레이션
3. 터치 이벤트 테스트

## 🐛 디버깅

### 브라우저 콘솔에서 사용 가능한 객체들:
```javascript
// 아이콘 매핑 데이터
window.RefineUITest.ICON_MAPPING

// 아이콘 이름 목록
window.RefineUITest.ICON_NAMES

// 아이콘 생성 함수
window.RefineUITest.createIcon('add', 24, '#007AFF', 'regular')

// 유니코드 변환 함수
window.RefineUITest.unicodeToChar('0xF0000')
```

### 폰트 로딩 확인:
```javascript
// 폰트 로딩 상태 확인
document.fonts.ready.then(() => {
    console.log('폰트 로딩 완료');
});
```

## 🎨 커스터마이징

### 색상 테마 변경:
`styles.css`에서 CSS 변수 수정:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --background-color: #f8f9fa;
}
```

### 아이콘 추가:
`script.js`의 `ICON_MAPPING` 객체에 새로운 아이콘 추가:
```javascript
const ICON_MAPPING = {
    'new_icon_24_regular': { 
        unicode: '0xF0010', 
        fontFamily: 'RefineUI-System-Icons-Regular' 
    }
};
```

## 📱 브라우저 지원

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🤝 기여하기

1. 이슈 리포트
2. 기능 제안
3. 코드 개선
4. 문서 업데이트

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**RefineUI System Icons** - 현대적이고 일관된 아이콘 시스템
