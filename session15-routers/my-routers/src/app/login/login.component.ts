import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {RouterService} from '../services/router.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public bearerToken : any;
  constructor(private _authService:AuthenticationService,  private routerService:RouterService) { } // injected the service
  ngOnInit() {
  }
  registerForm(frmData){
    console.log(frmData);
// you should connect to the authentication server from here.. for which you need service
   this._authService.authenticateUser(frmData).subscribe(
     res =>{
       console.log(res['token']);
       this.bearerToken = res['token'];
       this._authService.setBearer(this.bearerToken);
       this.routerService.routerToDashboard();
     },
     err =>{console.log(err)}
   )
  }
}
