import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  // routes: any;
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean {
  //   if (localStorage.getItem('username') != null) {
  //     return true;
  //   }
  //   else{
  //     this.routes.navigate(['../login']);
  //     return false;
  //   }
  // }
  constructor(private loginService: LoginService, private route: Router) {}
  canActivate() {
    if (this.loginService.isAuthenticated()) {
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }
}
