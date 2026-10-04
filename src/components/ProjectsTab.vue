<script setup lang="ts">
import { ref, computed } from 'vue';
import { ExternalLink, GitPullRequest, Laptop } from 'lucide-vue-next';
import type { Project } from '../types';

const props = defineProps<{
    projects: Project[];
}>();

const activeFilter = ref<'Repositories' | 'Pull Requests'>('Repositories');

const filteredProjects = computed(() => {
    return props.projects.filter(p => {
        if (activeFilter.value === 'Repositories') return p.tags.includes('Repository');
        if (activeFilter.value === 'Pull Requests') return p.tags.includes('Pull Request');
        return true;
    });
});
</script>

<template>
    <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <!-- Sub-tabs -->
        <div class="flex p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-fit mx-auto border border-neutral-200 dark:border-neutral-800">
            <button @click="activeFilter = 'Repositories'"
                class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                :class="activeFilter === 'Repositories' 
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm' 
                    : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'">
                <Laptop :size="16" />
                Repositories
            </button>
            <button @click="activeFilter = 'Pull Requests'"
                class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                :class="activeFilter === 'Pull Requests' 
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm' 
                    : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'">
                <GitPullRequest :size="16" />
                Pull Requests
            </button>
        </div>

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
