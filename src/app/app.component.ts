// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
    selector: 'app-root', // <-- ojo aquí
    imports: [
        CommonModule, // directivas ngIf, ngFor…
        RouterOutlet, // para <router-outlet>
        HeaderComponent, // tus componentes
        FooterComponent,
    ],
    template: `
    <app-header></app-header>
    <main><router-outlet></router-outlet></main>
    <app-footer></app-footer>
  `,
    styles: [
        `
      main {
        min-height: calc(100vh - 60px);
      }
    `,
    ]
})
export class AppComponent {}
