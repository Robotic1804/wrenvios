// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';

import { routes } from './app/app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    // Reemplaza importProvidersFrom(HttpClientModule) con provideHttpClient(withFetch())
    provideHttpClient(withFetch()),

    // Mantén los otros providers
    importProvidersFrom(FormsModule, ReactiveFormsModule),

    // Reemplaza importProvidersFrom(BrowserAnimationsModule) con provideAnimations()
    provideAnimations(),

    provideRouter(routes),
  ],
});
