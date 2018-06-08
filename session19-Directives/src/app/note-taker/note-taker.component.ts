import { Component, OnInit } from '@angular/core';

import {Note} from '../note';

import{NotesService} from '../services/notes.service';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent implements OnInit {
  
  note:Note = new Note(); // this will execute for  the first time
  notes:Array<Note> = []; // creating an array of Note type 

  constructor(private notesServce:NotesService){}

  ngOnInit() {
  
  }
  takeNotes(){
        this.notes.push(this.note);
  
    this.notesServce.addNotes(this.note).subscribe(
      data =>{},
      err=>{console.log(err);}
    )
     this.note= new Note(); // creating a new object
     console.log(this.notes);
    
   }
}
