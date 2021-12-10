import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HelloWorldBean} from "./data/welcomedata.service";
import {map} from "rxjs";
import {API_URL} from "../app.constanstants";
export const TOKEN = "token"
export const AUTHENTICATED_USER = "authenticaterUser";

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  executeJWTAuthenticationService(username:any, password:any){

    return this.http.post<any>(
      `${API_URL}/authenticate`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
            return data;
          }

        )
    )
    //console.log("execute Hello World Bean Service")
  }


  getAuthenticatedUser(){
    return  sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(): any{
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
  }

  isUserloggedIn(){
    let username = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(username === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean{
  constructor(public message: String) {}


}
