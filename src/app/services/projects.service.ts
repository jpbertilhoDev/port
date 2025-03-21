import { Injectable } from '@angular/core';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Responsivo',
      description: 'Plataforma de e-commerce completa com carrinho de compras, pagamentos e área do usuário.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB'],
      imageUrl: 'assets/images/project1.jpg',
      projectUrl: 'https://example.com/project1',
      githubUrl: 'https://github.com/username/project1',
      featured: true
    },
    {
      id: 2,
      title: 'App de Gerenciamento de Tarefas',
      description: 'Aplicativo para gerenciar tarefas com categorização, prioridades e lembretes.',
      technologies: ['React', 'Redux', 'Firebase'],
      imageUrl: 'assets/images/project2.jpg',
      projectUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/username/project2',
      featured: true
    },
    {
      id: 3,
      title: 'Dashboard Analítico',
      description: 'Dashboard interativo com gráficos e relatórios personalizáveis para análise de dados.',
      technologies: ['Vue.js', 'D3.js', 'Express'],
      imageUrl: 'assets/images/project3.jpg',
      projectUrl: 'https://example.com/project3',
      githubUrl: 'https://github.com/username/project3',
      featured: true
    },
    {
      id: 4,
      title: 'API RESTful',
      description: 'API completa para sistema de blogs com autenticação JWT e documentação Swagger.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      imageUrl: 'assets/images/project4.jpg',
      githubUrl: 'https://github.com/username/project4',
      featured: false
    },
    {
      id: 5,
      title: 'App de Clima',
      description: 'Aplicativo de previsão do tempo com geolocalização e dados em tempo real.',
      technologies: ['JavaScript', 'API REST', 'CSS3'],
      imageUrl: 'assets/images/project5.jpg',
      projectUrl: 'https://example.com/project5',
      githubUrl: 'https://github.com/username/project5',
      featured: false
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}
