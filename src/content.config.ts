import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('The Videotrim Team'),
    category: z.string().default('Guides'),
    readingTime: z.string().default('4 min read'),
  }),
});

export const collections = { blog };
