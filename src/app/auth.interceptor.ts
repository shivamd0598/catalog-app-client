import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

//const TOKEN_HEADER="Authorization";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private login:LoginService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //add jwt token(localStorage) request
        let authReq=req;
        const token=this.login.getToken();
        console.log("Inside Intercept");
        if(token!=null){
            console.log("Token not null");
            authReq=authReq.clone({
                setHeaders: { Authorization: `Bearer ${token}`}
            });
            console.log("Headers are set");
        }
        return next.handle(authReq);
    }
}
/*
export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        userClass:AuthInterceptor,
        multi:true
    }
    
]*/