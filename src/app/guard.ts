import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const Guard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (window.screen.availWidth < 800) {
    router.navigate(['/develop']);
    return false;
  }
  return true;
};
