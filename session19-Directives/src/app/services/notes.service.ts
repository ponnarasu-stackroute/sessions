import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Note} from '../note';
import {AuthenticationService} from './authentication.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';

@Injectable()
export class NotesService {

  notes:Array<Note>;
  notesSubject : BehaviorSubject<Array<Note>>;
  token : any;
  constructor(private http:HttpClient,private auth_Service : AuthenticationService) {
    this.notes = [];
    this.notesSubject=new BehaviorSubject(this.notes); // it has  an empty array
    this.fetchNotesFromServer();
   }

   fetchNotesFromServer(){
     this.token = this.auth_Service.getBearer();
     return this.http.get<Array<Note>>('http://localhost:3000/api/v1/notes',{
    headers: new HttpHeaders()
    .set('Authorization',`Bearer ${this.token}`)
    }).subscribe(notes =>{
      this.notes = notes;
      this.notesSubject.next(this.notes); // we are populating the notesSubject with json data
    });

   }
  getNotes():Observable<Array<Note>>{
    return this.notesSubject;
  }
  addNotes(note:Note):Observable<Note>{
    return this.http.post<Note>('http://localhost:3000/api/v1/notes',note,{
      headers:new HttpHeaders()
      .set('Authorization',`Bearer ${this.token}`)
    }).do(addedNote =>{
      this.notes.push(addedNote);
      this.notesSubject.next(this.notes); // repopulating the notesSubject whenever note is added
    });

  }

  getNoteById(noteId){
    const note = this.notes.find(note => note.id === noteId);
    return Object.assign({},note);

  }

  editNote(note:Note):Observable<Note>{
    return this.http.put<Note>(`http://localhost:3000/api/v1/notes/${note.id}`,note,{
      headers:new HttpHeaders()
      .set('Authorization',`Bearer ${this.token}`)
    }).do(editedNote =>{
      const note = this.notes.find(note => note.id === editedNote.id);
      Object.assign(note,editedNote); // modified content to be copied to original note
      this.notesSubject.next(this.notes); // repopulating the notesSubject whenever note is added
    });

  }

}