import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { CalculatorComponent } from './modules/calculator/calculator.component';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
import { ServicesComponent } from './modules/services/services.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HowItWorksComponent } from './modules/how-it-works/how-it-works.component';
import { ContactComponent } from './modules/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TrackingComponent } from './modules/tracking/tracking.component';

export const routes: Routes = [
  // Rutas públicas principales
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'contact', component: ContactComponent },

  // Rutas de autenticación
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },

  // Módulo admin con lazy loading
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [adminGuard],
  },

  // Ruta para 404
  { path: '**', component: NotFoundComponent },
];
