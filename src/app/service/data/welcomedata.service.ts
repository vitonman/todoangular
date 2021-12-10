import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../../app.constanstants";

export class HelloWorldBean {

  constructor(public message:string) {
  }

}

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`)
    //console.log("execute Hello World Bean Service")
  }

  executeHelloWorldServiceWithPath(name: string){
/*    let basicAuthString = this.basicAuthenticationHeader();

    let header = new HttpHeaders({
      Authorization: basicAuthString
    })*/

    return this.http.get<HelloWorldBean>(
      `${API_URL}/hello-world-bean/part-variable/${name}`/*, {headers:header}*/ )
    //console.log("execute Hello World Bean Service")
  }

/*  basicAuthenticationHeader() {
    let username = 'vita';
    let password = 'password';
    let basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    return basicAuthenticationHeaderString;
  }*/

}
