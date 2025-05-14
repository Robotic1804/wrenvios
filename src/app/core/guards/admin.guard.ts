// admin.guard.ts
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const adminGuard = () => {
  const router = inject(Router);

  // Por ahora, simplemente devolvemos true para permitir el acceso
  // Más tarde implementarás la lógica real de autenticación
  return true;

  // Código que añadirás más tarde:
  // if (authService.isAuthenticated() && authService.isAdmin()) {
  //   return true;
  // }
  // return router.parseUrl('/access-denied');
};
