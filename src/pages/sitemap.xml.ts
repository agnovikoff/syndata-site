import { getCollection } from 'astro:content';

const staticPaths = [
  '/', '/ru/', '/insights/', '/ru/insights/', '/about/', '/ru/about/', '/contact/', '/ru/contact/',
];

export async function GET(context) {
  const posts = await getCollection('insights', ({ data }) => data.lang === 'en');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const paths = [...staticPaths, ...posts.map((post) => `/insights/${post.data.translationKey}/`)];
  const urls = paths.map((path) => {
    const location = new URL(`${base}${path}`, context.site);
    return `<url><loc>${location.href}</loc></url>`;
  }).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
