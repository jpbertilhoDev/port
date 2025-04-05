export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  image?: string;
  projectUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  codeUrl?: string;
  featured: boolean;
  category?: string;
  completed?: string;
  client?: string;
}