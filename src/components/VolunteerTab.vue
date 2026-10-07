<script setup lang="ts">
import { MapPin } from '@lucide/vue';
import TimelineItem from './TimelineItem.vue';
import RoleDescription from './RoleDescription.vue';
import type { VolunteerExperience } from '../types';

defineProps<{
    volunteer: VolunteerExperience[];
}>();
</script>

<template>
    <div class="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 class="sr-only">Volunteer</h2>
        <TimelineItem v-for="(role, idx) in volunteer" :key="idx" :title="role.company" :period="role.period">
            <div class="flex items-baseline gap-2 mb-4">
                <h4 class="text-lg text-neutral-500 dark:text-neutral-400 leading-none">{{ role.role }}</h4>
                <div v-if="role.location" class="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm">
                    <MapPin :size="12" class="translate-y-[1px]" />
                    <span>{{ role.location }}</span>
                </div>
            </div>
            <RoleDescription :description="role.description" />
        </TimelineItem>
    </div>
</template>
