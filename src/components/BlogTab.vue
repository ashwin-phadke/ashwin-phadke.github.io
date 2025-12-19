<script setup lang="ts">
import { ref } from 'vue';
import { ArrowLeft } from 'lucide-vue-next';
import { marked } from 'marked';
import type { BlogPost } from '../types';

// Configure marked options
marked.setOptions({
    gfm: true,
    breaks: true
});

const renderMarkdown = (text: string) => {
    try {
        return marked(text);
    } catch (e) {
        console.error('Markdown rendering error:', e);
        return text;
    }
};

defineProps<{
    posts: BlogPost[];
}>();

const selectedPost = ref<BlogPost | null>(null);
</script>

<template>
    <div class="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div v-if="!selectedPost" class="space-y-16">
            <article v-for="post in posts" :key="post.id" class="cursor-pointer group" @click="selectedPost = post">
                <time class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 block">{{
                    post.date }}</time>
                <h3
                    class="text-3xl font-bold mb-4 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {{ post.title }}
                </h3>
                <p class="text-lg text-neutral-500 leading-relaxed mb-6">{{ post.excerpt }}</p>
                <span
                    class="text-sm font-bold border-b-2 border-neutral-200 group-hover:border-neutral-900 dark:group-hover:border-white transition-colors pb-1">Read
                    Post</span>
            </article>
        </div>
        <div v-else class="animate-in fade-in duration-500">
            <button @click="selectedPost = null"
                class="flex items-center gap-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-12 transition-colors">
                <ArrowLeft :size="16" /> Back to all posts
            </button>
            <div class="prose prose-neutral dark:prose-invert max-w-none" v-html="renderMarkdown(selectedPost.content)">
            </div>
        </div>
    </div>
</template>
