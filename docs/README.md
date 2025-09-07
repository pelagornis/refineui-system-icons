# RefineUI System Icons Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

RefineUI System Icons의 공식 문서 사이트입니다. 다양한 플랫폼에서 사용할 수 있는 아이콘 라이브러리에 대한 가이드와 참조 자료를 제공합니다.

## 🚀 프로젝트 구조

이 문서 사이트는 Astro + Starlight로 구축되었습니다:

```
docs/
├── public/           # 정적 자산 (favicon 등)
├── src/
│   ├── assets/       # 이미지 및 기타 자산
│   ├── content/
│   │   └── docs/     # 문서 콘텐츠 (.md, .mdx 파일)
│   └── content.config.ts
├── astro.config.mjs  # Astro 설정
├── package.json      # 의존성 및 스크립트
└── tsconfig.json     # TypeScript 설정
```

## 🧞 개발 명령어

docs 폴더에서 다음 명령어들을 실행할 수 있습니다:

| 명령어                   | 동작                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 의존성 설치                                    |
| `npm run dev`             | 로컬 개발 서버 시작 (`localhost:4321`)         |
| `npm run build`           | 프로덕션 사이트 빌드 (`./dist/`)               |
| `npm run preview`         | 빌드 미리보기                                   |
| `npm run astro ...`       | Astro CLI 명령어 실행                           |
| `npm run astro -- --help` | Astro CLI 도움말 보기                           |

## 📚 문서 내용

- **플랫폼별 가이드**: Flutter, React, React Native, iOS, Android, Web
- **아이콘 참조**: 모든 사용 가능한 아이콘 목록
- **설치 및 사용법**: 각 플랫폼별 설치 및 사용 가이드
- **커스터마이징**: 아이콘 스타일링 및 테마 설정

## 🔗 관련 링크

- [GitHub 저장소](https://github.com/pelagornis/refineui-system-icons)
- [Starlight 문서](https://starlight.astro.build/)
- [Astro 문서](https://docs.astro.build)
