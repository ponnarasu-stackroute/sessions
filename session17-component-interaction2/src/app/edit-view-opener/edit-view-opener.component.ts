import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material';
import { EditViewComponent } from '../edit-view/edit-view.component';
import {ActivatedRoute} from '@angular/router';
import {RouterService} from '../services/router.service';

@Component({
  selector: 'app-edit-view-opener',
  templateUrl: './edit-view-opener.component.html',
  styleUrls: ['./edit-view-opener.component.css']
})
export class EditViewOpenerComponent implements OnInit {

  constructor(private dialog:MatDialog,private activateRoute:ActivatedRoute,private routerService:RouterService) {

    const noteId = +this.activateRoute.snapshot.paramMap.get('noteId');
    console.log("this is the card index : "+noteId);
    this.dialog.open(EditViewComponent,{
      data:{
        noteId : noteId
      }
    }).afterClosed().subscribe(result =>{
      this.routerService.back();
    })
   }

  ngOnInit() {
  }

}
