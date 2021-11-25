import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:any, password:any){

    console.log(this.isUserloggedIn());

    if(username === "vita" && password == "pass"){
      sessionStorage.setItem('authenticaterUser', username);
      console.log(this.isUserloggedIn());
      return true;
    }
    return false;
  }

  isUserloggedIn(){
    let username = sessionStorage.getItem('authenticaterUser');
    return !(username === null)
  }
}
