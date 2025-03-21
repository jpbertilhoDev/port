import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBadgeComponent } from '../../components/skill-badge/skill-badge.component';
import { Skill } from '../../models/skill.interface';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule, SkillBadgeComponent],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerList', [
      transition(':enter', [
        query('.stagger-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  skills: Skill[] = [
    { id: 1, name: 'HTML/CSS', level: 5, category: 'frontend' },
    { id: 2, name: 'JavaScript', level: 4, category: 'frontend' },
    { id: 3, name: 'TypeScript', level: 4, category: 'frontend' },
    { id: 4, name: 'Angular', level: 4, category: 'frontend' },
    { id: 5, name: 'React', level: 3, category: 'frontend' },
    { id: 6, name: 'Node.js', level: 3, category: 'backend' },
    { id: 7, name: 'Python', level: 3, category: 'backend' },
    { id: 8, name: 'UI/UX Design', level: 4, category: 'other' },
  ];

  experiences = [
    {
      position: 'Desenvolvedor Front-end Senior',
      company: 'Empresa Tecnológica',
      period: 'Jan 2021 - Presente',
      description:
        'Desenvolvimento de aplicações web usando Angular, implementação de UI/UX, otimização de performance.',
    },
    {
      position: 'Desenvolvedor Full Stack',
      company: 'Agência Digital',
      period: 'Mar 2018 - Dez 2020',
      description:
        'Desenvolvimento de aplicações web e mobile usando React, Node.js e MongoDB.',
    },
    {
      position: 'Desenvolvedor Web Junior',
      company: 'Startup Inovadora',
      period: 'Jun 2016 - Fev 2018',
      description:
        'Desenvolvimento de websites responsivos usando HTML, CSS e JavaScript.',
    },
  ];

  education = [
    {
      degree: 'Bacharelado em Ciência da Computação',
      institution: 'Universidade Federal',
      year: '2016',
      description: 'Formação completa em fundamentos da computação, algoritmos, estruturas de dados e desenvolvimento de software.',
    },
    {
      degree: 'Especialização em Desenvolvimento Web',
      institution: 'Instituto de Tecnologia',
      year: '2018',
      description: 'Especialização focada em tecnologias web modernas, incluindo frameworks front-end e desenvolvimento back-end.',
  }
]

  certifications = [
    {
      name: 'Angular Certified Developer',
      issuer: 'Google',
      year: '2022',
      icon: 'fab fa-angular'
    },
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2021',
      icon: 'fab fa-aws'
    },
    {
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      year: '2020',
      icon: 'fas fa-users-cog'
    }
  ];

  projects = [
    {
      name: 'E-commerce Platform',
      description: 'Plataforma completa de comércio eletrônico com painel administrativo, gateway de pagamento e sistema de gestão de estoque.',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      image: 'assets/images/projects/ecommerce.jpg'
    },
    {
      name: 'Dashboard Analytics',
      description: 'Sistema de análise de dados em tempo real com visualizações interativas e relatórios personalizados.',
      technologies: ['React', 'D3.js', 'Firebase'],
      image: 'assets/images/projects/dashboard.jpg'
    },
    {
      name: 'App de Fitness',
      description: 'Aplicativo mobile para acompanhamento de treinos, nutrição e progresso físico.',
      technologies: ['React Native', 'GraphQL', 'Node.js'],
      image: 'assets/images/projects/fitness.jpg'
    }
  ];

  activeTab: 'skills' | 'experience' | 'education' | 'certifications' = 'skills';

  ngOnInit(): void {
    // Inicialização do componente
  }

  setActiveTab(tab: 'skills' | 'experience' | 'education' | 'certifications'): void {
    this.activeTab = tab;
  }

  // Método para baixar currículo
  downloadCV(): void {
    // Implementação real substituiria isso por um link para o arquivo do currículo
    const link = document.createElement('a');
    link.href = 'assets/docs/curriculo.pdf';
    link.download = 'Joao_Paulo_CV.pdf';
    link.click();
  }
}
