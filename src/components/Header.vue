<script setup lang="ts">
import {
    Sparkles,
    Github,
    Twitter,
    Linkedin,
    Sun,
    Moon
} from 'lucide-vue-next';
import type { ProfileData } from '../types';

defineProps<{
    profile: ProfileData;
    isDarkMode: boolean;
}>();

defineEmits<{
    (e: 'toggle-theme'): void;
}>();
</script>

<template>
    <header class="relative">
        <div class="flex flex-col md:flex-row lg:flex-col md:items-center lg:items-start justify-between gap-8">
            <div class="flex flex-col md:flex-row lg:flex-col items-start md:items-center lg:items-start gap-6">
                <div class="relative group">
                    <div
                        class="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-3xl overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl transition-all duration-500">
                        <img :src="profile.avatarUrl" :alt="profile.name"
                            class="w-full h-full object-cover transition-all duration-700" />
                    </div>
                </div>

                <div>
                    <h1 class="text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight mb-2">{{ profile.name }}
                    </h1>
                    <p class="text-xl lg:text-lg text-neutral-500 dark:text-neutral-400 mb-4">{{ profile.title }}
                    </p>
                    <div class="flex gap-4">
                        <a v-for="(url, key) in profile.socials" :key="key" :href="url"
                            class="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                            <Github v-if="key === 'github'" :size="20" />
                            <Twitter v-if="key === 'twitter'" :size="20" />
                            <Linkedin v-if="key === 'linkedin'" :size="20" />
                        </a>
                    </div>
                </div>
            </div>

            <button @click="$emit('toggle-theme')"
                class="p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all absolute top-0 right-0 lg:relative lg:top-auto lg:right-auto lg:self-start lg:mt-4">
                <Sun v-if="isDarkMode" :size="20" class="text-yellow-500" />
                <Moon v-else :size="20" class="text-neutral-600" />
            </button>
        </div>
    </header>
</template>
