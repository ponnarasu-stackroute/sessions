import { Component, OnInit } from '@angular/core';
import{AuthenticationService} from '../services/authentication.service';
import{RouterService} from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public bearerToken : any;
  public submitMsg : string;
  constructor(private _authService: AuthenticationService, private routerService : RouterService) { }  // injected authentication service,router service

  ngOnInit() {
  }

  registerForm(formData){
   // console.log(formData);
   this._authService.authenticateUser(formData).subscribe(
     res =>{
       console.log(res['token']);
       this.bearerToken = res['token'];
       this._authService.setBearer(this.bearerToken); // sets the bearerToken in browser
       //now route to dashboard
      this.routerService.routeToDashboard();

     },
     err =>{
     //  console.log(err);
     this.submitMsg = err.error.message;
     
     }
   )
  }
}
