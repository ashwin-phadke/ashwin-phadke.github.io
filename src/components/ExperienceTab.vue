<script setup lang="ts">
import { MapPin } from '@lucide/vue';
import TimelineItem from './TimelineItem.vue';
import RoleDescription from './RoleDescription.vue';
import type { Experience } from '../types';

defineProps<{
    experience: Experience[];
}>();
</script>

<template>
    <div class="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 class="sr-only">Career</h2>
        <TimelineItem v-for="(job, idx) in experience" :key="idx" :title="job.company">
            <!-- Multiple Roles -->
            <div v-if="job.roles" class="space-y-8 mt-4">
                <div v-for="(role, rIdx) in job.roles" :key="rIdx" class="relative">
                    <!-- Timeline connector for roles -->
                    <div v-if="rIdx !== job.roles.length - 1"
                        class="absolute left-[-23px] top-[28px] bottom-[-20px] w-0.5 bg-neutral-200 dark:bg-neutral-800" />

                    <div class="flex justify-between items-start mb-2">
                        <div class="flex items-baseline gap-2">
                            <h4 class="text-lg text-neutral-800 dark:text-neutral-200 font-semibold leading-none">
                                {{ role.role }}</h4>
                            <div v-if="role.location"
                                class="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm">
                                <MapPin :size="12" class="translate-y-[1px]" />
                                <span>{{ role.location }}</span>
                            </div>
                        </div>
                        <span class="text-neutral-500 dark:text-neutral-400 font-semibold text-sm leading-7">{{ role.period }}</span>
                    </div>

                    <RoleDescription :description="role.description" />
                </div>
            </div>

            <!-- Single Role -->
            <div v-else>
                <div class="flex justify-between items-start mb-2">
                    <div class="flex items-baseline gap-2">
                        <h4 class="text-lg text-neutral-500 dark:text-neutral-400 mb-4 leading-none">{{ job.role }}</h4>
                        <div v-if="job.location"
                            class="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm">
                            <MapPin :size="12" class="translate-y-[1px]" />
                            <span>{{ job.location }}</span>
                        </div>
                    </div>
                    <span class="text-neutral-500 dark:text-neutral-400 font-semibold text-sm leading-7">{{ job.period }}</span>
                </div>
                <RoleDescription :description="job.description" />
            </div>
        </TimelineItem>
    </div>
</template>
