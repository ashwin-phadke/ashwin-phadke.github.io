<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useHead } from '@unhead/vue';
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import ConsentBanner from './components/ConsentBanner.vue';
import { PROFILE_DATA, SITE_URL } from './data';
import { navItems, pathForLegacyHash, useActiveTab } from './navigation';
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
    // Read back by the inline script in index.html; storage can be blocked, e.g. in private windows
    try {
        localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
    } catch { }
};

// PROFILE_DATA.title is a tagline, so the role used for search results is kept here
const JOB_TITLE = 'Sr Manager, AI/ML';

const pageTitle = computed(() => {
    // The home page is what a search for the name lands on, so it leads with the name and role
    if (route.name === 'about') return `${PROFILE_DATA.name} | ${JOB_TITLE}`;
    const post = route.name === 'post' ? findPost(String(route.params.slug)) : undefined;
    const label = post?.title ?? navItems.find(n => n.id === activeTab.value)?.label;
    return `${label ?? 'Page not found'} | ${PROFILE_DATA.name}`;
});

// Left out on the 404 page, which has no address of its own
const pageUrl = computed(() => route.name === 'not-found' ? undefined : `${SITE_URL}${route.path}`);

// Link-preview tags for every page; PostView overrides the ones that differ per post
useHead({
    title: pageTitle,
    meta: [
        { property: 'og:title', content: pageTitle },
        { property: 'og:url', content: pageUrl },
        { property: 'og:image', content: `${SITE_URL}${PROFILE_DATA.avatarUrl}` },
        { name: 'twitter:card', content: 'summary' },
    ],
    link: () => pageUrl.value ? [{ rel: 'canonical', href: pageUrl.value }] : [],
});

// Structured data for search engines: the site's name, and who it belongs to with their other profiles.
// Posts refer back to this Person by its @id as their author, in PostView.vue.
useHead({
    script: () => route.name === 'about' ? [{
        type: 'application/ld+json',
        key: 'structured-data',
        innerHTML: {
            '@context': 'https://schema.org',
            '@graph': [
                { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: PROFILE_DATA.name, url: `${SITE_URL}/` },
                {
                    '@type': 'Person',
                    '@id': `${SITE_URL}/#person`,
                    name: PROFILE_DATA.name,
                    jobTitle: JOB_TITLE,
                    url: `${SITE_URL}/`,
                    image: `${SITE_URL}${PROFILE_DATA.avatarUrl}`,
                    sameAs: Object.values(PROFILE_DATA.socials).filter(Boolean),
                },
            ],
        },
    }] : [],
});

onMounted(() => {
    isDarkMode.value = document.documentElement.classList.contains('dark');

    // Done here, not in a route guard, so the page first hydrates as the pre-rendered home page
    const legacyPath = route.path === '/' && pathForLegacyHash(route.hash);
    if (legacyPath) router.replace(legacyPath);
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
                    <Navigation :active-tab="activeTab" :nav-items="navItems" />

                    <!-- Content Area -->
                    <main class="min-h-[500px]">
                        <RouterView />
                    </main>

                    <Footer :name="PROFILE_DATA.name" :socials="PROFILE_DATA.socials" />
                </div>
            </div>
        </div>

        <!-- Loads Google Analytics, asking European visitors first -->
        <ConsentBanner />
    </div>
</template>
