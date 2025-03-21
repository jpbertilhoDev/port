import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { SkillBadgeComponent } from '../../components/skill-badge/skill-badge.component';
import { Project } from '../../models/project.interface';
import { Skill } from '../../models/skill.interface';
import { ProjectsService } from '../../services/projects.service';
import { SkillsService } from '../../services/skills.service';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [RouterModule, NgFor, ProjectCardComponent, SkillBadgeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerList', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(15px)' }),
          stagger('100ms', [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  featuredProjects: Project[] = [];
  skills: Skill[] = [];
  featuredTechs: string[] = ['Angular', 'React', 'Node.js', 'TypeScript', 'MongoDB'];
  typingText: string = '';
  fullText: string = 'Full Stack';
  private typingSpeed: number = 150;
  private typingTimer: any;

  constructor(
    private projectsService: ProjectsService,
    private skillsService: SkillsService
  ) {}

  ngOnInit(): void {
    this.featuredProjects = this.projectsService.getFeaturedProjects();
    this.skills = this.skillsService.getSkills();
  }

  ngAfterViewInit(): void {
    // Start the typing animation after a short delay
    setTimeout(() => this.startTypingAnimation(), 1000);
    this.animateParticles();
  }

  private startTypingAnimation(): void {
    let i = 0;
    this.typingTimer = setInterval(() => {
      if (i < this.fullText.length) {
        this.typingText += this.fullText.charAt(i);
        i++;
      } else {
        clearInterval(this.typingTimer);
        // After a pause, reset and start again
        setTimeout(() => {
          this.typingText = '';
          this.startTypingAnimation();
        }, 2000);
      }
    }, this.typingSpeed);
  }

  private animateParticles(): void {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
      this.animateParticle(particle as HTMLElement);
    });
  }

  private animateParticle(particle: HTMLElement): void {
    const duration = 15 + Math.random() * 10;
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const size = 5 + Math.random() * 15;
    const delay = Math.random() * 5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${xPos}%`;
    particle.style.top = `${yPos}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
  }
}
