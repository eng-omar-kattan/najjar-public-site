import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [App] }).compileComponents(); });
  it('creates the public site', () => { expect(TestBed.createComponent(App).componentInstance).toBeTruthy(); });
  it('renders Arabic first', () => {
    const fixture = TestBed.createComponent(App); fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent).toContain('المعرفة لا تنقصنا');
    expect(document.documentElement.dir).toBe('rtl');
  });
});
