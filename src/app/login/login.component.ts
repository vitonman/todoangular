import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'vita';
  password = '';
  errorMessage = 'Invalid credentials: ';
  invalidLogin = false;

  constructor(private router: Router,
              public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      //redirect
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }

    console.log(this.username + " pass:" +this.password);
  }

}
