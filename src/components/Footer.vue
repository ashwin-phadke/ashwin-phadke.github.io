<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { consentBannerOpen, consentRequired } from '../analytics';
import type { Socials } from '../types';

defineProps<{
    name: string;
    socials: Socials;
}>();

// Lets European visitors change their analytics choice; decided once mounted, as it depends on the device
const showCookieSettings = ref(false);
onMounted(() => {
    showCookieSettings.value = consentRequired();
});
</script>

<template>
    <footer
        class="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500 dark:text-neutral-400 text-sm">
        <p>© {{ new Date().getFullYear() }} {{ name }}. Built with Vue & Tailwind.</p>
        <div class="flex gap-8">
            <button v-if="showCookieSettings" @click="consentBannerOpen = true"
                class="hover:text-neutral-900 dark:hover:text-white transition-colors">Cookie settings</button>
            <a :href="socials.twitter" target="_blank" rel="noopener noreferrer"
                class="hover:text-neutral-900 dark:hover:text-white transition-colors">Twitter</a>
            <a :href="socials.linkedin" target="_blank" rel="noopener noreferrer"
                class="hover:text-neutral-900 dark:hover:text-white transition-colors">LinkedIn</a>
        </div>
    </footer>
</template>
