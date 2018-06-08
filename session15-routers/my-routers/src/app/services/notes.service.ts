import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Note} from '../note';


@Injectable()
export class NotesService {

  constructor(private http:HttpClient) { }

  getNotes():Observable<Array<Note>>{
    return this.http.get<Array<Note>>('http://localhost:3000/notes');

  }
  addNotes(note:Note):Observable<Note>{
    return this.http.post<Note>('http://localhost:3000/notes',note);

  }

}
