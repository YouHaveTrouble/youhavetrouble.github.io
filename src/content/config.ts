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
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    category: z.string(),
    name: z.string(),
    description: z.string(),
    image: z.string().optional(),
    links: z.array(z.object({text: z.string(), url: z.string()})),
    technologies: z.array(z.string()).optional(),
  }),
});

export const collections = {
  posts,
  projects,
};
