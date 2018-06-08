import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'myKeepApp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('myKeepApp');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Welcome to myKeepApp!');
  }));
});

/* describe('sample tests', ()=>{
  beforeEach(()=>{
    console.log("running before  each test case");
  })
  it('this is my first test case',()=>{
    console.log("this is  my first test case");
  });
  it('this is my second test case',()=>{
    console.log("this is  my second test case");
  });
  it('this is my third test case',()=>{
    console.log("this is  my third test case");
  });
}) */
