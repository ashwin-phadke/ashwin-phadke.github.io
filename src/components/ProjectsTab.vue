<script setup lang="ts">
import { ref, computed } from 'vue';
import { ExternalLink, GitPullRequest, Laptop } from '@lucide/vue';
import SegmentedControl from './SegmentedControl.vue';
import type { Project } from '../types';

const props = defineProps<{
    projects: Project[];
}>();

const filters = [
    { value: 'Repositories', tag: 'Repository', icon: Laptop },
    { value: 'Pull Requests', tag: 'Pull Request', icon: GitPullRequest },
] as const;
const activeFilter = ref<typeof filters[number]['value']>('Repositories');

const filteredProjects = computed(() => {
    const tag = filters.find(f => f.value === activeFilter.value)!.tag;
    return props.projects.filter(p => p.tags.includes(tag));
});
</script>

<template>
    <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 class="sr-only">Projects</h2>
        <SegmentedControl v-model="activeFilter" :options="filters" />

        <!-- Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <a v-for="(p, i) in filteredProjects" :key="i" :href="p.link" target="_blank" rel="noopener noreferrer"
                class="group p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all block">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold group-hover:underline decoration-neutral-400">{{ p.title }}</h3>
                    <ExternalLink :size="16"
                        class="text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                </div>
                <p class="text-neutral-500 dark:text-neutral-400 text-sm mb-4 line-clamp-2">{{ p.description }}</p>
                <div class="flex gap-2 flex-wrap">
                    <span v-for="tag in p.tags" :key="tag"
                        class="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 px-2 py-1 rounded-md bg-neutral-50 dark:bg-neutral-800/50">{{ tag
                        }}</span>
                </div>
            </a>
        </div>
    </div>
</template>
