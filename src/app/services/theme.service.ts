import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private colorTheme = new BehaviorSubject<string>('light');
  
  // Observable para componentes assinarem
  public theme$ = this.colorTheme.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    
    // Verificar preferência salva no localStorage ou preferência do sistema
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    this.setColorTheme(savedTheme);
  }

  setColorTheme(theme: string) {
    this.colorTheme.next(theme);
    localStorage.setItem('theme', theme);
    
    // Aplicar classe ao elemento HTML
    if (theme === 'dark') {
      this.renderer.addClass(document.documentElement, 'dark-theme');
      this.renderer.removeClass(document.documentElement, 'light-theme');
    } else {
      this.renderer.addClass(document.documentElement, 'light-theme');
      this.renderer.removeClass(document.documentElement, 'dark-theme');
    }
  }

  toggleTheme() {
    const current = this.colorTheme.getValue();
    const newTheme = current === 'light' ? 'dark' : 'light';
    this.setColorTheme(newTheme);
  }

  getCurrentTheme(): string {
    return this.colorTheme.getValue();
  }
}