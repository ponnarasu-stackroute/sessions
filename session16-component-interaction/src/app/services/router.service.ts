import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class RouterService {

  constructor(public router : Router) { } // injected Router

  routeToDashboard(){
    this.router.navigate(['dashboard']);
  }

  routeToLogin(){
    this.router.navigate(['login']);
  }

}
