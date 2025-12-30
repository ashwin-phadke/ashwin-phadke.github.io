<script setup lang="ts">
import { Trophy } from 'lucide-vue-next';
import type { Award } from '../types';

defineProps<{
    awards: Award[];
}>();
</script>

<template>
    <div class="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div v-for="(award, idx) in awards" :key="idx"
            class="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-800">
            <div class="absolute w-4 h-4 bg-neutral-900 dark:bg-neutral-100 rounded-full -left-[9px] top-1" />
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold">{{ award.title }}</h3>
                <span class="text-neutral-400 font-mono text-sm">{{ award.date }}</span>
            </div>
            <div class="flex items-baseline gap-2 mb-4">
                <div class="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm">
                    <Trophy :size="14" class="translate-y-[1px]" />
                    <span>{{ award.issuer }}</span>
                </div>
            </div>
            <p v-if="award.description" class="text-neutral-600 dark:text-neutral-400 max-w-2xl">{{ award.description }}</p>
             <a v-if="award.link" :href="award.link" target="_blank" rel="noopener noreferrer"
                class="inline-block mt-2 text-sm text-neutral-900 dark:text-white underline underline-offset-4 hover:opacity-70">
                View Award
            </a>
        </div>
    </div>
</template>
