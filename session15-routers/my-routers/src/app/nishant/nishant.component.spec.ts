import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NishantComponent } from './nishant.component';

describe('NishantComponent', () => {
  let component: NishantComponent;
  let fixture: ComponentFixture<NishantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NishantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NishantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
