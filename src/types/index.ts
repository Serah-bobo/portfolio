// Site configuration types
export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: Author;
  social: SocialLinks;
  navigation: NavItem[];
}

export interface Author {
  name: string;
  email: string;
  location: string;
  availability: string;
  resume: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  stackoverflow?: string;
  devto?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

// Theme types
export type Theme = 'light' | 'dark';