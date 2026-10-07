<script setup lang="ts">
defineProps<{
    description?: string | string[];
}>();
</script>

<template>
    <ul v-if="Array.isArray(description)"
        class="list-disc list-inside text-neutral-600 dark:text-neutral-400 max-w-2xl space-y-1">
        <li v-for="(point, i) in description" :key="i">{{ point }}</li>
    </ul>
    <p v-else class="text-neutral-600 dark:text-neutral-400 max-w-2xl">{{ description }}</p>
</template>
