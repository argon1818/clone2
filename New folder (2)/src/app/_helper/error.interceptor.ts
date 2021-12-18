import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'; 
import { LoginService } from '../service/login.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService,private router: Router,private toastr:ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                localStorage.removeItem("access_token");
                localStorage.removeItem('user');
                // this.loginService.currentUserSubject.next(null)
                this.router.navigate(['/']).then(() => {
                  window.location.reload();
                  this.toastr.error("مدت زمان اعتبار شما پایان یافت، لطفا مجددا وارد شوید.", 'خطا!');

                });
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }

    
}