import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];  route: ActivatedRouteSnapshot;

  
  constructor(private router: Router) { }

  canActivate(state: RouterStateSnapshot):boolean {
    if (UserService.isLoggedIn()) {
      if (UserService.getUser().role == "teacher") {
        return true;
      } else {
        UserService.logout();
      }
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
