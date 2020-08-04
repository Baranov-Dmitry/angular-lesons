import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(
    private authService: AuthService,
    private pouter: Router
  ) {}

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then(isAuth=>{
      if (isAuth) {
        return true
      } else {
        this.pouter.navigate(['/'], {
          queryParams: {
            auth: false
          }
        })
      }
    })
  }
      
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state)
  }
}