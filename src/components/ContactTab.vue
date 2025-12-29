<script setup lang="ts">
defineProps<{
    email: string;
}>();
</script>

<template>
    <div class="max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 class="text-4xl font-bold mb-6">Let's create something together.</h2>
        <p class="text-xl text-neutral-500 mb-12">
        </p>
        <a :href="`mailto:${email}`"
            class="text-3xl md:text-4xl font-bold border-b-4 border-neutral-200 hover:border-neutral-900 dark:hover:border-white transition-all pb-2 inline-block">
            {{ email }}
        </a>
    </div>
</template>
