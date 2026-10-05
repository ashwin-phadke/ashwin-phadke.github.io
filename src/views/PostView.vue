<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { ArrowLeft } from 'lucide-vue-next';
import { PROFILE_DATA, SITE_URL } from '../data';
import { findPost, formatDate } from '../posts';

const props = defineProps<{
    slug: string;
}>();

const post = computed(() => findPost(props.slug));
const url = computed(() => `${SITE_URL}/blog/${props.slug}`);

// Per-post description and link-preview tags; the title is set in App.vue
useHead({
    meta: [
        { name: 'description', content: () => post.value?.excerpt },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: () => post.value?.title },
        { property: 'og:description', content: () => post.value?.excerpt },
        { property: 'og:url', content: url },
        { property: 'og:image', content: `${SITE_URL}${PROFILE_DATA.avatarUrl}` },
    ],
    link: [
        { rel: 'canonical', href: url },
    ],
});
</script>

<template>
    <article class="animate-in fade-in duration-500">
        <RouterLink :to="{ path: '/', hash: '#blog' }"
            class="flex items-center gap-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-12 transition-colors w-fit">
            <ArrowLeft :size="16" /> Back to all posts
        </RouterLink>
        <template v-if="post">
            <div class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                {{ post.category }}<template v-if="post.date"> · <time :datetime="post.date">{{ formatDate(post.date)
                        }}</time></template>
            </div>
            <h1 class="text-4xl font-bold mb-10">{{ post.title }}</h1>
            <div class="prose prose-neutral dark:prose-invert max-w-none" v-html="post.html"></div>
        </template>
        <p v-else class="text-lg text-neutral-500">Post not found.</p>
    </article>
</template>
