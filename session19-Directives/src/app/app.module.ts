import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoteComponent } from './note/note.component';

// for material ui 

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SampleComponent } from './sample/sample.component';

import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

//services
import {AuthenticationService} from './services/authentication.service'; 
import {NotesService} from './services/notes.service';
import {RouterService} from './services/router.service';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// for routing

import {RouterModule,Routes} from '@angular/router';

// to guard our dashboard component
import {CanActivateRouterGuard} from './can-activate-router.guard';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import { ListViewComponent } from './list-view/list-view.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { EditViewComponent } from './edit-view/edit-view.component';

import {MatDialogModule} from '@angular/material/dialog';
import { EditViewOpenerComponent } from './edit-view-opener/edit-view-opener.component';
import { HoverEffectDirective } from './hover-effect.directive';
import { PinnedDirective } from './pinned.directive';


const appRoutes: Routes = [
  {
    path:'login', 
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[CanActivateRouterGuard],
    children:[
      {
        path:'view/notesview',
        component: NoteViewComponent
      },
      {
        path:"",
        redirectTo:'view/notesview',
        pathMatch : "full"
      },
      {
        path:'view/listview',
        component:ListViewComponent
      },
      {
        path: 'note/:noteId/edit',
        component : EditViewOpenerComponent,outlet:'noteEditOutlet'
      }
    ]
  },
 
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteComponent,
    SampleComponent,
    LoginComponent,
    DashboardComponent,
    NoteTakerComponent,
    ListViewComponent,
    NoteViewComponent,
    EditViewComponent,
    EditViewOpenerComponent,
    HoverEffectDirective,
    PinnedDirective,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NotesService,AuthenticationService,RouterService,CanActivateRouterGuard],
  bootstrap: [AppComponent],
  entryComponents: [EditViewComponent]
 
})
export class AppModule { }
