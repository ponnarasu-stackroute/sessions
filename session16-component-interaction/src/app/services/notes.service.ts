import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Note} from '../note';
import {AuthenticationService} from './authentication.service';


@Injectable()
export class NotesService {

  constructor(private http:HttpClient,private auth_Service : AuthenticationService) { }

  getNotes():Observable<Array<Note>>{
    return this.http.get<Array<Note>>('http://localhost:3000/api/v1/notes',{
    headers: new HttpHeaders()
    .set('Authorization',`Bearer ${this.auth_Service.getBearer()}`)
    });

  }
  addNotes(note:Note):Observable<Note>{
    return this.http.post<Note>('http://localhost:3000/api/v1/notes',note);

  }

}