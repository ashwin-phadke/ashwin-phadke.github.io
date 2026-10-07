import type { RouteRecordRaw } from 'vue-router';
import AboutTab from './components/AboutTab.vue';
import ExperienceTab from './components/ExperienceTab.vue';
import ProjectsTab from './components/ProjectsTab.vue';
import VolunteerTab from './components/VolunteerTab.vue';
import AwardsTab from './components/AwardsTab.vue';
import BlogTab from './components/BlogTab.vue';
import TalksTab from './components/TalksTab.vue';
import ContactTab from './components/ContactTab.vue';
import PostView from './views/PostView.vue';
import NotFoundView from './views/NotFoundView.vue';
import { PROFILE_DATA } from './data';
import { posts } from './posts';

// One page per tab; the route names match the ids in navItems
export const routes: RouteRecordRaw[] = [
    { path: '/', name: 'about', component: AboutTab, props: { profile: PROFILE_DATA } },
    { path: '/career', name: 'experience', component: ExperienceTab, props: { experience: PROFILE_DATA.experience } },
    { path: '/projects', name: 'projects', component: ProjectsTab, props: { projects: PROFILE_DATA.projects } },
    { path: '/volunteer', name: 'volunteer', component: VolunteerTab, props: { volunteer: PROFILE_DATA.volunteer } },
    {
        path: '/achievements', name: 'awards', component: AwardsTab,
        props: { awards: PROFILE_DATA.awards, certificates: PROFILE_DATA.certificates },
    },
    { path: '/blog', name: 'blog', component: BlogTab, props: { posts } },
    { path: '/talks', name: 'talks', component: TalksTab, props: { talks: PROFILE_DATA.talks } },
    { path: '/contact', name: 'contact', component: ContactTab, props: { email: PROFILE_DATA.email } },
    { path: '/blog/:slug', name: 'post', component: PostView, props: true },
    // Pre-rendered as 404.html, which GitHub Pages serves for any unknown URL
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
];
