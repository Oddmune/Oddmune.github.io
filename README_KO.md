# 포트폴리오 사이트 사용법

순수 HTML/CSS/JS로 만든 사이트예요. 빌드 과정이 없어서 파일을 고치고 GitHub에 올리면 바로 반영됩니다.

## 파일 구조

```
index.html              ← 메인 (이름, 직무, 소셜 버튼, 프로젝트 카드)
about.html              ← About Me
resume.html             ← 이력서 보기 + 다운로드
projects/
  smorge.html           ← 프로젝트 상세 페이지
  gourmet-of-fire.html
  _template.html        ← 새 프로젝트용 빈 템플릿
assets/
  css/style.css         ← 디자인 (맨 위 :root 에서 색/폰트 변경)
  js/main.js            ← ★ 이름, 직무, 이메일, 소셜 링크는 여기 맨 위 SITE 에서만 고치면 됨
  images/               ← 이미지
  docs/MingyeomSong_Resume.pdf  ← 이력서 PDF (같은 이름으로 덮어쓰면 업데이트 끝)
.nojekyll               ← GitHub Pages가 Jekyll을 돌리지 않게 하는 빈 파일 (지우지 말 것)
```

## 자주 하는 작업

**소셜 링크 바꾸기 (예: ECO 링크 넣기)**
`assets/js/main.js` 맨 위 `socials` 에서 `url: "#"` 부분을 실제 주소로 바꾸면, 모든 페이지의 헤더/푸터/버튼이 한 번에 바뀝니다.

**이력서 업데이트**
새 PDF 파일 이름을 `MingyeomSong_Resume.pdf` 로 바꿔서 `assets/docs/` 에 덮어쓰기.

**새 프로젝트 추가**
1. `projects/_template.html` 을 복사해서 `projects/새이름.html` 로 저장
2. 노란 점선으로 표시된 `TODO` 부분을 채우고 `class="todo"` 표시는 지우기
3. 이미지를 `assets/images/` 에 올리고 캐러셀의 `<div class="slide-placeholder">` 를 `<img src="../assets/images/파일.jpg" alt="설명">` 로 바꾸기
4. `index.html` 에서 프로젝트 카드 `<a class="card">...</a>` 블록 하나를 복사해서 링크, 이미지, 글자 바꾸기

**글자 강조하기**
- `<span class="key">텍스트</span>` → 주황색 굵은 글씨 (핵심 기술)
- `<span class="hl">텍스트</span>` → 형광펜 밑줄 (결과, 성과)
- `<span class="key2">텍스트</span>` → 청록색 굵은 글씨

**이미지 크기**
사진은 가로 1600px 정도로 줄여서 올리세요. 원본(8000px 등)을 그대로 올리면 사이트가 느려집니다.

## 내 컴퓨터에서 미리 보기
`index.html` 을 더블클릭하면 브라우저에서 열려요. 그대로 확인하면 됩니다.
