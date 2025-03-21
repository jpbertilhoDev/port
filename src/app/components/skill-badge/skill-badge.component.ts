import { Component, Input } from '@angular/core';
import { Skill } from '../../models/skill.interface';
import { CommonModule } from '@angular/common'; // Adicione esta importação

@Component({
  selector: 'app-skill-badge',
  imports: [CommonModule],
  templateUrl: './skill-badge.component.html',
  styleUrl: './skill-badge.component.css'
})
export class SkillBadgeComponent {
  @Input() skill!: Skill;

  getStarArray(level: number): number[] {
    return Array(level).fill(0);
  }

  getEmptyStarArray(level: number): number[] {
    return Array(5 - level).fill(0);
  }
}
