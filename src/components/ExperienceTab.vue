<script setup lang="ts">
import { MapPin } from 'lucide-vue-next';
import type { Experience } from '../types';

defineProps<{
    experience: Experience[];
}>();
</script>

<template>
    <div class="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div v-for="(job, idx) in experience" :key="idx"
            class="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-800">
            <div class="absolute w-4 h-4 bg-neutral-900 dark:bg-neutral-100 rounded-full -left-[9px] top-1" />
            
            <!-- Company Name (Always shown) -->
            <h3 class="text-xl font-bold mb-2">{{ job.company }}</h3>

            <!-- Multiple Roles -->
            <div v-if="job.roles" class="space-y-8 mt-4">
                <div v-for="(role, rIdx) in job.roles" :key="rIdx" class="relative">
                    <!-- Timeline connector for roles -->
                    <div v-if="rIdx !== job.roles.length - 1" 
                         class="absolute left-[-23px] top-[28px] bottom-[-20px] w-0.5 bg-neutral-200 dark:bg-neutral-800" />
                    
                    <div class="flex justify-between items-start mb-2">
                        <div class="flex flex-col">
                            <div class="flex items-baseline gap-2">
                                <h4 class="text-lg text-neutral-800 dark:text-neutral-200 font-semibold leading-none">{{ role.role }}</h4>
                                <div v-if="role.location" class="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm">
                                    <MapPin :size="12" class="translate-y-[1px]" />
                                    <span>{{ role.location }}</span>
                                </div>
                            </div>
                        </div>
                        <span class="text-neutral-400 font-mono text-sm leading-7">{{ role.period }}</span>
                    </div>
                    
                    <div v-if="Array.isArray(role.description)" class="space-y-2">
                        <ul class="list-disc list-inside text-neutral-600 dark:text-neutral-400 max-w-2xl space-y-1">
                            <li v-for="(point, i) in role.description" :key="i">{{ point }}</li>
                        </ul>
                    </div>
                    <p v-else class="text-neutral-600 dark:text-neutral-400 max-w-2xl">{{ role.description }}</p>
                </div>
            </div>

            <!-- Single Role -->
            <div v-else>
                <div class="flex justify-between items-start mb-2">
                    <div class="flex items-baseline gap-2">
                        <h4 class="text-lg text-neutral-500 mb-4 leading-none">{{ job.role }}</h4>
                        <div v-if="job.location" class="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm">
                            <MapPin :size="12" class="translate-y-[1px]" />
                            <span>{{ job.location }}</span>
                        </div>
                    </div>
                    <span class="text-neutral-400 font-mono text-sm leading-7">{{ job.period }}</span>
                </div>
                <div v-if="Array.isArray(job.description)" class="space-y-2">
                    <ul class="list-disc list-inside text-neutral-600 dark:text-neutral-400 max-w-2xl space-y-1">
                        <li v-for="(point, i) in job.description" :key="i">{{ point }}</li>
                    </ul>
                </div>
                <p v-else class="text-neutral-600 dark:text-neutral-400 max-w-2xl">{{ job.description }}</p>
            </div>
        </div>
    </div>
</template>
