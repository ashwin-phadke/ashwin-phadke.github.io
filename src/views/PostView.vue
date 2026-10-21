<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { ArrowLeft } from '@lucide/vue';
import { formatDate } from '../dates';
import { findPost, suggestedPosts } from '../posts';
import { PROFILE_DATA, SITE_URL } from '../data';
import NotFoundView from './NotFoundView.vue';

const props = defineProps<{
    slug: string;
}>();

const post = computed(() => findPost(props.slug));
const suggestions = computed(() => post.value ? suggestedPosts(post.value) : []);

// Per-post description and link-preview tags; the title and URL are set in App.vue.
// The image is generated for each post at build time, in vite.config.ts.
useHead({
    meta: [
        { name: 'description', content: () => post.value?.excerpt },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: () => post.value?.title },
        { property: 'og:description', content: () => post.value?.excerpt },
        { property: 'og:image', content: () => post.value && `${SITE_URL}/og/${post.value.slug}.png` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: () => post.value?.title },
        { name: 'twitter:card', content: 'summary_large_image' },
    ],
    // Structured data for search engines; the author is the Person described on the home page, in App.vue
    script: () => post.value ? [{
        type: 'application/ld+json',
        key: 'structured-data',
        innerHTML: {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.value.title,
            description: post.value.excerpt,
            ...(post.value.date && { datePublished: post.value.date }),
            image: `${SITE_URL}/og/${post.value.slug}.png`,
            url: `${SITE_URL}/blog/${post.value.slug}`,
            mainEntityOfPage: `${SITE_URL}/blog/${post.value.slug}`,
            author: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: PROFILE_DATA.name, url: `${SITE_URL}/` },
        },
    }] : [],
});
</script>

<template>
    <NotFoundView v-if="!post" />
    <article v-else class="animate-in fade-in duration-500">
        <RouterLink to="/blog"
            class="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-12 transition-colors w-fit">
            <ArrowLeft :size="16" /> Back to all posts
        </RouterLink>
        <div class="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
            {{ post.category }}<template v-if="post.date"> · <time :datetime="post.date">{{ formatDate(post.date)
                    }}</time></template>
        </div>
        <h1 class="text-4xl font-bold mb-10">{{ post.title }}</h1>
        <div class="prose prose-neutral dark:prose-invert max-w-none" v-html="post.html"></div>
        <!-- Kept small and muted so it reads as navigation, not as more of the post -->
        <aside v-if="suggestions.length" class="mt-24 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
                Suggested reads</h2>
            <ul class="space-y-3">
                <li v-for="other in suggestions" :key="other.slug">
                    <RouterLink :to="`/blog/${other.slug}`"
                        class="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-6 gap-y-1 text-sm">
                        <span
                            class="text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                            {{ other.title }}</span>
                        <span class="shrink-0 text-xs text-neutral-400 dark:text-neutral-500">{{ other.category }}</span>
                    </RouterLink>
                </li>
            </ul>
        </aside>
    </article>
</template>
