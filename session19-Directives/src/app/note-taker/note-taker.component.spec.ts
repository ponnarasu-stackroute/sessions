import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTakerComponent } from './note-taker.component';
import{MatExpansionModule,MatFormFieldModule,MatInputModule,MatButtonModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {NotesStub} from '../notes-stub';


import {NotesService} from '../services/notes.service';

import {By} from '@angular/platform-browser';

fdescribe('NoteTakerComponent', () => {
  let component: NoteTakerComponent;
  let fixture: ComponentFixture<NoteTakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteTakerComponent ],
      imports:[
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule

      ],
      providers: [{provide:NotesService, useClass:NotesStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input element for  note title',()=>{
    const de = fixture.debugElement.query(By.css('input'));
    expect(de).toBeTruthy();
    expect(de.nativeElement.value).toBe('');
  })
});
