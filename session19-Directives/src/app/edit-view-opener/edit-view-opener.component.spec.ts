import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditViewOpenerComponent } from './edit-view-opener.component';

describe('EditViewOpenerComponent', () => {
  let component: EditViewOpenerComponent;
  let fixture: ComponentFixture<EditViewOpenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditViewOpenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditViewOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
