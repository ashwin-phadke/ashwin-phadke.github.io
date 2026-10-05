<script setup lang="ts">
import AboutTab from '../components/AboutTab.vue';
import ExperienceTab from '../components/ExperienceTab.vue';
import ProjectsTab from '../components/ProjectsTab.vue';
import VolunteerTab from '../components/VolunteerTab.vue';
import AwardsTab from '../components/AwardsTab.vue';
import BlogTab from '../components/BlogTab.vue';
import TalksTab from '../components/TalksTab.vue';
import ContactTab from '../components/ContactTab.vue';
import { PROFILE_DATA } from '../data';
import { useActiveTab } from '../navigation';
import { posts } from '../posts';

const activeTab = useActiveTab();
</script>

<template>
    <!-- About Tab -->
    <AboutTab v-if="activeTab === 'about'" :profile="PROFILE_DATA" />

    <!-- Experience (Career) Tab -->
    <ExperienceTab v-if="activeTab === 'experience'" :experience="PROFILE_DATA.experience" />

    <!-- Projects Tab -->
    <ProjectsTab v-if="activeTab === 'projects'" :projects="PROFILE_DATA.projects" />

    <!-- Volunteer Tab -->
    <VolunteerTab v-if="activeTab === 'volunteer'" :volunteer="PROFILE_DATA.volunteer" />

    <!-- Awards Tab -->
    <AwardsTab v-if="activeTab === 'awards'" :awards="PROFILE_DATA.awards" :certificates="PROFILE_DATA.certificates" />

    <!-- Blog Tab -->
    <BlogTab v-if="activeTab === 'blog'" :posts="posts" />

    <!-- Talks Tab -->
    <TalksTab v-if="activeTab === 'talks'" :talks="PROFILE_DATA.talks" />

    <!-- Contact Tab -->
    <ContactTab v-if="activeTab === 'contact'" :email="PROFILE_DATA.email" />
</template>
