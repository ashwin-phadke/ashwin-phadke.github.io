/*Added interfaces*/
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

/*Added interfaces*/
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
  /** Year and month, e.g. "2026-01" */
  date?: `${number}-${number}`;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  html: string;
  date?: string;
}

export interface Socials {
  github: string;
  twitter: string;
  linkedin: string;
}

export interface Award {
  title: string;
  date: string;
  issuer: string;
  description?: string;
  link?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date?: string;
  link?: string;
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
  volunteer: VolunteerExperience[];
  awards: Award[];
  certificates: Certificate[];
}

export interface VolunteerExperience {
  company: string;
  location?: string;
  role: string;
  period: string;
  description: string | string[];
}
