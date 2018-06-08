import { Component } from '@angular/core';

import {Note} from './note';

import{NotesService} from './services/notes.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 // constructor(private http:HttpClient){}
 constructor(private notesServce:NotesService){}

  //title = 'myKeepApp';
  note:Note = new Note(); // this will execute for  the first time
  notes:Array<Note> = []; // creating an array of Note type

  ngOnInit(){
   /*  this.http.get<Array<Note>>('http://localhost:3000/notes').subscribe(
      data => this.notes = data,
      err=> console.log(err)
    ) */

    // this.notesServce.getNotes().subscribe(
    //   data=>this.notes = data,
    //   err=> console.log(err)
    // )

  }
  takeNotes(){
   // this.notes.push(this.note); // pushing the note into array
    this.notes.push(this.note);
  /*  this.http.post<Note>('http://localhost:3000/notes',this.note).subscribe(
     data=>{},
     err=>console.log(err)
   ) */

   this.notesServce.addNotes(this.note).subscribe(
     data =>{},
     err=>{console.log(err);}
   )
    this.note= new Note(); // creating a new object
    console.log(this.notes);

  }
}
