import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../admin/shared/services/auth.services';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private auth:AuthService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setParams: {
          auth: this.auth.token
        }
      })
    }
    return next.handle(req).
    pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('[nterceptor Error]:', error)
        this.auth.logout()
        this.router.navigate(['/admin', 'login'], {
          queryParams: {
            authFailed: true
          }
        })
        return throwError(error)
      })
    )
  }

}