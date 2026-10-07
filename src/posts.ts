import type { BlogPost } from './types';

const modules = import.meta.glob<BlogPost>('./posts/*.md', { eager: true, import: 'default' });

// Newest first; posts without a date go last
export const posts: BlogPost[] = Object.values(modules)
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));

export const findPost = (slug: string) => posts.find(post => post.slug === slug);
