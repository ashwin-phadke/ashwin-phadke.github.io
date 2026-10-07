<script setup lang="ts">
import { type Component } from 'vue';

defineProps<{
    activeTab: string;
    navItems: { id: string; path: string; icon: Component; label: string }[];
}>();
</script>

<template>
    <!-- Sticky only from tablet width up: on a phone the wrapped rows would cover too much of the screen -->
    <nav
        class="flex flex-wrap gap-2 mb-2 md:sticky md:top-6 z-50 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md py-4 border-b border-neutral-200 dark:border-neutral-800">
        <!-- A post page highlights Blog without being that page, so aria-current is left to RouterLink -->
        <RouterLink v-for="item in navItems" :key="item.id" :to="item.path"
            class="flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-300" :class="activeTab === item.id
                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black shadow-lg scale-105'
                : 'hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400'">
            <component :is="item.icon" :size="18" />
            <span class="font-medium">{{ item.label }}</span>
        </RouterLink>
    </nav>
</template>
