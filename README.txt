# 팬 허브(복구판 v9.1C)

이 버전은 **이전 기능을 복원**하고, 최근에 마음에 들었던 **메인(히어로) 디자인**만 유지한 하이브리드입니다.

## 포함 기능
- 전 멤버(스텔라이브 10 + 이세돌 6) 카드 / 검색 / 그룹 필터 / 최애(다중)
- 팬아트: X 해시태그 기반
  - 프록시가 있으면: 일 3장 랜덤 전시 + 관리자 1장 고정
  - 프록시가 없으면: 해시태그 타임라인 링크 폴백
  - 수동 업로드, 트윗 임베드(관리자)
- 커버곡: 전 멤버 YouTube 재생목록 임베드
- 덕질 일기/익명 고백함: 작성·삭제(로컬 저장)
- 투표: 월 1표(브라우저 단위), 범위 필터, 내 투표 확인, 막대 차트
- Google 로그인(GIS) + 관리자 이메일 화이트리스트 표시

## 파일 구성
repo/
 ├─ index.html
 ├─ .nojekyll
 └─ config/
     └─ app-config.json  # Client ID/관리자 이메일/xProxyBase

## 배포(A 방법)
1) GitHub 리포 루트에 위 파일 업로드
2) Settings → Pages → Branch: main, Folder: /(root)
3) Google OAuth의 Authorized JavaScript origins에
   https://<사용자>.github.io (또는 프로젝트 주소) 등록

