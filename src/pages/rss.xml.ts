import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../config';

// 네이버 서치어드바이저 · RSS 리더 대응 피드
export async function GET(context: APIContext) {
  const posts = (await getCollection('insights')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: `${SITE.name} Insights`,
    description:
      '엔터테인먼트 에이전시와 브랜드 유통 현장에서 쌓은 바나바브릿지의 실무 인사이트.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/insights/${post.id}/`,
    })),
    customData: '<language>ko</language>',
  });
}
