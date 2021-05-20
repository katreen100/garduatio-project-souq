import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/old-services/users-service.service';

@Injectable({
  providedIn: 'any'
})
export class AuthGaurdServiceService implements CanActivate {

  constructor(private userService:UserAuthService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      let logged = this.userService.isLogged();
      if(!logged)
        this.router.navigate(['/login'])
      
      return logged;
  }
}
