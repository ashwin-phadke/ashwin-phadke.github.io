<script setup lang="ts" generic="T extends string">
import type { Component } from 'vue';

defineProps<{
    options: readonly { value: T; icon: Component }[];
}>();

const selected = defineModel<T>({ required: true });
</script>

<template>
    <div
        class="flex p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-fit mx-auto border border-neutral-200 dark:border-neutral-800">
        <button v-for="option in options" :key="option.value" @click="selected = option.value"
            class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            :class="selected === option.value
                ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'">
            <component :is="option.icon" :size="16" />
            {{ option.value }}
        </button>
    </div>
</template>
