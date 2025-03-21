import { Pipe, PipeTransform } from '@angular/core';

interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

@Pipe({
  name: 'filterBy',
  standalone: true
})
export class FilterByPipe implements PipeTransform {
  transform(items: FAQ[], category: string): FAQ[] {
    if (!items || !category) {
      return items;
    }
    
    // Se a categoria for 'todas', retorna todos os itens
    if (category === 'todas') {
      return items;
    }
    
    // Filtra os itens pela categoria
    return items.filter(item => item.category === category);
  }
}