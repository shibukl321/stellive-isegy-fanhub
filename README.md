
# Fan Hub (Google 버튼 고정 렌더 버전)

- BACKEND_BASE = https://stelive-shibuki321.io0907op.workers.dev
- GOOGLE_AUDIENCE = 396083519795-tjobbihd8jk9bvr76mf4ofrub5d17i0q.apps.googleusercontent.com

## 설치/배포
- Zip 풀고 GitHub Pages 루트에 업로드 → Settings → Pages → Branch: main, Folder: /root
- 주소: 사용자 페이지면 https://shibukl321.github.io (또는 프로젝트 주소)

## 중요
- Google Cloud Console > 승인된 JavaScript 출처에 프런트 주소 추가
- Worker는 /auth/google 에서 SameSite=None; Secure 쿠키 설정
