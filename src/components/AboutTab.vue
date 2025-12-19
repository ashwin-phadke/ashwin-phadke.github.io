<script setup lang="ts">
import { Quote } from 'lucide-vue-next';
import type { ProfileData } from '../types';

defineProps<{
    profile: ProfileData;
}>();
</script>

<template>
    <div class="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div class="max-w-2xl mb-12">
            <div class="whitespace-pre-line text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {{ profile.about }}
            </div>
        </div>

        <h3 class="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">Domains</h3>
        <div class="flex flex-wrap gap-2 mb-16">
            <span v-for="skill in profile.skills" :key="skill"
                class="px-3 py-1 bg-neutral-200 dark:bg-neutral-900 rounded-full text-sm font-medium">
                {{ skill }}
            </span>
        </div>

        <div v-if="profile.testimonials.length > 0">
            <h3 class="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">Kind Words
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(t, i) in profile.testimonials" :key="i"
                    class="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <Quote class="text-neutral-300 dark:text-neutral-700 mb-4" :size="24" />
                    <p class="italic text-neutral-600 dark:text-neutral-400 mb-4">{{ t.text }}</p>
                    <div>
                        <p class="font-bold text-sm">{{ t.author }}</p>
                        <p class="text-xs text-neutral-500">{{ t.role }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
