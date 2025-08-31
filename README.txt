# 팬 허브 — 클래식 복원 v8R

## 구성
- index.html (단일 페이지 앱)
- config/app-config.json (Google Client ID / 관리자 이메일 / X 프록시)

## 배포
- 리포 루트에 위 두 항목(+ .nojekyll) 업로드
- Settings → Pages → Branch: main, Folder: /(root)
- Google OAuth: Authorized JavaScript origins에 배포 URL 등록

