
// auth.guard.ts
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);
  
  // Por ahora, simplemente devolvemos true para permitir el acceso
  // Más tarde implementarás la lógica real de autenticación
  return true;
  
  // Cuando implementes tu sistema de autenticación, usarás algo como:
  // if (authService.isAuthenticated()) {
  //   return true;
  // }
  // return router.parseUrl('/login');
};