import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const adminGuard = () => {
  const _router = inject(Router);

  // For now, simply return true to allow access
  // Later you will implement the real authentication logic
  return true;

  // Code to add later:
  // if (authService.isAuthenticated() && authService.isAdmin()) {
  //   return true;
  // }
  // return _router.parseUrl('/access-denied');
};
