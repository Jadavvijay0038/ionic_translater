import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './provider/loader.service';

@Injectable()
export class InterceptServiceInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    const authReq = request.clone({
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '890fb7edf9mshd5191bc67962c96p1ef7dajsn4a951b562531',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      })
    });

    return next.handle(authReq).pipe(
      finalize(() => this.loaderService.hide()),
    );
  }
}
