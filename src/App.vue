<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useHead } from '@unhead/vue';
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import { PROFILE_DATA } from './data';
import { navItems, useActiveTab } from './navigation';
import { findPost } from './posts';

const route = useRoute();
const router = useRouter();

// State
const activeTab = useActiveTab();
// The dark class is set on <html> by the inline script in index.html before first paint
const isDarkMode = ref(false);

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
};

const pageTitle = computed(() => {
    const post = route.name === 'post' ? findPost(String(route.params.slug)) : undefined;
    const label = post?.title ?? navItems.find(n => n.id === activeTab.value)?.label;
    return `${label} | ${PROFILE_DATA.name}`;
});

useHead({ title: pageTitle });

// Handle navigation
const handleNavClick = (id: string) => {
    router.push({ path: '/', hash: `#${id}` });
};

onMounted(() => {
    isDarkMode.value = document.documentElement.classList.contains('dark');
});
</script>

<template>
    <div
        class="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-neutral-200 dark:selection:bg-neutral-800 transition-colors duration-500">
        <!-- Top/bottom padding scales with viewport height: 48px on short screens, up to 96px on tall ones -->
        <div class="max-w-7xl mx-auto px-6 py-12 [--page-pad:clamp(3rem,8vh,6rem)] md:py-[var(--page-pad)]">
        <!-- Layout -->
            <div class="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
                <!-- Sidebar (Header) -->
                <div class="lg:col-span-3 lg:sticky lg:top-[var(--page-pad)] mb-12 lg:mb-0">
                    <Header :profile="PROFILE_DATA" :is-dark-mode="isDarkMode" @toggle-theme="toggleDarkMode" />
                </div>

                <!-- Main Content -->
                <div class="lg:col-span-9">
                    <!-- Navigation -->
                    <Navigation :active-tab="activeTab" :nav-items="navItems" @nav-click="handleNavClick" />

                    <!-- Content Area -->
                    <main class="min-h-[500px]">
                        <RouterView />
                    </main>

                    <Footer :name="PROFILE_DATA.name" />
                </div>
            </div>
        </div>
    </div>
</template>
