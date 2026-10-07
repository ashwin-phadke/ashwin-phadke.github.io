<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { ArrowLeft } from '@lucide/vue';
import { formatDate } from '../dates';
import { findPost } from '../posts';
import NotFoundView from './NotFoundView.vue';

const props = defineProps<{
    slug: string;
}>();

const post = computed(() => findPost(props.slug));

// Per-post description and link-preview tags; the title, URL and image are set in App.vue
useHead({
    meta: [
        { name: 'description', content: () => post.value?.excerpt },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: () => post.value?.title },
        { property: 'og:description', content: () => post.value?.excerpt },
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
    </article>
</template>
