// ============================================================
// 레퍼런스 데이터 — 새 레퍼런스가 생기면 여기만 추가하면 됩니다.
// 주의: 계약 종결/공개 승인된 건만 실명 공개. 진행 중 건은 익명 표기.
//       (아티스트 사진·포스터는 초상권/저작권 확인 후 image 필드에 추가)
// ============================================================

export interface Work {
  index: string;
  category: 'ENTERTAINMENT' | 'VENDOR';
  title: string;
  desc: string;
  year: string;
  status?: string;
  image?: string; // /works/xxx.jpg (public 폴더 기준) — 준비되면 추가
}

export const works: Work[] = [
  {
    index: '01',
    category: 'ENTERTAINMENT',
    title: '글로벌 주얼리 브랜드 행사 — 아티스트 에이전시',
    desc: '글로벌 브랜드 초청 행사에 K-아티스트 섭외·출연 계약·현장 진행을 대행했습니다.',
    year: '2026',
  },
  {
    index: '02',
    category: 'ENTERTAINMENT',
    title: '효민(T-ara) 상하이 팬미팅',
    desc: '섭외 계약부터 비자·스태프·현지 운영 조율까지 팬미팅 전 과정을 에이전시로 진행하고 있습니다.',
    year: '2026.07',
    status: '개최 예정', // TODO: 행사(7/24) 종료 후 과거형으로 변경 + status 제거
  },
  {
    index: '03',
    category: 'ENTERTAINMENT',
    title: '글로벌 예능 프로젝트 — 공동 MC 섭외',
    desc: '해외 방송사 협업 예능 프로그램의 K-아티스트 공동 MC 섭외를 진행하고 있습니다.',
    year: '2026',
    status: '진행 중',
  },
  {
    index: '04',
    category: 'VENDOR',
    title: '브랜드 유통 파트너십 — 아이웨어·뷰티',
    desc: '아이웨어·뷰티 카테고리 브랜드 소싱과 국내외 판매 채널 연결을 운영하고 있습니다.',
    year: 'ONGOING',
  },
];
