import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MatDialog} from "@angular/material/dialog";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ng17-dialog-issue' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng17-dialog-issue');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ng17-dialog-issue');
  });

  it('should open the dialog', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const spy = spyOn(TestBed.inject(MatDialog), 'open');
    app.openDialog();

    expect(spy).toHaveBeenCalled();
  });
});
