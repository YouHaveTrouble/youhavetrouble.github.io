import { z, defineCollection } from 'astro:content';
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});
export const collections = {
  posts,
};