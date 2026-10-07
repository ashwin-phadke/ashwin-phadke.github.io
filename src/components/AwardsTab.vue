<script setup lang="ts">
import { ref } from 'vue';
import { Trophy, Award, ExternalLink } from '@lucide/vue';
import TimelineItem from './TimelineItem.vue';
import SegmentedControl from './SegmentedControl.vue';
import LinkCard from './LinkCard.vue';
import type { Award as AwardType, Certificate } from '../types';

defineProps<{
    awards: AwardType[];
    certificates: Certificate[];
}>();

const filters = [
    { value: 'Prizes', icon: Trophy },
    { value: 'Certificates', icon: Award },
] as const;
const activeFilter = ref<typeof filters[number]['value']>('Prizes');
</script>

<template>
    <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 class="sr-only">Achievements</h2>
        <SegmentedControl v-model="activeFilter" :options="filters" />

        <!-- Prizes: timeline style -->
        <div v-if="activeFilter === 'Prizes'" class="space-y-12">
            <TimelineItem v-for="(award, idx) in awards" :key="idx" :title="award.title" :period="award.date">
                <div class="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm mb-4">
                    <Trophy :size="14" class="translate-y-[1px]" />
                    <span>{{ award.issuer }}</span>
                </div>
                <p v-if="award.description" class="text-neutral-600 dark:text-neutral-400 max-w-2xl">{{
                    award.description }}</p>
                <a v-if="award.link" :href="award.link" target="_blank" rel="noopener noreferrer"
                    class="inline-block mt-2 text-sm text-neutral-900 dark:text-white underline underline-offset-4 hover:opacity-70">
                    View Award
                </a>
            </TimelineItem>
        </div>

        <!-- Certificates: talks-style cards -->
        <div v-if="activeFilter === 'Certificates'" class="grid grid-cols-1 gap-4">
            <LinkCard v-for="(cert, i) in certificates" :key="i" :href="cert.link" :icon="Award" :label="cert.issuer"
                :title="cert.title" :date="cert.date">
                <div v-if="cert.link"
                    class="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm font-medium border border-neutral-200 dark:border-neutral-700 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all w-fit">
                    <span>View Certificate</span>
                    <ExternalLink :size="14" />
                </div>
            </LinkCard>
        </div>
    </div>
</template>
