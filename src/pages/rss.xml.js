import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('insights', ({ data }) => data.lang === 'en');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: 'Syndata — Insights',
    description: 'Notes on enterprise analytics, business insight and AI agents.',
    site: new URL(`${base}/`, context.site).href,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.description,
      link: `insights/${post.data.translationKey}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
