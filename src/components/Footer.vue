<script setup lang="ts">
defineProps<{
    name: string;
}>();
</script>

<template>
    <footer
        class="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-400 text-sm">
        <p>© {{ new Date().getFullYear() }} {{ name }}. Built with Vue & Tailwind.</p>
        <div class="flex gap-8">
            <a href="#" class="hover:text-neutral-900 dark:hover:text-white transition-colors">RSS Feed</a>
            <a href="#" class="hover:text-neutral-900 dark:hover:text-white transition-colors">Twitter</a>
            <a href="#" class="hover:text-neutral-900 dark:hover:text-white transition-colors">LinkedIn</a>
        </div>
    </footer>
</template>
