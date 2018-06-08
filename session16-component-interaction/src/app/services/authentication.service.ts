import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  authenticateUser(data){
    return this.http.post('http://localhost:3000/auth/v1',data);
  }

  setBearer(token){
    localStorage.setItem('bearerToken',token);
  }

  getBearer(){
    return localStorage.getItem('bearerToken');
  }
  isUserAuthenticated(token) :Promise<boolean>{
    return this.http.post('http://localhost:3000/auth/v1/isAuthenticated',{},{
    headers : new HttpHeaders()
    .set('Authorization',`Bearer ${token}`)
    })
    .map((res) =>res['isAuthenticated'])
    .toPromise();
  }


}
