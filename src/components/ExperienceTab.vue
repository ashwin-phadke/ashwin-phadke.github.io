<script setup lang="ts">
import { MapPin } from '@lucide/vue';
import TimelineItem from './TimelineItem.vue';
import RoleDescription from './RoleDescription.vue';
import type { Experience, VolunteerExperience } from '../types';

defineProps<{
    experience: Experience[];
    volunteer: VolunteerExperience[];
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

                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-x-6 gap-y-1 mb-2">
                        <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                            <h4 class="text-lg text-neutral-800 dark:text-neutral-200 font-semibold leading-none">
                                {{ role.role }}</h4>
                            <div v-if="role.location"
                                class="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm">
                                <MapPin :size="12" class="translate-y-[1px]" />
                                <span>{{ role.location }}</span>
                            </div>
                        </div>
                        <span class="text-neutral-500 dark:text-neutral-400 font-semibold text-sm sm:leading-7 whitespace-nowrap">{{ role.period }}</span>
                    </div>

                    <RoleDescription :description="role.description" />
                </div>
            </div>

            <!-- Single Role -->
            <div v-else>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-x-6 gap-y-1 mb-4">
                    <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <h4 class="text-lg text-neutral-500 dark:text-neutral-400 leading-none">{{ job.role }}</h4>
                        <div v-if="job.location"
                            class="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm">
                            <MapPin :size="12" class="translate-y-[1px]" />
                            <span>{{ job.location }}</span>
                        </div>
                    </div>
                    <span class="text-neutral-500 dark:text-neutral-400 font-semibold text-sm sm:leading-7 whitespace-nowrap">{{ job.period }}</span>
                </div>
                <RoleDescription :description="job.description" />
            </div>
        </TimelineItem>

        <!-- Volunteering: a plain list, lighter than the work timeline above -->
        <section v-if="volunteer.length > 0" class="pt-12 border-t border-neutral-200 dark:border-neutral-800">
            <h2 class="text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-8">
                Volunteering</h2>
            <ul class="space-y-8">
                <li v-for="(v, idx) in volunteer" :key="idx">
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-x-6 mb-1">
                        <h3 class="text-lg font-semibold">{{ v.company }}</h3>
                        <span class="text-neutral-500 dark:text-neutral-400 font-semibold text-sm shrink-0">{{ v.period }}</span>
                    </div>
                    <p class="text-neutral-500 dark:text-neutral-400 text-sm mb-2">
                        {{ v.role }}<template v-if="v.location"> · {{ v.location }}</template>
                    </p>
                    <!-- Always a paragraph, so entries look alike whether their data has points or not -->
                    <RoleDescription :description="[v.description].flat().join(' ')" class="text-sm" />
                </li>
            </ul>
        </section>
    </div>
</template>
