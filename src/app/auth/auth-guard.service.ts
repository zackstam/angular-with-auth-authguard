import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) { }

  canActivate(): boolean {
    if (!this.getToken()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  public getToken(): string {
    return localStorage.getItem('id_token');
}

}
