import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Project } from '../../models/project.interface';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('techStagger', [
      transition(':enter', [
        query('.tech-tag', [
          style({ opacity: 0, transform: 'translateY(10px)' }),
          stagger(50, [
            animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProjectCardComponent {
  @Input() project!: Project;
  
  // Método para aplicar a classe de cor baseada no nome da tecnologia
  getTechClass(tech: string): string {
    const techLower = tech.toLowerCase();
    
    if (techLower.includes('angular')) return 'tech-angular';
    if (techLower.includes('react')) return 'tech-react';
    if (techLower.includes('vue')) return 'tech-vue';
    if (techLower.includes('node')) return 'tech-node';
    if (techLower.includes('mongo')) return 'tech-mongo';
    if (techLower.includes('sql')) return 'tech-sql';
    if (techLower.includes('aws')) return 'tech-aws';
    if (techLower.includes('docker')) return 'tech-docker';
    
    return '';
  }
}
