import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl="http://usermanagementservice-env.eba-bemy6h3p.us-west-2.elasticbeanstalk.com";
  constructor(private http:HttpClient) { }
  //generate token
  public generateToken(loginData:any){
    return this.http.post(`${this.baseUrl}/generate-token`,loginData)
  }

  //get current user
  public getCurrentUser(){
    return this.http.get(`${this.baseUrl}/current-user`);

  }

  //Login User:Set token in localStorage
  public loginUser(token){
    localStorage.setItem('token',token);
    return true;
  }

  //isLoggedIn:User is logged in or not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem('token');
    if(tokenStr==undefined||tokenStr==''||tokenStr==null){
      return false;
    }
    else{
      return true;
    }
  }

  //logout: remove token from localStorage 
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get Toke
  public getToken(){
    return localStorage.getItem('token');
  }

  //set UserDetails
  public setUser(user){
    localStorage.setItem('user',JSON.stringify(user))
  }

  //get User
  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }
  //get user role 
  public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }
}
