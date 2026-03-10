export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  categories: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  challenges?: string[];
}