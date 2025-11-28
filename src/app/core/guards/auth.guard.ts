import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const _router = inject(Router);

  // For now, simply return true to allow access
  // Later you will implement the real authentication logic
  return true;

  // When you implement your authentication system, you will use something like:
  // if (authService.isAuthenticated()) {
  //   return true;
  // }
  // return _router.parseUrl('/login');
};