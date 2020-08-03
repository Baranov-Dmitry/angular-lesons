import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterseptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      headers: req.headers.append('Auth', 'SOME RENDOM TOCKEN')
    })
    console.log('intercept request', req)
    return next.handle(cloned).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log('Event Type Response', event)
        }
      })
    )
  }

}