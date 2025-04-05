import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Project } from '../../models/project.interface';
import { trigger, transition, style, animate } from '@angular/animations';

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
    ])
  ]
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
