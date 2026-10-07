<script setup lang="ts">
defineProps<{
    title: string;
    period?: string;
}>();
</script>

<template>
    <div class="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-800">
        <div class="absolute w-4 h-4 bg-neutral-900 dark:bg-neutral-100 rounded-full -left-[9px] top-1" />
        <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-bold">{{ title }}</h3>
            <span v-if="period" class="text-neutral-500 dark:text-neutral-400 font-semibold text-sm">{{ period }}</span>
        </div>
        <slot />
    </div>
</template>
