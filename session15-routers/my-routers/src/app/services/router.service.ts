import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable()
export class RouterService {
  constructor(public router:Router) { } // injected Router
  routerToDashboard(){
    this.router.navigate(['dashboard']);
  }
  routerToLogin(){
    this.router.navigate(['login']);
  }
    routerToNote(){
    this.router.navigate(['note']);
  }
}
