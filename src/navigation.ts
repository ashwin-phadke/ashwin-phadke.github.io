import { computed } from 'vue';
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
} from '@lucide/vue';

// Each id is also the name of the tab's route
export const navItems = [
    { id: 'about', path: '/', icon: User, label: 'About' },
    { id: 'experience', path: '/career', icon: Briefcase, label: 'Career' },
    { id: 'projects', path: '/projects', icon: Code2, label: 'Projects' },
    { id: 'volunteer', path: '/volunteer', icon: Heart, label: 'Volunteer' },
    { id: 'awards', path: '/achievements', icon: Award, label: 'Achievements' },
    { id: 'blog', path: '/blog', icon: BookOpen, label: 'Blog' },
    { id: 'talks', path: '/talks', icon: Mic, label: 'Talks' },
    { id: 'contact', path: '/contact', icon: Mail, label: 'Contact' }
];

export const useActiveTab = () => {
    const route = useRoute();
    return computed(() => route.name === 'post' ? 'blog' : String(route.name));
};

// Tabs used to be hashes on the home page (/#projects); returns the page such a link now points to
export const pathForLegacyHash = (hash: string) => {
    const id = hash.replace('#', '');
    return navItems.find(n => n.id === (id === 'work' ? 'projects' : id))?.path;
};
