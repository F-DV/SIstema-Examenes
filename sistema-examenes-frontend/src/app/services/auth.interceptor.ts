import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  //Inyectamos el servicio
  constructor(private loginService:LoginService){}

  //Interceptamos la peticion para establecer el token en la cabezera
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = req; //Request
    const token = this.loginService.getToken();

    if(token != null){
      authReq = authReq.clone({
        setHeaders : {Authorization:`Bearer ${token}`}
      })
    }

      return next.handle(authReq);
  }
}
//contanste que se exporta en el app.module.ts
export const authInterceptorProviders = [
  {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  }
]
