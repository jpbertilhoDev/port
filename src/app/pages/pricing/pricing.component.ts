
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface PricingPlan {
  id: string;
  name: string;
  priceEUR: number;
  priceBRL: number;
  features: string[];
  recommended?: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  currency: 'EUR' | 'BRL' = 'EUR';
  euroType: 'EUR' | 'EUR_ALT' = 'EUR';
  
  plans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'Básico',
      priceEUR: 19.99,
      priceBRL: 119.90,
      features: [
        'Design responsivo',
        'SEO básico',
        'Hospedagem inclusa',
        'Suporte por email'
      ]
    },
    {
      id: 'standard',
      name: 'Padrão',
      priceEUR: 49.99,
      priceBRL: 299.90,
      features: [
        'Todas as funcionalidades do Básico',
        'Formulário de contato',
        'Integração com redes sociais',
        'Análise de tráfego',
        'Suporte prioritário'
      ],
      recommended: true
    },
    {
      id: 'premium',
      name: 'Premium',
      priceEUR: 99.99,
      priceBRL: 599.90,
      features: [
        'Todas as funcionalidades do Padrão',
        'E-commerce integrado',
        'Otimização avançada de SEO',
        'Design personalizado',
        'Consultoria mensal',
        'Suporte 24/7'
      ]
    }
  ];

  ngOnInit(): void {}

  toggleCurrency(): void {
    this.currency = this.currency === 'EUR' ? 'BRL' : 'EUR';
  }

  toggleEuroType(): void {
    this.euroType = this.euroType === 'EUR' ? 'EUR_ALT' : 'EUR';
  }

  getCurrencySymbol(): string {
    if (this.currency === 'BRL') {
      return 'R$';
    } else {
      return this.euroType === 'EUR' ? '€' : '€';
    }
  }

  getDisplayPrice(plan: PricingPlan): string {
    const price = this.currency === 'EUR' ? plan.priceEUR : plan.priceBRL;
    return price.toFixed(2).replace('.', ',');
  }

  getCurrencyDisplay(): string {
    if (this.currency === 'BRL') {
      return 'Real';
    } else {
      return 'Euro';
    }
  }
}
