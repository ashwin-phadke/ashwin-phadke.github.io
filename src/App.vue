<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
    User,
    Briefcase,
    BookOpen,
    Mail,
    Code2,
    Heart,
    Mic,
    Award
} from 'lucide-vue-next';
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import AboutTab from './components/AboutTab.vue';
import WorkTab from './components/WorkTab.vue';
import ExperienceTab from './components/ExperienceTab.vue';
import VolunteerTab from './components/VolunteerTab.vue';
import AwardsTab from './components/AwardsTab.vue';
import BlogTab from './components/BlogTab.vue';
import TalksTab from './components/TalksTab.vue';
import ContactTab from './components/ContactTab.vue';
import Footer from './components/Footer.vue';
import { PROFILE_DATA } from './data';

// State
const activeTab = ref('about');
const isDarkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches);

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
};

const navItems = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'work', icon: Code2, label: 'Work' },
    { id: 'experience', icon: Briefcase, label: 'Career' },
    { id: 'volunteer', icon: Heart, label: 'Volunteer' },
    { id: 'awards', icon: Award, label: 'Achievements' },
    { id: 'blog', icon: BookOpen, label: 'Blog' },
    { id: 'talks', icon: Mic, label: 'Talks' },
    { id: 'contact', icon: Mail, label: 'Contact' }
];

const updateGA = (tabId: string) => {
    const item = navItems.find(n => n.id === tabId);
    if (!item) return;

    // Update document title
    document.title = `${item.label} | ${PROFILE_DATA.name}`;

    // Track page view in GA
    if (typeof window.gtag === 'function') {
        window.gtag('config', 'UA-103783670-1', {
            'page_title': `${item.label} | ${PROFILE_DATA.name}`,
            'page_path': `/#${tabId}`
        });
    }
};

// Handle navigation
const handleNavClick = (id: string) => {
    activeTab.value = id;
    window.location.hash = id;
    updateGA(id);
    window.scrollTo(0, 0);
};

onMounted(() => {
    // Handle initial load with hash
    const hash = window.location.hash.replace('#', '');
    if (hash && navItems.some(n => n.id === hash)) {
        activeTab.value = hash;
    }
    updateGA(activeTab.value);
});
</script>

<template>
    <div :class="isDarkMode ? 'dark' : ''">
        <div
            class="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-neutral-200 dark:selection:bg-neutral-800 transition-colors duration-500">
            <div class="max-w-7xl mx-auto px-6 py-12 md:py-24">
                <div class="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
                    <!-- Sidebar (Header) -->
                    <div class="lg:col-span-3 lg:sticky lg:top-24 mb-12 lg:mb-0">
                        <Header :profile="PROFILE_DATA" :is-dark-mode="isDarkMode" @toggle-theme="toggleDarkMode" />
                    </div>

                    <!-- Main Content -->
                    <div class="lg:col-span-9">
                        <!-- Navigation -->
                        <Navigation :active-tab="activeTab" :nav-items="navItems" @nav-click="handleNavClick" />

                        <!-- Content Area -->
                        <main class="min-h-[500px]">
                            <!-- About Tab -->
                            <AboutTab v-if="activeTab === 'about'" :profile="PROFILE_DATA" />

                            <!-- Work Tab -->
                            <WorkTab v-if="activeTab === 'work'" :projects="PROFILE_DATA.projects" />

                            <!-- Experience Tab -->
                            <ExperienceTab v-if="activeTab === 'experience'" :experience="PROFILE_DATA.experience" />

                            <!-- Volunteer Tab -->
                            <VolunteerTab v-if="activeTab === 'volunteer'" :volunteer="PROFILE_DATA.volunteer" />

                            <!-- Awards Tab -->
                            <AwardsTab v-if="activeTab === 'awards'" :awards="PROFILE_DATA.awards" />

                            <!-- Blog Tab -->
                            <BlogTab v-if="activeTab === 'blog'" :posts="PROFILE_DATA.blogPosts" />

                            <!-- Talks Tab -->
                            <TalksTab v-if="activeTab === 'talks'" :talks="PROFILE_DATA.talks" />

                            <!-- Contact Tab -->
                            <ContactTab v-if="activeTab === 'contact'" :email="PROFILE_DATA.email" />
                        </main>

                        <Footer :name="PROFILE_DATA.name" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* 
  Tailwind's animate-in classes can sometimes be tricky without the specific plugin configuration 
  or if the versions mismatch, but standard Tailwind classes are used here. 
  "animate-in", "fade-in", "slide-in-from-bottom-4" are typical of 'tailwindcss-animate' plugin
  which isn't strictly in my package.json, but often people alias them or use them in their config.
  
  The original component used them. If they aren't working, I might need to add `tailwindcss-animate`
  or define keyframes. 
  
  Checking the original code: 
  `className="animate-in fade-in slide-in-from-bottom-4 duration-700"`
  
  These are definitely `tailwindcss-animate` utility classes. 
  I should add `tailwindcss-animate` to dependencies to ensure 1:1 visual match.
*/
</style>
