import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    translationKey: z.string(),
    lang: z.enum(['en', 'ru']),
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    originalUrl: z.string().url(),
    topics: z.array(z.string()),
    reproduced: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { insights };
