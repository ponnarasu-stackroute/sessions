import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
//it is test suite
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
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

//my test suite - jasmine is testing frame work - karma is test runner
// refer jasmine.github.io
describe('my tets suite', () => {
beforeEach(()=>{
  console.log('this is before test suits ');
})

    it('1st test',()=>{
    let a = true;
    expect(a).toBe(true);
    console.log('test run ');
    })
});
