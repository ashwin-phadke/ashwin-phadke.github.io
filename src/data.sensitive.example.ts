import type { ProfileData, Award } from './types';

export const awards: Award[] = [
    {
        title: "Example Award",
        date: "2024",
        issuer: "Example Issuer",
        description: "Description of the award."
    }
];

export const PROFILE_DATA: ProfileData = {
    name: "John Doe",
    title: "Software Engineer",
    avatarUrl: "/profile.jpeg",
    email: "john@example.com",
    socials: {
        github: "https://github.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/"
    },
    skills: ["Skill 1", "Skill 2"],
    about: "About me...",
    projects: [],
    experience: [],
    volunteer: [],
    awards: awards,
    testimonials: [],
    talks: [],
    blogPosts: []
};
