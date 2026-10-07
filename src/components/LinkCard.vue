<script setup lang="ts">
import type { Component } from 'vue';
import { Calendar } from '@lucide/vue';

defineProps<{
    href?: string;
    icon: Component;
    label: string;
    title: string;
    date?: string;
}>();
</script>

<template>
    <component :is="href ? 'a' : 'div'" :href="href" :target="href ? '_blank' : undefined"
        :rel="href ? 'noopener noreferrer' : undefined"
        class="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all block relative">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="space-y-2">
                <div class="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                    <component :is="icon" :size="14" />
                    <span class="text-xs font-bold uppercase tracking-wider">{{ label }}</span>
                </div>
                <h3 class="text-xl font-bold group-hover:underline decoration-neutral-400 decoration-2 underline-offset-4">
                    {{ title }}
                </h3>
                <div v-if="date" class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                    <Calendar :size="14" />
                    <span>{{ date }}</span>
                </div>
            </div>

            <slot />
        </div>
    </component>
</template>
