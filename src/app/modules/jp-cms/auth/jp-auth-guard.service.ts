import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JpAuthService } from './jp-auth.service';

@Injectable()
export class JpAuthGuardService implements CanActivate {
  constructor(public auth: JpAuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
