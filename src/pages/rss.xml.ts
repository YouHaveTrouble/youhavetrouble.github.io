import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked';
import {getCollection} from "astro:content";

export async function GET(context: { site: any; }) {
    const posts = await getCollection('posts');

    return rss({
        title: 'YouHaveBlog',
        description: 'Something that\'s supposed to be thoughts.',
        site: context.site,
        items: posts.map((post) => ({
            link: `/blog/${post.slug}/`,
            content: sanitizeHtml(marked.parse(post.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
            }),
            pubDate: new Date(post.data.publishDate),
            ...post.data,
        })),
    });
}