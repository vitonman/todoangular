import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {HardcodedAuthenticationService} from "./hardcoded-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router
      ) { }
//done
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.hardcodedAuthenticationService.isUserloggedIn()){
      return true;
    }
    this.router.navigate(['login']);

    return false;
  }
}
