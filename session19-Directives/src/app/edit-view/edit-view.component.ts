import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { NotesService } from '../services/notes.service';
import {Note} from '../note';
@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit {

  note:Note;
  constructor(
    private dialogRef: MatDialogRef<EditViewComponent>,
    @Inject(MAT_DIALOG_DATA) private data:any,
    private notesService: NotesService) { }

  ngOnInit() {
    console.log("this is from edit view component " +this.data.noteId)
    this.note = this.notesService.getNoteById(this.data.noteId);
  }

  editNote(){
    this.notesService.editNote(this.note).subscribe(editNote=>{
      this.dialogRef.close(); // closes the dialog box
    })

  }
}
