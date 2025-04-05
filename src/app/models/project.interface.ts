
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  imageUrl?: string;
  technologies: string[];
  demoUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  completed: string;
  client?: string;
}
