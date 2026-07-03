// ============================================================
// 사이트 전역 설정 — 여기 한 곳만 고치면 전체 사이트에 반영됩니다.
// ============================================================

export const SITE = {
  /** 브랜드 표기명 (영문) */
  name: 'BANABA BRIDGE',
  /** 법인 정식 상호 */
  legalName: '주식회사 바나바브릿지',
  legalNameEn: 'BANABABRIDGE Co., Ltd.',
  /** 배포 도메인 */
  url: 'https://banababridge.com',

  /** 한 줄 소개 (기본 meta description) */
  description:
    '바나바브릿지는 팬미팅·팬콘서트·광고 에이전시와 글로벌 브랜드 유통(벤더)을 함께 운영하는 회사입니다. 검증과 계약으로 아티스트에겐 무대를, 브랜드에겐 시장을 연결합니다.',

  // ---------- 연락처 ----------
  /** TODO: 회사 대표번호 개통 후 교체 (E.164 형식) */
  phone: '+821000000000',
  /** 화면에 보여줄 번호 표기 */
  phoneDisplay: '010-0000-0000',
  email: 'hosoo@banababridge.com',

  // ---------- 법인 정보 (사업자등록증 기준) ----------
  bizNumber: '287-87-03018',
  address: '경기도 용인시 수지구 대지로 43, 6층 606-746호',
  addressEn: '43, Daeji-ro, Suji-gu, Yongin-si, Gyeonggi-do, Republic of Korea',
  foundingDate: '2023-04-03',

  // ---------- 분석 / 검색엔진 등록 (발급 후 값만 채우면 자동 삽입) ----------
  /** GA4 측정 ID — 예: 'G-XXXXXXXXXX' */
  ga4: '',
  /** Cloudflare Web Analytics 토큰 */
  cfBeaconToken: '',
  /** Google Search Console 소유 확인 코드 (content 값만) */
  googleVerification: '',
  /** 네이버 서치어드바이저 소유 확인 코드 */
  naverVerification: '',

  // ---------- SNS (개설 후 채우면 JSON-LD sameAs 에 반영) ----------
  sameAs: [] as string[],
};
