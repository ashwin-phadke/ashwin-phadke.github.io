<script setup lang="ts">
import { computed } from 'vue';
import { Mic, ExternalLink, Calendar } from 'lucide-vue-next';
import type { Talk } from '../types';

const props = defineProps<{ talks: Talk[]; }>();

const sortedTalks = computed(() => {
    return [...props.talks].sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
    });
});
</script>

<template>
    <div class="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <!-- Grid: Using 1 column for more rectangular look -->
        <div class="grid grid-cols-1 gap-4">
            <a v-for="(talk, i) in sortedTalks" :key="i" :href="talk.link" target="_blank" rel="noopener noreferrer"
                class="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all block relative">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-2">
                        <div class="flex items-center gap-2 text-neutral-400 dark:text-neutral-500">
                            <Mic :size="14" />
                            <span class="text-xs font-bold uppercase tracking-wider">{{ talk.event }}</span>
                        </div>
                        <h3
                            class="text-xl font-bold group-hover:underline decoration-neutral-400 decoration-2 underline-offset-4">
                            {{ talk.title }}
                        </h3>
                        <div v-if="talk.date"
                            class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <Calendar :size="14" />
                            <span>{{ talk.date }}</span>
                        </div>
                    </div>

                    <div
                        class="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm font-medium border border-neutral-200 dark:border-neutral-700 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all w-fit">
                        <span>View Talk</span>
                        <ExternalLink :size="14" />
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
