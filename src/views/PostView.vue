<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { ArrowLeft } from '@lucide/vue';
import { formatDate } from '../dates';
import { findPost, suggestedPosts } from '../posts';
import { SITE_URL } from '../data';
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
        <aside v-if="suggestions.length" class="mt-20 pt-12 border-t border-neutral-200 dark:border-neutral-800">
            <h2 class="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-8">
                Suggested reads</h2>
            <div class="space-y-10">
                <RouterLink v-for="other in suggestions" :key="other.slug" :to="`/blog/${other.slug}`"
                    class="group block">
                    <div class="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                        {{ other.category }}</div>
                    <h3
                        class="text-xl font-bold mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                        {{ other.title }}</h3>
                    <p class="text-neutral-500 dark:text-neutral-400 leading-relaxed">{{ other.excerpt }}</p>
                </RouterLink>
            </div>
        </aside>
    </article>
</template>
