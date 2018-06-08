import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class RouterService {

  constructor(public router : Router,private location: Location) { } // injected Router

  routeToDashboard(){
    this.router.navigate(['dashboard']);
  }

  routeToLogin(){
    this.router.navigate(['login']);
  }
  routeToEditView(noteId){
    this.router.navigate([
      'dashboard',
      {
        outlets : {
          noteEditOutlet:['note',noteId,'edit']
        }
      }
    ]);

  }

  //to go to previous route

  back(){
    this.location.back();

  }

}
