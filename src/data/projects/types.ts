export interface ProjectTranslations {
  title: string;
  tagline: string;
  description: string;
  context: string;
  role: string;
  features: string[];
  techDecisions: {
    title: string;
    reason: string;
    benefit: string;
  }[];
  challenges: {
    problem: string;
    solution: string;
  }[];
}

export interface Project {
  slug: string;
  category: 'saas' | 'ecommerce' | 'landing' | 'corporate';
  client?: string;
  year: string;
  status: 'production' | 'development' | 'archived';
  techStack: string[];
  images: {
    hero: string;
    gallery?: string[];
  };
  links: {
    liveDemo?: string;
    github?: string;
    isPrivate?: boolean;
  };
  translations: {
    en: ProjectTranslations;
    es: ProjectTranslations;
    pt: ProjectTranslations;
  };
}
