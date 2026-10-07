<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
    meta: [
        { name: 'robots', content: 'noindex' },
    ],
});
</script>

<template>
    <div class="max-w-lg animate-in fade-in duration-500">
        <h2 class="text-4xl font-bold mb-6">Page not found</h2>
        <p class="text-lg text-neutral-500 dark:text-neutral-400 mb-12">There is nothing at this address. It may have moved, or the link
            may be wrong.</p>
        <RouterLink to="/"
            class="text-sm font-bold border-b-2 border-neutral-200 hover:border-neutral-900 dark:hover:border-white transition-colors pb-1">
            Go to the home page
        </RouterLink>
    </div>
</template>
