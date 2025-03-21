import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-project-card',
  imports: [NgFor, NgIf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
