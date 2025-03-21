// src/app/pages/contact/contact.component.ts
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';
import { FilterByPipe } from '../../shared/pipes/filter-by.pipe';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FilterByPipe],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('0.4s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ opacity: 0, transform: 'translateX(20px)' }))
      ])
    ]),
    trigger('formAnimation', [
      transition(':enter', [
        query('.form-group', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('buttonAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.5s 0.3s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('pulseAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0', opacity: 0, overflow: 'hidden' })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ]),
    trigger('feedbackAnimation', [
      state('success', style({ backgroundColor: 'rgba(76, 175, 80, 0.1)', borderColor: '#4caf50' })),
      state('error', style({ backgroundColor: 'rgba(244, 67, 54, 0.1)', borderColor: '#f44336' })),
      state('info', style({ backgroundColor: 'rgba(33, 150, 243, 0.1)', borderColor: '#2196f3' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit, AfterViewInit {
  contactForm!: FormGroup;
  formSubmitted = false;
  formSuccess = false;
  isLoading = false;
  activeTab: string = 'form';
  showFaq: boolean = false;
  selectedFaq: number | null = null;

  feedbackMessage: string = '';
  feedbackType: 'success' | 'error' | 'info' | '' = '';
  showFeedback: boolean = false;

  // Informações de contato
  contactInfo = {
    email: 'joao.pedro@exemplo.com',
    phone: '+351 123 456 789',
    whatsapp: '351123456789',
    location: 'Lisboa, Portugal',
    responseTime: '24 horas',
    socialMedia: [
      { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'fab fa-linkedin' },
      { name: 'GitHub', url: 'https://github.com/', icon: 'fab fa-github' },
      { name: 'Twitter', url: 'https://twitter.com/', icon: 'fab fa-twitter' },
      { name: 'Instagram', url: 'https://instagram.com/', icon: 'fab fa-instagram' }
    ]
  };

  // FAQs com categorias
  faqs = [
    {
      question: 'Quais tipos de projetos você trabalha?',
      answer: 'Trabalho com desenvolvimento web, aplicativos móveis, sistemas corporativos e consultoria técnica. Minha especialidade está em soluções digitais completas usando tecnologias modernas como Angular, React, Node.js e .NET.',
      category: 'servicos'
    },
    {
      question: 'Qual é o seu processo de trabalho?',
      answer: 'Meu processo inclui análise de requisitos, protótipos, desenvolvimento iterativo e suporte pós-lançamento. Trabalho de forma ágil, com entregas incrementais e feedback contínuo para garantir que o produto final atenda exatamente às suas necessidades.',
      category: 'processo'
    },
    {
      question: 'Quanto tempo leva para concluir um projeto?',
      answer: 'O tempo varia de acordo com a complexidade. Projetos pequenos podem levar 2-4 semanas, enquanto projetos maiores podem levar 2-6 meses. Sempre estabelecemos um cronograma detalhado no início do projeto com marcos claros e datas de entrega.',
      category: 'processo'
    },
    {
      question: 'Você oferece manutenção após a conclusão?',
      answer: 'Sim, ofereço planos de manutenção e suporte técnico para todos os projetos concluídos. Tenho opções de suporte mensal, trimestral ou sob demanda, dependendo das suas necessidades específicas.',
      category: 'servicos'
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'Trabalho com um modelo de pagamento dividido em etapas: 30% no início, 30% no meio do projeto e 40% na entrega. Aceito transferências bancárias, cartões de crédito e, para clientes internacionais, pagamentos via PayPal ou transferwise.',
      category: 'pagamento'
    },
    {
      question: 'Você trabalha com projetos internacionais?',
      answer: 'Sim, trabalho com clientes de todo o mundo. Tenho experiência com equipes distribuídas e posso me adaptar a diferentes fusos horários para garantir uma comunicação eficiente.',
      category: 'servicos'
    },
    {
      question: 'Quais são as formas de comunicação durante o projeto?',
      answer: 'Utilizo ferramentas como Slack, Microsoft Teams ou Discord para comunicação diária, Jira ou Trello para gestão de tarefas, e reuniões regulares por vídeo para acompanhamento do progresso.',
      category: 'processo'
    }
  ];

  // Categoria de FAQ selecionada
  selectedFaqCategory: string = 'todas';


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  // Aba inicial

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  toggleFaq(index: number) {
    this.selectedFaq = this.selectedFaq === index ? null : index;
  }

  // Filtrar FAQs por categoria
  filterFaqsByCategory(category: string) {
    this.selectedFaqCategory = category;
    this.selectedFaq = null; // Fecha qualquer FAQ aberta

    // Adiciona animação aos botões de categoria
    setTimeout(() => {
      const buttons = document.querySelectorAll('.faq-category-btn');
      buttons.forEach(btn => {
        if (btn.textContent?.toLowerCase().includes(category.toLowerCase())) {
          btn.classList.add('animate-selection');
          setTimeout(() => btn.classList.remove('animate-selection'), 500);
        }
      });
    }, 0);

    return this.faqs.filter(faq =>
      category === 'todas' || faq.category === category.toLowerCase()
    );
  }

  contactViaEmail() {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }

  contactViaWhatsApp() {
    window.open(`https://wa.me/${this.contactInfo.whatsapp}`, '_blank');
  }

  selectProjectType(type: string) {
    this.contactForm.get('projectType')?.setValue(type);
    // Adiciona animação ao selecionar
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      if (card.classList.contains('selected')) {
        card.classList.remove('animate-selection');
        const width = (Element as unknown as HTMLElement).offsetWidth; // Reinicia a animação
        card.classList.add('animate-selection');
      }
    });
  }

  // Método para selecionar a urgência com feedback visual
  selectUrgency(level: 'low' | 'normal' | 'high') {
    this.contactForm.get('urgency')?.setValue(level);

    // Atualiza classes para feedback visual
    const options = document.querySelectorAll('.urgency-option');
    options.forEach(option => {
      if (option.classList.contains('selected')) {
        option.classList.add('animate-selection');
        setTimeout(() => option.classList.remove('animate-selection'), 500);
      }
    });

    // Retorna texto descritivo baseado no nível
    return level === 'low' ? 'Sem pressa' :
           level === 'normal' ? 'Prazo padrão' : 'Urgente';
  }

  // Getters para acessar os controles do formulário
  get nameControl() { return this.contactForm.get('name'); }
  get emailControl() { return this.contactForm.get('email'); }
  get subjectControl() { return this.contactForm.get('subject'); }
  get messageControl() { return this.contactForm.get('message'); }
  get phoneControl() { return this.contactForm.get('phone'); }
  get projectTypeControl() { return this.contactForm.get('projectType'); }
  get urgencyControl() { return this.contactForm.get('urgency'); }

  ngAfterViewInit(): void {
    // A implementação do mapa foi removida para simplificar
    // e evitar erros relacionados à API do Google Maps
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      phone: ['', [Validators.pattern('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$')]],
      projectType: ['website'],
      urgency: ['normal'],
      message: ['', [Validators.required, Validators.minLength(10)]],
      honeypot: ['']
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.formSuccess = true;
        this.contactForm.reset();
        this.formSubmitted = false;
      }, 1500);
    }
  }
}
