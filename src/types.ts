export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Experience {
  company: string;
  location?: string;
  role?: string;
  period?: string;
  description?: string | string[];
  roles?: {
    role: string;
    period: string;
    description: string | string[];
    location?: string;
  }[];
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface Talk {
  title: string;
  event: string;
  link: string;
  date?: string;
}

export interface BlogPost {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  content: string;
}

export interface Socials {
  github: string;
  twitter: string;
  linkedin: string;
}

export interface ProfileData {
  name: string;
  title: string;
  avatarUrl: string;
  email: string;
  socials: Socials;
  skills: string[];
  about: string;
  projects: Project[];
  experience: Experience[];
  testimonials: Testimonial[];
  talks: Talk[];
  blogPosts: BlogPost[];
  volunteer: VolunteerExperience[];
}

export interface VolunteerExperience {
  company: string;
  location?: string;
  role: string;
  period: string;
  description: string | string[];
}
