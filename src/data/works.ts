// ============================================================
// 레퍼런스 데이터 (3개 언어 제목)
// - image: src/assets/ig/ 파일명 (Works.astro 자동 매칭·최적화)
// - video: public/media/ 경로 (featured 카드에서 재생)
// - 공개 수위 기준 = 인스타그램 @banababridge 공개 게시물 (2026-07-03 강호수)
// - 미니멀 원칙: 카드에는 카테고리·제목·연도만. 긴 설명 없음.
// ============================================================
import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;

export interface Work {
  index: string;
  category: 'ENTERTAINMENT' | 'VENDOR' | 'BRAND';
  title: L;
  year: string;
  location?: string;
  statusKey?: 'ongoing' | 'upcoming' | 'comingSoon';
  image?: string;      // src/assets/ig/ 파일명
  video?: string;      // public 경로
  link?: string;       // 클릭 시 이동 (인스타 해당 게시물)
  featured?: boolean;
  brandLogo?: boolean;
}

export const works: Work[] = [
  {
    index: '01',
    category: 'ENTERTAINMENT',
    title: {
      ko: 'TIFFANY 홍콩 — 박형식',
      en: 'TIFFANY Hong Kong — Park Hyung-sik',
      zh: 'TIFFANY 香港 — 朴炯植',
      vi: 'TIFFANY Hồng Kông — Park Hyung-sik',
    },
    year: '2026',
    location: 'HONG KONG',
    image: '07_1_DWl43nnEVMK_poster.jpg',
    video: '/media/tiffany-hk-parkhyungsik.mp4',
    link: 'https://www.instagram.com/p/DWl43nnEVMK/',
    featured: true,
  },
  {
    index: '02',
    category: 'ENTERTAINMENT',
    title: {
      ko: '효민 · My Hyomin Moment 상하이',
      en: 'HYOMIN · My Hyomin Moment, Shanghai',
      zh: '孝敏 · My Hyomin Moment 上海',
      vi: 'HYOMIN · My Hyomin Moment, Thượng Hải',
    },
    year: '2026.07',
    location: 'SHANGHAI',
    statusKey: 'upcoming',
    image: '01_1_DaDEJb-yO6I.jpg',
    link: 'https://www.instagram.com/p/DaDEJb-yO6I/',
  },
  {
    index: '03',
    category: 'ENTERTAINMENT',
    title: {
      ko: "효민 · HYOMIN'S DAY 호치민",
      en: "HYOMIN · HYOMIN'S DAY, Ho Chi Minh",
      zh: "孝敏 · HYOMIN'S DAY 胡志明",
      vi: "HYOMIN · HYOMIN'S DAY, Hồ Chí Minh",
    },
    year: '2026.05',
    location: 'HO CHI MINH',
    image: '04_1_DW3nKCqEd3l.jpg',
    link: 'https://www.instagram.com/p/DW3nKCqEd3l/',
  },
  {
    index: '04',
    category: 'VENDOR',
    title: {
      ko: 'SPECULUM × SEVENTEEN',
      en: 'SPECULUM × SEVENTEEN',
      zh: 'SPECULUM × SEVENTEEN',
      vi: 'SPECULUM × SEVENTEEN',
    },
    year: '2026',
    location: 'SEOUL',
    image: '06_1_DW1a1ilkZXT.jpg',
    link: 'https://www.instagram.com/p/DW1a1ilkZXT/',
  },
  {
    index: '05',
    category: 'BRAND',
    title: {
      ko: 'SUNDRIES Archive — 아이웨어',
      en: 'SUNDRIES Archive — Eyewear',
      zh: 'SUNDRIES Archive — 眼镜品牌',
      vi: 'SUNDRIES Archive — Kính mắt',
    },
    year: '2026',
    statusKey: 'comingSoon',
    // 아이웨어 에디토리얼 이미지 (src/assets/ig/sundries-eyewear.jpg 저장 시 자동 사용, 없으면 로고 폴백)
    image: 'sundries-eyewear.jpg',
    brandLogo: true,
  },
];
