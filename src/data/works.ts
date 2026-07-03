// ============================================================
// 레퍼런스 데이터 — 새 레퍼런스가 생기면 여기만 추가하면 됩니다.
// image: src/assets/ig/ 의 파일명 (Works.astro 가 자동 매칭·최적화)
// video: public/media/ 경로 (featured 카드에서 재생)
// 주의: 계약 종결/공개 승인된 건만 실명 공개. 공개 수위는 인스타그램
//       (@banababridge) 공개 게시물 기준 — 2026-07-03 강호수 결정.
// ============================================================

export interface Work {
  index: string;
  category: 'ENTERTAINMENT' | 'VENDOR' | 'BRAND';
  title: string;
  desc: string;
  year: string;
  status?: string;
  image?: string;       // src/assets/ig/ 파일명
  video?: string;       // public 경로 (예: /media/xxx.mp4)
  featured?: boolean;   // 와이드 피처드 카드
  brandLogo?: boolean;  // 로고 중심 브랜드 카드 (SUNDRIES)
}

export const works: Work[] = [
  {
    index: '01',
    category: 'ENTERTAINMENT',
    title: 'TIFFANY 홍콩 — 박형식 행사',
    desc: '티파니 홍콩 행사에 배우 박형식의 출연 에이전시와 현장 진행을 담당했습니다. 글로벌 럭셔리 브랜드와 K-아티스트를 잇는 바나바브릿지의 대표 레퍼런스입니다.',
    year: '2026',
    image: '07_1_DWl43nnEVMK_poster.jpg',
    video: '/media/tiffany-hk-parkhyungsik.mp4',
    featured: true,
  },
  {
    index: '02',
    category: 'ENTERTAINMENT',
    title: "효민(T-ara) 'My Hyomin Moment' 상하이 팬미팅",
    desc: '섭외 계약부터 비자·스태프·현지 운영 조율까지 팬미팅 전 과정을 에이전시로 진행하고 있습니다.',
    year: '2026.07.25',
    status: '개최 예정', // TODO: 행사 종료 후 과거형으로 변경 + status 제거
    image: '01_1_DaDEJb-yO6I.jpg',
  },
  {
    index: '03',
    category: 'ENTERTAINMENT',
    title: "효민(T-ara) 'HYOMIN'S DAY' 호치민 팬미팅",
    desc: '호치민 C30 스테이지에서 열린 버스데이 팬미팅을 현지 파트너들과 함께 기획·진행했습니다.',
    year: '2026.05',
    image: '04_1_DW3nKCqEd3l.jpg',
  },
  {
    index: '04',
    category: 'VENDOR',
    title: 'SPECULUM × SEVENTEEN 캠페인 서포트',
    desc: '아이웨어 브랜드 스페큘럼의 세븐틴 협업 캠페인에서 아티스트 현장 서포트를 진행했습니다.',
    year: '2026',
    image: '06_1_DW1a1ilkZXT.jpg',
  },
  {
    index: '05',
    category: 'ENTERTAINMENT',
    title: '글로벌 예능 프로젝트 — 공동 MC 섭외',
    desc: '해외 방송사 협업 예능 프로그램의 K-아티스트 공동 MC 섭외를 진행하고 있습니다.',
    year: '2026',
    status: '진행 중',
  },
  {
    index: '06',
    category: 'BRAND',
    title: 'SUNDRIES Archive — 아이웨어 브랜드',
    desc: '바나바브릿지가 직접 준비하고 있는 아이웨어 브랜드. 가볍게 쓰는 클래식을 곧 선보입니다.',
    year: '2026',
    status: 'COMING SOON',
    brandLogo: true,
  },
];
