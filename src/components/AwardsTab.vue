<script setup lang="ts">
import { ref } from 'vue';
import { Trophy, Award, ExternalLink, Calendar } from 'lucide-vue-next';
import type { Award as AwardType, Certificate } from '../types';

defineProps<{
    awards: AwardType[];
    certificates: Certificate[];
}>();

const activeFilter = ref<'Prizes' | 'Certificates'>('Prizes');
</script>

<template>
    <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <!-- Sub-tabs -->
        <div class="flex p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl w-fit mx-auto border border-neutral-200 dark:border-neutral-800">
            <button @click="activeFilter = 'Prizes'"
                class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                :class="activeFilter === 'Prizes'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'">
                <Trophy :size="16" />
                Prizes
            </button>
            <button @click="activeFilter = 'Certificates'"
                class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                :class="activeFilter === 'Certificates'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'">
                <Award :size="16" />
                Certificates
            </button>
        </div>

        <!-- Prizes: timeline style -->
        <div v-if="activeFilter === 'Prizes'" class="space-y-12">
            <div v-for="(award, idx) in awards" :key="idx"
                class="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-800">
                <div class="absolute w-4 h-4 bg-neutral-900 dark:bg-neutral-100 rounded-full -left-[9px] top-1" />
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold">{{ award.title }}</h3>
                    <span class="text-neutral-400 font-mono text-sm">{{ award.date }}</span>
                </div>
                <div class="flex items-baseline gap-2 mb-4">
                    <div class="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm">
                        <Trophy :size="14" class="translate-y-[1px]" />
                        <span>{{ award.issuer }}</span>
                    </div>
                </div>
                <p v-if="award.description" class="text-neutral-600 dark:text-neutral-400 max-w-2xl">{{ award.description }}</p>
                <a v-if="award.link" :href="award.link" target="_blank" rel="noopener noreferrer"
                    class="inline-block mt-2 text-sm text-neutral-900 dark:text-white underline underline-offset-4 hover:opacity-70">
                    View Award
                </a>
            </div>
        </div>

        <!-- Certificates: talks-style cards -->
        <div v-if="activeFilter === 'Certificates'" class="grid grid-cols-1 gap-4">
            <a v-for="(cert, i) in certificates" :key="i" :href="cert.link" target="_blank" rel="noopener noreferrer"
                class="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all block relative">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-2">
                        <div class="flex items-center gap-2 text-neutral-400 dark:text-neutral-500">
                            <Award :size="14" />
                            <span class="text-xs font-bold uppercase tracking-wider">{{ cert.issuer }}</span>
                        </div>
                        <h3 class="text-xl font-bold group-hover:underline decoration-neutral-400 decoration-2 underline-offset-4">
                            {{ cert.title }}
                        </h3>
                        <div v-if="cert.date" class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <Calendar :size="14" />
                            <span>{{ cert.date }}</span>
                        </div>
                    </div>

                    <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm font-medium border border-neutral-200 dark:border-neutral-700 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all w-fit">
                        <span>View Certificate</span>
                        <ExternalLink :size="14" />
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
