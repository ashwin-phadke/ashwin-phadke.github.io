<script setup lang="ts">
import { computed } from 'vue';
import { Mic } from '@lucide/vue';
import LinkCard from './LinkCard.vue';
import { formatMonth } from '../dates';
import type { Talk } from '../types';

const props = defineProps<{ talks: Talk[]; }>();

// Newest first; talks without a date go last
const sortedTalks = computed(() =>
    [...props.talks].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? '')));
</script>

<template>
    <div class="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 class="sr-only">Talks</h2>
        <!-- Grid: Using 1 column for more rectangular look -->
        <div class="grid grid-cols-1 gap-4">
            <LinkCard v-for="(talk, i) in sortedTalks" :key="i" :href="talk.link" :icon="Mic" :label="talk.event"
                :title="talk.title" :date="talk.date && formatMonth(talk.date)" />
        </div>
    </div>
</template>
