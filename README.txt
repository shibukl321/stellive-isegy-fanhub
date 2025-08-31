# Stellive & Isegye Fan Hub — Static Bundle v9.3

이 폴더를 GitHub 리포지토리 루트에 그대로 업로드한 뒤,
**Settings → Pages → Branch: main / Folder: /(root)** 로 설정하면 배포됩니다.

## 파일 구성
- `index.html` — 단일 페이지 앱(로그인/최애/투표/일기/고백함/갤러리/커버/라이브 배너)
- `config/app-config.json` — 설정 파일 (Google Client ID, 관리자 이메일, X 프록시)
  - googleClientId: 669302423820-r62aj48h4pf8gn5ba37s15ojrid0bmma.apps.googleusercontent.com
  - adminEmails: qw0907qw@gmail.com
  - xProxyBase: ""  (프록시 없으면 타임라인 폴백)

## Google OAuth origins 등록
- 예: https://<사용자명>.github.io 또는 https://<사용자명>.github.io/<리포지토리명>

## 개발 팁
- 로컬 테스트: `npx http-server . -p 8080`
- 로컬 origins: http://127.0.0.1:8080