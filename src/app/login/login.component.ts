import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input("username") username = 'vita';
  @Input("password") password = '';
  errorMessage = 'invalid credentials: ';
  invalidLogin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.username === "vita" && this.password == "pass"){
      //redirect
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }

    console.log(this.username + " pass:" +this.password);
  }

}
