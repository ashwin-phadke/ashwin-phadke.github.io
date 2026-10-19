import type { BlogPost } from './types';

const modules = import.meta.glob<BlogPost>('./posts/*.md', { eager: true, import: 'default' });

// Newest first; posts without a date go last
export const posts: BlogPost[] = Object.values(modules)
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));

export const findPost = (slug: string) => posts.find(post => post.slug === slug);

// The post's own picks first, then posts in the same category, then the newest of the rest
export const suggestedPosts = (post: BlogPost, count = 3) => {
    const others = posts.filter(other => other.slug !== post.slug);
    const picked = (post.related ?? []).map(findPost).filter((other): other is BlogPost => !!other);
    const sameCategory = others.filter(other => other.category === post.category);
    return [...new Set([...picked, ...sameCategory, ...others])].slice(0, count);
};
