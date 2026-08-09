import {defineCollection} from 'astro:content';
import { glob } from "astro/loaders";
import { z } from 'astro/zod';

const posts = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
    }),
});
const projects = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
    schema: z.object({
        category: z.string(),
        name: z.string(),
        description: z.string(),
        image: z.string().optional(),
        links: z.array(z.object({text: z.string(), url: z.string()})),
        technologies: z.array(z.string()).optional(),
    }),
});
const writing = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/writing" }),
    schema: z.object({
        title: z.string(),
        publishDate: z.date({coerce: true}),
        category: z.string(),
    }),
});

export const collections = {
    posts,
    projects,
    writing,
};
