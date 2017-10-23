import { Injectable } from '@angular/core';
import { AuthService } from './login/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ApplicationHttpInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // let token: string = localStorage.getItem('token');
        const token = 'token';
        const newRequest = req.clone(
            {
                setHeaders: {
                    Authorization: token
                }
            }
        );
        return next.handle(newRequest).catch(this.handlerError);
    }

    handlerError = (response) => {
        if (response instanceof HttpErrorResponse) {

            switch (response.status) {
                case 401:
                    console.log('Erro 401', response);
                    this.router.navigate(['./login']);
                    break;
                case 404:
                    console.log('Erro 404', response);
                    this.router.navigate(['/404']);
                    break;
                default:
                    console.log('Processing http error', response);
                    break;
            }
        }

        return Observable.throw(response);
    }

}
