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
  data/works.ts          ← 레퍼런스 추가는 여기
  data/faqs.ts           ← FAQ 수정 (JSON-LD 자동 반영)
  content/insights/      ← 블로그 글 (md 파일 추가 = 발행)
  components/            ← 섹션 단위 컴포넌트
  layouts/Base.astro     ← SEO 메타·JSON-LD·분석 스크립트
public/
  robots.txt / llms.txt  ← 검색엔진·AI 크롤러 대응
docs/
  00_요구사항_회의추출   ← 2026-06-29 회의에서 추출한 요구사항 (기준 문서)
  01_디자인_레퍼런스     ← 디자인 참고 사이트 모음
```

## 배포 (Cloudflare Pages)

1. GitHub에 리포 푸시 (권장 이름: `banababridge-web`)
2. Cloudflare 대시보드 → **Workers & Pages → Create → Pages → Connect to Git**
3. 빌드 설정: Framework preset **Astro** / Build command `npm run build` / Output `dist`
4. **Custom domains** 에서 `banababridge.com`, `www.banababridge.com` 연결 (도메인이 이미 Cloudflare에 있으므로 자동)
5. 이후 `git push` = 자동 배포

## 런칭 체크리스트

- [ ] `src/config.ts` — **회사 전화번호 교체** (현재 placeholder)
- [ ] `public/og-default.jpg` — OG 이미지 (1200×630) 추가 (힉스필드 제작)
- [ ] Cloudflare Pages 배포 + 커스텀 도메인 연결
- [ ] **Google Search Console** 등록 → 소유확인 코드를 `config.ts`의 `googleVerification`에 → sitemap 제출 (`/sitemap-index.xml`)
- [ ] **네이버 서치어드바이저** 등록 → `naverVerification`에 코드 입력 → sitemap 제출
- [ ] **GA4** 속성 생성 → 측정 ID를 `ga4`에 입력
- [ ] **Cloudflare Web Analytics** 활성화 → 토큰을 `cfBeaconToken`에 입력
- [ ] Google Workspace 라우팅 확인 (hosoo@banababridge.com 수발신 테스트, contact@ 별칭 추가 권장)
- [ ] 도메인 이메일 워밍업 (지인들과 며칠 수발신 — 스팸 점수 관리)

## 콘텐츠 발행 (SEO/AEO/GEO 루틴)

- 주 1편 목표: `src/content/insights/슬러그.md` 생성 → push → 자동 발행
- frontmatter: `title`, `description`(150자 내), `pubDate`, `tags`
- 글마다 BlogPosting JSON-LD·sitemap 자동 반영, `public/llms.txt`에 주요 글 링크 추가
- 소재는 실무에서: 팬미팅 진행기, 유통 구조, 계약 체크리스트 등 (경험 기반 = E-E-A-T)
