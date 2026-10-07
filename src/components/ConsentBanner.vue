<script setup lang="ts">
import { onMounted } from 'vue';
import { consentBannerOpen, initAnalytics, setConsent } from '../analytics';

onMounted(initAnalytics);
</script>

<template>
    <div v-if="consentBannerOpen" role="region" aria-label="Analytics cookies"
        class="fixed bottom-4 inset-x-4 md:left-auto md:max-w-sm z-50 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
        <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            This site uses Google Analytics cookies to count visits. Nothing is loaded unless you accept.
        </p>
        <div class="flex gap-2">
            <button @click="setConsent(true)"
                class="px-4 py-2 rounded-lg text-sm font-medium bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black">
                Accept
            </button>
            <button @click="setConsent(false)"
                class="px-4 py-2 rounded-lg text-sm font-medium border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                Decline
            </button>
        </div>
    </div>
</template>
