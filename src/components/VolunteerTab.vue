<script setup lang="ts">
import type { VolunteerExperience } from '../types';

defineProps<{
    volunteer: VolunteerExperience[];
}>();
</script>

<template>
    <div class="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div v-for="(role, idx) in volunteer" :key="idx"
            class="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-800">
            <div class="absolute w-4 h-4 bg-neutral-900 dark:bg-neutral-100 rounded-full -left-[9px] top-1" />
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold">{{ role.company }}</h3>
                <span class="text-neutral-400 font-mono text-sm">{{ role.period }}</span>
            </div>
            <h4 class="text-lg text-neutral-500 mb-4">{{ role.role }}</h4>
            <div v-if="Array.isArray(role.description)" class="space-y-2">
                <ul class="list-disc list-inside text-neutral-600 dark:text-neutral-400 max-w-2xl space-y-1">
                    <li v-for="(point, i) in role.description" :key="i">{{ point }}</li>
                </ul>
            </div>
            <p v-else class="text-neutral-600 dark:text-neutral-400 max-w-2xl">{{ role.description }}</p>
        </div>
    </div>
</template>
