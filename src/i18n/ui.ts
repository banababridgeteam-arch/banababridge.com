// ============================================================
// 다국어 사전 (한국어 / English / 简体中文)
// 카피 수정은 여기 한 곳에서. 세 언어를 나란히 관리합니다.
// ============================================================

export const languages = {
  ko: '한국어',
  en: 'English',
  zh: '简体中文',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ko';
export const langOrder: Lang[] = ['ko', 'en', 'zh'];

/** 언어 스위처에 표시할 짧은 라벨 */
export const langLabel: Record<Lang, string> = { ko: 'KO', en: 'EN', zh: '中' };

/** OG/hreflang용 로케일 코드 */
export const langLocale: Record<Lang, string> = {
  ko: 'ko_KR',
  en: 'en_US',
  zh: 'zh_CN',
};
export const langHreflang: Record<Lang, string> = {
  ko: 'ko-KR',
  en: 'en',
  zh: 'zh-Hans',
};

/** 기본 언어(ko)는 접두어 없음. en → /en, zh → /zh */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}` : `/${lang}${clean}`;
}

type Dict = {
  meta: { title: string; desc: string };
  nav: { work: string; services: string; about: string; insights: string; contact: string };
  cta: { call: string; email: string; inquire: string };
  hero: { badge: string; line1: string; line2: string; sub: string; scroll: string };
  about: { label: string; head: string; body: string };
  work: { label: string; head: string; featured: string; comingSoon: string; ongoing: string; upcoming: string; done: string };
  services: { label: string; head: string; items: { no: string; title: string; desc: string }[] };
  stats: { label: string; items: { value: string; label: string }[] };
  contact: { label: string; head: string; body: string };
  footer: { tagline: string; menu: string; legal: string; privacy: string; rights: string };
};

export const ui: Record<Lang, Dict> = {
  // ---------------- 한국어 ----------------
  ko: {
    meta: {
      title: '바나바브릿지 — 엔터테인먼트 에이전시 & 글로벌 브랜드 유통',
      desc: '바나바브릿지는 팬미팅·팬콘서트·광고 에이전시와 글로벌 브랜드 유통을 운영합니다. 검증과 계약으로 아티스트에겐 무대를, 브랜드에겐 시장을 연결합니다.',
    },
    nav: { work: '프로젝트', services: '서비스', about: '소개', insights: '인사이트', contact: '문의' },
    cta: { call: '전화 상담', email: '이메일 문의', inquire: '프로젝트 문의' },
    hero: {
      badge: 'Entertainment Agency & Global Vendor',
      line1: '아티스트에겐 무대를,',
      line2: '브랜드에겐 시장을.',
      sub: '서울에서 상하이, 도쿄, 하노이까지 — 검증과 계약으로 A와 B를 잇는 글로벌 에이전시.',
      scroll: 'Scroll',
    },
    about: {
      label: '소개',
      head: '우리는 ‘연결’을 만듭니다.',
      body: '좋은 아티스트가 있어도 무대가 없으면, 좋은 제품이 있어도 팔 곳이 없으면 아무 일도 일어나지 않습니다. 바나바브릿지는 그 사이에 서서 검증된 프로세스와 계약으로 양쪽을 잇습니다.',
    },
    work: {
      label: '프로젝트',
      head: '기록으로 증명합니다.',
      featured: 'Featured',
      comingSoon: 'Coming Soon',
      ongoing: '진행 중',
      upcoming: '개최 예정',
      done: '완료',
    },
    services: {
      label: '서비스',
      head: '우리가 하는 일.',
      items: [
        { no: '01', title: '엔터테인먼트 에이전시', desc: 'K-아티스트 섭외와 출연 계약, 글로벌 프로젝트 운영.' },
        { no: '02', title: '팬미팅 · 콘서트', desc: '해외 팬미팅·팬콘서트 기획과 현지 운영.' },
        { no: '03', title: '브랜드 광고', desc: '브랜드 앰버서더·광고 에이전시.' },
        { no: '04', title: '브랜드 유통', desc: '브랜드 소싱과 국내외 판매 채널 연결.' },
      ],
    },
    stats: {
      label: '',
      items: [
        { value: 'SINCE 2023', label: '법인 운영' },
        { value: 'KR · CN · JP · VN', label: '글로벌 프로젝트' },
        { value: '100%', label: '계약 기반 진행' },
      ],
    },
    contact: {
      label: '문의',
      head: '연결이 필요하신가요?',
      body: '팬미팅·콘서트 에이전시, 아티스트 섭외, 브랜드 유통 제휴 — 영업일 기준 24시간 이내에 회신드립니다.',
    },
    footer: {
      tagline: '아티스트에겐 무대를, 브랜드에겐 시장을.',
      menu: '메뉴',
      legal: '사업자 정보',
      privacy: '개인정보처리방침',
      rights: 'All rights reserved.',
    },
  },

  // ---------------- English ----------------
  en: {
    meta: {
      title: 'BANABA BRIDGE — Entertainment Agency & Global Distribution',
      desc: 'BANABA BRIDGE runs fan-meeting and concert agency, brand advertising, and global brand distribution — bridging artists to stages and brands to markets through verification and contracts.',
    },
    nav: { work: 'Work', services: 'Services', about: 'About', insights: 'Insights', contact: 'Contact' },
    cta: { call: 'Call', email: 'Email us', inquire: 'Start a project' },
    hero: {
      badge: 'Entertainment Agency & Global Vendor',
      line1: 'The stage for artists.',
      line2: 'The market for brands.',
      sub: 'From Seoul to Shanghai, Tokyo and Hanoi — a global agency bridging A and B through verification and firm contracts.',
      scroll: 'Scroll',
    },
    about: {
      label: 'About',
      head: 'We build connections.',
      body: 'A great artist without a stage, a great product without a market — nothing happens. BANABA BRIDGE stands in between, connecting both sides through a proven process and firm contracts.',
    },
    work: {
      label: 'Work',
      head: 'Proven by the record.',
      featured: 'Featured',
      comingSoon: 'Coming Soon',
      ongoing: 'Ongoing',
      upcoming: 'Upcoming',
      done: 'Completed',
    },
    services: {
      label: 'Services',
      head: 'What we do.',
      items: [
        { no: '01', title: 'Entertainment Agency', desc: 'K-artist casting, appearance contracts and global project management.' },
        { no: '02', title: 'Fan Meeting & Concert', desc: 'Overseas fan meetings and concerts, from planning to on-site operation.' },
        { no: '03', title: 'Brand Advertising', desc: 'Brand ambassador and advertising agency.' },
        { no: '04', title: 'Brand Distribution', desc: 'Brand sourcing and connection to sales channels at home and abroad.' },
      ],
    },
    stats: {
      label: '',
      items: [
        { value: 'SINCE 2023', label: 'Incorporated' },
        { value: 'KR · CN · JP · VN', label: 'Global projects' },
        { value: '100%', label: 'Contract-based' },
      ],
    },
    contact: {
      label: 'Contact',
      head: 'Need a connection?',
      body: 'Fan-meeting and concert agency, artist casting, brand distribution — we reply within one business day.',
    },
    footer: {
      tagline: 'The stage for artists. The market for brands.',
      menu: 'Menu',
      legal: 'Company',
      privacy: 'Privacy Policy',
      rights: 'All rights reserved.',
    },
  },

  // ---------------- 简体中文 ----------------
  zh: {
    meta: {
      title: 'BANABA BRIDGE 巴纳巴桥 — 娱乐经纪与全球品牌分销',
      desc: 'BANABA BRIDGE 经营粉丝见面会、演唱会经纪、品牌广告及全球品牌分销，以严谨审核与契约为艺人搭建舞台、为品牌开拓市场。',
    },
    nav: { work: '项目', services: '服务', about: '关于', insights: '洞察', contact: '联系' },
    cta: { call: '致电咨询', email: '邮件联系', inquire: '开启合作' },
    hero: {
      badge: 'Entertainment Agency & Global Vendor',
      line1: '为艺人搭建舞台，',
      line2: '为品牌开拓市场。',
      sub: '从首尔到上海、东京与河内 —— 以严谨审核与契约连接甲乙双方的全球经纪公司。',
      scroll: 'Scroll',
    },
    about: {
      label: '关于',
      head: '我们创造连接。',
      body: '再优秀的艺人若没有舞台，再好的产品若没有市场，一切都无从谈起。BANABA BRIDGE 立于两者之间，以成熟的流程与严谨的契约连接双方。',
    },
    work: {
      label: '项目',
      head: '以实绩证明。',
      featured: '精选',
      comingSoon: '敬请期待',
      ongoing: '进行中',
      upcoming: '即将举办',
      done: '已完成',
    },
    services: {
      label: '服务',
      head: '我们所做的。',
      items: [
        { no: '01', title: '娱乐经纪', desc: '韩流艺人邀约、出演签约与全球项目运营。' },
        { no: '02', title: '见面会 · 演唱会', desc: '海外粉丝见面会与演唱会的企划及现场执行。' },
        { no: '03', title: '品牌广告', desc: '品牌代言与广告代理。' },
        { no: '04', title: '品牌分销', desc: '品牌选品与国内外销售渠道对接。' },
      ],
    },
    stats: {
      label: '',
      items: [
        { value: 'SINCE 2023', label: '法人成立' },
        { value: 'KR · CN · JP · VN', label: '全球项目' },
        { value: '100%', label: '契约为本' },
      ],
    },
    contact: {
      label: '联系',
      head: '需要一次连接吗？',
      body: '粉丝见面会与演唱会经纪、艺人邀约、品牌分销合作 —— 我们将在一个工作日内回复。',
    },
    footer: {
      tagline: '为艺人搭建舞台，为品牌开拓市场。',
      menu: '菜单',
      legal: '公司信息',
      privacy: '隐私政策',
      rights: 'All rights reserved.',
    },
  },
};

export function useTranslations(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}
