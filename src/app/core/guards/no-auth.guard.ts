import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    this.router.navigate(['Guard-Test']);
    return false;
  }
}
