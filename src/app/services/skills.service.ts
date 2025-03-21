import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: Skill[] = [
    {
      id: 1,
      name: 'HTML5',
      level: 5,
      category: 'frontend',
      icon: 'fab fa-html5'
    },
    {
      id: 2,
      name: 'CSS3',
      level: 4,
      category: 'frontend',
      icon: 'fab fa-css3-alt'
    },
    {
      id: 3,
      name: 'JavaScript',
      level: 4,
      category: 'frontend',
      icon: 'fab fa-js'
    },
    {
      id: 4,
      name: 'Angular',
      level: 4,
      category: 'frontend',
      icon: 'fab fa-angular'
    },
    {
      id: 5,
      name: 'React',
      level: 3,
      category: 'frontend',
      icon: 'fab fa-react'
    },
    {
      id: 6,
      name: 'Node.js',
      level: 3,
      category: 'backend',
      icon: 'fab fa-node-js'
    },
    {
      id: 7,
      name: 'MongoDB',
      level: 3,
      category: 'backend',
      icon: 'fas fa-database'
    },
    {
      id: 8,
      name: 'Git',
      level: 4,
      category: 'other',
      icon: 'fab fa-git-alt'
    }
  ];

  constructor() { }

  getSkills(): Skill[] {
    return this.skills;
  }

  getSkillsByCategory(category: 'frontend' | 'backend' | 'other'): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}
