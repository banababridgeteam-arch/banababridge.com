# banababridge.com

주식회사 바나바브릿지 공식 홈페이지. Astro 정적 사이트 → Cloudflare Pages 배포.

## 개발

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 생성
npm run preview  # 빌드 결과 미리보기
```

## 구조

```
src/
  config.ts              ← ★ 전화번호·이메일·GA4·검증코드 전부 여기서 관리
  i18n/ui.ts             ← ★ 3개 언어(ko/en/zh) 카피 전부 여기서 관리
  data/works.ts          ← 레퍼런스 (제목은 3개 언어). image=IG파일명, video=public경로
  data/faqs.ts           ← FAQ (ko, FAQPage JSON-LD 자동 반영)
  content/insights/      ← 블로그 글 (md 파일 추가 = 발행, 한국어 SEO)
  components/Home.astro  ← 홈 섹션 조립 (Hero·About·Works·Services·Stats·Contact)
  components/            ← 섹션 컴포넌트 (전부 lang prop 받음)
  layouts/Base.astro     ← SEO 메타·hreflang·JSON-LD·폰트·분석
  pages/index.astro      ← ko (/)     pages/en/ (/en)   pages/zh/ (/zh)
  assets/ig/             ← 인스타그램 원본 미디어 (manifest.json에 캡션)
public/media/            ← 영상 (티파니 홍콩)
docs/                    ← 요구사항(기준문서)·디자인 레퍼런스
```

## 디자인

- 레퍼런스: **strove.mx** (순수 블랙 + 초대형 타이트 Inter 타이포 + `(01)` 섹션 라벨 + 거대 워드마크) + 샴페인 골드 단일 액센트
- 다국어: **한국어(기본, `/`) · English(`/en`) · 简体中文(`/zh`)**. 헤더 우측 `KO·EN·中` 스위처. hreflang·per-locale OG·sitemap i18n 자동
- 카피 수정 = `src/i18n/ui.ts` 한 곳. 레퍼런스 추가 = `src/data/works.ts`

## 배포 (Cloudflare Pages)

1. GitHub에 리포 푸시 (권장 이름: `banababridge-web`)
2. Cloudflare 대시보드 → **Workers & Pages → Create → Pages → Connect to Git**
3. 빌드 설정: Framework preset **Astro** / Build command `npm run build` / Output `dist`
4. **Custom domains** 에서 `banababridge.com`, `www.banababridge.com` 연결 (도메인이 이미 Cloudflare에 있으므로 자동)
5. 이후 `git push` = 자동 배포

## 런칭 체크리스트

- [ ] `src/config.ts` — **회사 전화번호 입력** (비어 있는 동안은 전화 CTA가 자동으로 이메일 문의로 대체됨. 번호 넣는 순간 전 사이트 전화 버튼 자동 활성화)
- [x] `public/og-default.jpg` — OG 이미지 (1200×630, 힉스필드 제작 완료)
- [ ] Cloudflare Pages 배포 + 커스텀 도메인 연결
- [ ] **Google Search Console** 등록 → 소유확인 코드를 `config.ts`의 `googleVerification`에 → sitemap 제출 (`/sitemap-index.xml`)
- [ ] **네이버 서치어드바이저** 등록 → `naverVerification`에 코드 입력 → sitemap + **RSS**(`/rss.xml`) 제출
- [ ] **GA4** 속성 생성 → 측정 ID를 `ga4`에 입력
- [ ] **Cloudflare Web Analytics** 활성화 → 토큰을 `cfBeaconToken`에 입력
- [ ] Google Workspace 라우팅 확인 (hosoo@banababridge.com 수발신 테스트, contact@ 별칭 추가 권장)
- [ ] 도메인 이메일 워밍업 (지인들과 며칠 수발신 — 스팸 점수 관리)

## 콘텐츠 발행 (SEO/AEO/GEO 루틴)

- 주 1편 목표: `src/content/insights/슬러그.md` 생성 → push → 자동 발행
- frontmatter: `title`, `description`(150자 내), `pubDate`, `tags`
- 글마다 BlogPosting JSON-LD·sitemap 자동 반영, `public/llms.txt`에 주요 글 링크 추가
- 소재는 실무에서: 팬미팅 진행기, 유통 구조, 계약 체크리스트 등 (경험 기반 = E-E-A-T)
