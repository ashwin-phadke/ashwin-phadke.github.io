import type { RouteRecordRaw } from 'vue-router';
import HomeView from './views/HomeView.vue';
import PostView from './views/PostView.vue';

export const routes: RouteRecordRaw[] = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/blog/:slug', name: 'post', component: PostView, props: true },
];
