import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

type Language = 'ar' | 'en';

@Component({ selector: 'app-root', imports: [], templateUrl: './app.html', styleUrl: './app.scss' })
export class App {
  private readonly document = inject(DOCUMENT);
  protected readonly language = signal<Language>('ar');
  protected readonly menuOpen = signal(false);
  protected readonly year = new Date().getFullYear();

  constructor() { this.applyLanguage('ar'); }
  protected setLanguage(language: Language): void { this.language.set(language); this.applyLanguage(language); }
  protected closeMenu(): void { this.menuOpen.set(false); }
  private applyLanguage(language: Language): void {
    this.document.documentElement.lang = language;
    this.document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    this.document.title = language === 'ar' ? 'نجّار | مساحة العمل البحثية المتكاملة' : 'Najjar | The integrated research workspace';
  }
}
