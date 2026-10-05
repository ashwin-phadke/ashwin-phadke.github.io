<script setup lang="ts">
import type { BlogPost } from '../types';
import { formatDate } from '../posts';

defineProps<{
    posts: BlogPost[];
}>();
</script>

<template>
    <div class="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div class="space-y-16">
            <article v-for="post in posts" :key="post.slug">
                <RouterLink :to="`/blog/${post.slug}`" class="group block">
                    <div class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                        {{ post.category }}<template v-if="post.date"> · <time :datetime="post.date">{{
                            formatDate(post.date) }}</time></template>
                    </div>
                    <h3
                        class="text-3xl font-bold mb-4 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                        {{ post.title }}
                    </h3>
                    <p class="text-lg text-neutral-500 leading-relaxed mb-6">{{ post.excerpt }}</p>
                    <span
                        class="text-sm font-bold border-b-2 border-neutral-200 group-hover:border-neutral-900 dark:group-hover:border-white transition-colors pb-1">Read
                        Post</span>
                </RouterLink>
            </article>
        </div>
    </div>
</template>
