import { Register } from './register';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   title = 'app';
 register: Register;
  ngOnInit() {
    //Create a new user object
    this.register = new Register({username:"ponnaras", password: "soundarya"});
  }


  registerForm(val) {
    this.register = val;
    console.log(val);
  }
}
