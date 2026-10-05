import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
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

export const navItems = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'experience', icon: Briefcase, label: 'Career' },
    { id: 'projects', icon: Code2, label: 'Projects' },
    { id: 'volunteer', icon: Heart, label: 'Volunteer' },
    { id: 'awards', icon: Award, label: 'Achievements' },
    { id: 'blog', icon: BookOpen, label: 'Blog' },
    { id: 'talks', icon: Mic, label: 'Talks' },
    { id: 'contact', icon: Mail, label: 'Contact' }
];

export const useActiveTab = () => {
    const route = useRoute();

    const tabFromRoute = () => {
        if (route.name === 'post') return 'blog';
        const rawHash = route.hash.replace('#', '');
        const hash = rawHash === 'work' ? 'projects' : rawHash;
        return navItems.some(n => n.id === hash) ? hash : 'about';
    };

    // The pre-rendered HTML can't see the URL hash, so start from what it rendered
    // and only read the hash once mounted
    const activeTab = ref(route.name === 'post' ? 'blog' : 'about');
    onMounted(() => {
        activeTab.value = tabFromRoute();
    });
    watch(() => route.fullPath, () => {
        activeTab.value = tabFromRoute();
    });

    return activeTab;
};
