// ============================================================
// 다국어 사전 (한국어 / English / 简体中文 / Tiếng Việt)
// 카피 수정은 여기 한 곳에서. 네 언어를 나란히 관리합니다.
// ============================================================

export const languages = {
  ko: '한국어',
  en: 'English',
  zh: '简体中文',
  vi: 'Tiếng Việt',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ko';
export const langOrder: Lang[] = ['ko', 'en', 'zh', 'vi'];

export const langLabel: Record<Lang, string> = { ko: 'KO', en: 'EN', zh: '中', vi: 'VI' };
export const langLocale: Record<Lang, string> = {
  ko: 'ko_KR', en: 'en_US', zh: 'zh_CN', vi: 'vi_VN',
};
export const langHreflang: Record<Lang, string> = {
  ko: 'ko-KR', en: 'en', zh: 'zh-Hans', vi: 'vi',
};

/** 기본 언어(ko)는 접두어 없음. en → /en, zh → /zh, vi → /vi */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}` : `/${lang}${clean}`;
}

type SvcItem = { no: string; title: string; desc: string };
type StatItem = { value: string; label: string };
type Dict = {
  meta: { title: string; desc: string };
  nav: { work: string; services: string; about: string; insights: string; contact: string };
  cta: { call: string; email: string; inquire: string };
  hero: { badge: string; line1: string; line2: string; sub: string; recent: string; rotate: string[]; scroll: string };
  about: { label: string; head: string; body: string; ax: string };
  work: { label: string; head: string; featured: string; comingSoon: string; ongoing: string; upcoming: string; done: string };
  services: { label: string; head: string; items: SvcItem[] };
  stats: { items: StatItem[] };
  faq: { label: string; head: string; items: { q: string; a: string }[] };
  contact: { label: string; head: string; body: string };
  footer: { tagline: string; menu: string; legal: string; privacy: string; rights: string };
};

export const ui: Record<Lang, Dict> = {
  // ---------------- 한국어 ----------------
  ko: {
    meta: {
      title: '바나바브릿지 — 엔터테인먼트 에이전시 & 글로벌 브랜드 유통',
      desc: '바나바브릿지는 팬미팅·팬콘서트·광고 에이전시와 글로벌 브랜드 유통을 운영합니다. 검증과 계약, 자체 운영 시스템으로 아티스트에겐 무대를, 브랜드에겐 시장을 연결합니다.',
    },
    nav: { work: '프로젝트', services: '서비스', about: '소개', insights: '인사이트', contact: '문의' },
    cta: { call: '전화 상담', email: '이메일 문의', inquire: '프로젝트 문의' },
    hero: {
      badge: 'Entertainment Agency & Global Vendor',
      line1: '아티스트에겐 무대를,',
      line2: '브랜드에겐 시장을.',
      sub: '서울에서 상하이, 도쿄, 하노이까지 — 검증과 계약으로 A와 B를 잇는 글로벌 에이전시.',
      recent: '최근 진행',
      rotate: ['TIFFANY 홍콩 · 박형식', '효민 상하이 팬미팅', '효민 호치민 팬미팅', 'SPECULUM × SEVENTEEN'],
      scroll: 'Scroll',
    },
    about: {
      label: '소개',
      head: '우리는 ‘연결’을 만듭니다.',
      body: '좋은 아티스트가 있어도 무대가 없으면, 좋은 제품이 있어도 팔 곳이 없으면 아무 일도 일어나지 않습니다. 바나바브릿지는 그 사이에 서서 검증된 프로세스와 계약으로 양쪽을 잇습니다.',
      ax: '검증·계약·정산·콘텐츠를 자체 시스템으로 운영합니다. 판단은 사람이, 반복 업무는 AI가 맡아 더 빠르고 정확하게 움직입니다.',
    },
    work: {
      label: '프로젝트', head: '기록으로 증명합니다.',
      featured: 'Featured', comingSoon: 'Coming Soon', ongoing: '진행 중', upcoming: '개최 예정', done: '완료',
    },
    services: {
      label: '서비스', head: '우리가 하는 일.',
      items: [
        { no: '01', title: '엔터테인먼트 에이전시', desc: 'K-아티스트 섭외와 출연 계약, 글로벌 프로젝트 운영.' },
        { no: '02', title: '팬미팅 · 콘서트', desc: '해외 팬미팅·팬콘서트 기획과 현지 운영.' },
        { no: '03', title: '브랜드 광고', desc: '브랜드 앰버서더·광고 에이전시.' },
        { no: '04', title: '브랜드 유통', desc: '브랜드 소싱과 국내외 판매 채널 연결.' },
        { no: '05', title: 'AX · 운영 시스템', desc: '검증·계약·정산·콘텐츠를 자동화하는 자체 운영 시스템.' },
      ],
    },
    stats: {
      items: [
        { value: '2023', label: '법인 설립' },
        { value: '4', label: '글로벌 진출국 (KR·CN·JP·VN)' },
        { value: '100', label: '계약 기반 진행 (%)' },
      ],
    },
    faq: {
      label: 'FAQ', head: '자주 묻는 질문.',
      items: [
        { q: '어떤 프로젝트를 진행하나요?', a: '해외 팬미팅·팬콘서트, K-아티스트 섭외와 브랜드 광고 에이전시, 그리고 브랜드 유통(벤더)을 진행합니다.' },
        { q: '진행 절차는 어떻게 되나요?', a: '검증 → 계약 → 실행 → 기록의 4단계로 진행합니다. 주최·베뉴·조건을 먼저 확인하고, 반드시 계약서 기반으로 착수합니다.' },
        { q: '브랜드 유통 제휴는 어떻게 하나요?', a: '제품을 검토한 뒤 적합한 국내외 판매 채널과 연결합니다. 이메일로 제품 소개서를 보내주시면 검토 후 회신드립니다.' },
        { q: '문의하면 언제 회신되나요?', a: '이메일로 문의 주시면 영업일 기준 24시간 이내에 회신드립니다.' },
      ],
    },
    contact: {
      label: '문의', head: '연결이 필요하신가요?',
      body: '팬미팅·콘서트 에이전시, 아티스트 섭외, 브랜드 유통 제휴 — 영업일 기준 24시간 이내에 회신드립니다.',
    },
    footer: { tagline: '아티스트에겐 무대를, 브랜드에겐 시장을.', menu: '메뉴', legal: '사업자 정보', privacy: '개인정보처리방침', rights: 'All rights reserved.' },
  },

  // ---------------- English ----------------
  en: {
    meta: {
      title: 'BANABA BRIDGE — Entertainment Agency & Global Distribution',
      desc: 'BANABA BRIDGE runs fan-meeting and concert agency, brand advertising, and global brand distribution — bridging artists to stages and brands to markets through verification, contracts and an in-house operating system.',
    },
    nav: { work: 'Work', services: 'Services', about: 'About', insights: 'Insights', contact: 'Contact' },
    cta: { call: 'Call', email: 'Email us', inquire: 'Start a project' },
    hero: {
      badge: 'Entertainment Agency & Global Vendor',
      line1: 'The stage for artists.',
      line2: 'The market for brands.',
      sub: 'From Seoul to Shanghai, Tokyo and Hanoi — a global agency bridging A and B through verification and firm contracts.',
      recent: 'Recent work',
      rotate: ['TIFFANY Hong Kong · Park Hyung-sik', 'HYOMIN Shanghai Fan Meeting', 'HYOMIN Ho Chi Minh Fan Meeting', 'SPECULUM × SEVENTEEN'],
      scroll: 'Scroll',
    },
    about: {
      label: 'About',
      head: 'We build connections.',
      body: 'A great artist without a stage, a great product without a market — nothing happens. BANABA BRIDGE stands in between, connecting both sides through a proven process and firm contracts.',
      ax: 'We run verification, contracts, settlement and content on our own system. People make the calls; AI handles the repetition — so we move faster and more precisely.',
    },
    work: {
      label: 'Work', head: 'Proven by the record.',
      featured: 'Featured', comingSoon: 'Coming Soon', ongoing: 'Ongoing', upcoming: 'Upcoming', done: 'Completed',
    },
    services: {
      label: 'Services', head: 'What we do.',
      items: [
        { no: '01', title: 'Entertainment Agency', desc: 'K-artist casting, appearance contracts and global project management.' },
        { no: '02', title: 'Fan Meeting & Concert', desc: 'Overseas fan meetings and concerts, from planning to on-site operation.' },
        { no: '03', title: 'Brand Advertising', desc: 'Brand ambassador and advertising agency.' },
        { no: '04', title: 'Brand Distribution', desc: 'Brand sourcing and connection to sales channels at home and abroad.' },
        { no: '05', title: 'AX · Operating System', desc: 'An in-house system that automates verification, contracts, settlement and content.' },
      ],
    },
    stats: {
      items: [
        { value: '2023', label: 'Incorporated' },
        { value: '4', label: 'Countries (KR·CN·JP·VN)' },
        { value: '100', label: 'Contract-based (%)' },
      ],
    },
    faq: {
      label: 'FAQ', head: 'Frequently asked.',
      items: [
        { q: 'What kind of projects do you run?', a: 'Overseas fan meetings and concerts, K-artist casting and brand advertising agency, and brand distribution (vendor).' },
        { q: 'How does a project proceed?', a: 'In four steps — verify, contract, execute, record. We confirm the host, venue and terms first, and always start from a signed contract.' },
        { q: 'How do brand distribution partnerships work?', a: 'We review your product and connect it to the right sales channels at home and abroad. Send us your product deck by email and we will reply after review.' },
        { q: 'How soon will you reply?', a: 'Email us and we reply within one business day.' },
      ],
    },
    contact: {
      label: 'Contact', head: 'Need a connection?',
      body: 'Fan-meeting and concert agency, artist casting, brand distribution — we reply within one business day.',
    },
    footer: { tagline: 'The stage for artists. The market for brands.', menu: 'Menu', legal: 'Company', privacy: 'Privacy Policy', rights: 'All rights reserved.' },
  },

  // ---------------- 简体中文 ----------------
  zh: {
    meta: {
      title: 'BANABA BRIDGE 巴纳巴桥 — 娱乐经纪与全球品牌分销',
      desc: 'BANABA BRIDGE 经营粉丝见面会、演唱会经纪、品牌广告及全球品牌分销，以严谨审核、契约与自研运营系统，为艺人搭建舞台、为品牌开拓市场。',
    },
    nav: { work: '项目', services: '服务', about: '关于', insights: '洞察', contact: '联系' },
    cta: { call: '致电咨询', email: '邮件联系', inquire: '开启合作' },
    hero: {
      badge: 'Entertainment Agency & Global Vendor',
      line1: '为艺人搭建舞台，',
      line2: '为品牌开拓市场。',
      sub: '从首尔到上海、东京与河内 —— 以严谨审核与契约连接甲乙双方的全球经纪公司。',
      recent: '近期项目',
      rotate: ['TIFFANY 香港 · 朴炯植', '孝敏 上海见面会', '孝敏 胡志明见面会', 'SPECULUM × SEVENTEEN'],
      scroll: 'Scroll',
    },
    about: {
      label: '关于',
      head: '我们创造连接。',
      body: '再优秀的艺人若没有舞台，再好的产品若没有市场，一切都无从谈起。BANABA BRIDGE 立于两者之间，以成熟的流程与严谨的契约连接双方。',
      ax: '审核、契约、结算与内容均由自研系统运营。判断交给人，重复交给 AI —— 更快、更准。',
    },
    work: {
      label: '项目', head: '以实绩证明。',
      featured: '精选', comingSoon: '敬请期待', ongoing: '进行中', upcoming: '即将举办', done: '已完成',
    },
    services: {
      label: '服务', head: '我们所做的。',
      items: [
        { no: '01', title: '娱乐经纪', desc: '韩流艺人邀约、出演签约与全球项目运营。' },
        { no: '02', title: '见面会 · 演唱会', desc: '海外粉丝见面会与演唱会的企划及现场执行。' },
        { no: '03', title: '品牌广告', desc: '品牌代言与广告代理。' },
        { no: '04', title: '品牌分销', desc: '品牌选品与国内外销售渠道对接。' },
        { no: '05', title: 'AX · 运营系统', desc: '将审核、契约、结算与内容自动化的自研运营系统。' },
      ],
    },
    stats: {
      items: [
        { value: '2023', label: '法人成立' },
        { value: '4', label: '出海国家 (KR·CN·JP·VN)' },
        { value: '100', label: '契约为本 (%)' },
      ],
    },
    faq: {
      label: 'FAQ', head: '常见问题。',
      items: [
        { q: '你们承接哪些项目？', a: '海外粉丝见面会与演唱会、韩流艺人邀约与品牌广告代理，以及品牌分销（供应商）。' },
        { q: '项目如何推进？', a: '分为审核、签约、执行、记录四步。先确认主办方、场地与条件，并始终以签署的合同为起点。' },
        { q: '品牌分销合作如何进行？', a: '我们会审核产品并对接合适的国内外销售渠道。请将产品资料发送至邮箱，审核后回复。' },
        { q: '多久会回复？', a: '通过邮件联系，我们将在一个工作日内回复。' },
      ],
    },
    contact: {
      label: '联系', head: '需要一次连接吗？',
      body: '粉丝见面会与演唱会经纪、艺人邀约、品牌分销合作 —— 我们将在一个工作日内回复。',
    },
    footer: { tagline: '为艺人搭建舞台，为品牌开拓市场。', menu: '菜单', legal: '公司信息', privacy: '隐私政策', rights: 'All rights reserved.' },
  },

  // ---------------- Tiếng Việt ----------------
  vi: {
    meta: {
      title: 'BANABA BRIDGE — Công ty Giải trí & Phân phối Toàn cầu',
      desc: 'BANABA BRIDGE điều hành đại lý fanmeeting và concert, quảng cáo thương hiệu và phân phối thương hiệu toàn cầu — kết nối nghệ sĩ với sân khấu và thương hiệu với thị trường bằng thẩm định, hợp đồng và hệ thống vận hành nội bộ.',
    },
    nav: { work: 'Dự án', services: 'Dịch vụ', about: 'Giới thiệu', insights: 'Insights', contact: 'Liên hệ' },
    cta: { call: 'Gọi ngay', email: 'Gửi email', inquire: 'Bắt đầu dự án' },
    hero: {
      badge: 'Entertainment Agency & Global Vendor',
      line1: 'Sân khấu cho nghệ sĩ,',
      line2: 'thị trường cho thương hiệu.',
      sub: 'Từ Seoul đến Thượng Hải, Tokyo và Hà Nội — công ty toàn cầu kết nối A và B bằng thẩm định và hợp đồng chặt chẽ.',
      recent: 'Dự án gần đây',
      rotate: ['TIFFANY Hồng Kông · Park Hyung-sik', 'HYOMIN Fanmeeting Thượng Hải', 'HYOMIN Fanmeeting Hồ Chí Minh', 'SPECULUM × SEVENTEEN'],
      scroll: 'Scroll',
    },
    about: {
      label: 'Giới thiệu',
      head: 'Chúng tôi tạo nên kết nối.',
      body: 'Một nghệ sĩ tài năng mà không có sân khấu, một sản phẩm tốt mà không có thị trường — sẽ chẳng có gì xảy ra. BANABA BRIDGE đứng ở giữa, kết nối cả hai phía bằng quy trình đã được kiểm chứng và hợp đồng chặt chẽ.',
      ax: 'Thẩm định, hợp đồng, quyết toán và nội dung đều vận hành trên hệ thống riêng. Con người ra quyết định, AI xử lý phần lặp lại — nhanh hơn và chính xác hơn.',
    },
    work: {
      label: 'Dự án', head: 'Chứng minh bằng thành tích.',
      featured: 'Featured', comingSoon: 'Coming Soon', ongoing: 'Đang tiến hành', upcoming: 'Sắp diễn ra', done: 'Hoàn thành',
    },
    services: {
      label: 'Dịch vụ', head: 'Những gì chúng tôi làm.',
      items: [
        { no: '01', title: 'Đại lý giải trí', desc: 'Tuyển chọn nghệ sĩ Hàn, hợp đồng biểu diễn và vận hành dự án toàn cầu.' },
        { no: '02', title: 'Fanmeeting · Concert', desc: 'Fanmeeting và concert tại nước ngoài, từ lên kế hoạch đến vận hành tại chỗ.' },
        { no: '03', title: 'Quảng cáo thương hiệu', desc: 'Đại sứ thương hiệu và đại lý quảng cáo.' },
        { no: '04', title: 'Phân phối thương hiệu', desc: 'Tìm nguồn thương hiệu và kết nối kênh bán hàng trong và ngoài nước.' },
        { no: '05', title: 'AX · Hệ thống vận hành', desc: 'Hệ thống nội bộ tự động hóa thẩm định, hợp đồng, quyết toán và nội dung.' },
      ],
    },
    stats: {
      items: [
        { value: '2023', label: 'Thành lập' },
        { value: '4', label: 'Quốc gia (KR·CN·JP·VN)' },
        { value: '100', label: 'Dựa trên hợp đồng (%)' },
      ],
    },
    faq: {
      label: 'FAQ', head: 'Câu hỏi thường gặp.',
      items: [
        { q: 'Bạn thực hiện những dự án nào?', a: 'Fanmeeting và concert tại nước ngoài, tuyển chọn nghệ sĩ Hàn và đại lý quảng cáo thương hiệu, cùng phân phối thương hiệu (vendor).' },
        { q: 'Dự án được tiến hành ra sao?', a: 'Theo bốn bước — thẩm định, hợp đồng, thực thi, ghi nhận. Chúng tôi xác minh nhà tổ chức, địa điểm và điều khoản trước, luôn bắt đầu từ hợp đồng đã ký.' },
        { q: 'Hợp tác phân phối thương hiệu thế nào?', a: 'Chúng tôi xem xét sản phẩm và kết nối tới kênh bán phù hợp trong và ngoài nước. Hãy gửi hồ sơ sản phẩm qua email, chúng tôi sẽ phản hồi sau khi xem xét.' },
        { q: 'Bao lâu sẽ được phản hồi?', a: 'Gửi email cho chúng tôi và bạn sẽ nhận phản hồi trong một ngày làm việc.' },
      ],
    },
    contact: {
      label: 'Liên hệ', head: 'Cần một kết nối?',
      body: 'Đại lý fanmeeting và concert, tuyển chọn nghệ sĩ, phân phối thương hiệu — chúng tôi phản hồi trong vòng một ngày làm việc.',
    },
    footer: { tagline: 'Sân khấu cho nghệ sĩ, thị trường cho thương hiệu.', menu: 'Menu', legal: 'Công ty', privacy: 'Chính sách bảo mật', rights: 'All rights reserved.' },
  },
};

export function useTranslations(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}
