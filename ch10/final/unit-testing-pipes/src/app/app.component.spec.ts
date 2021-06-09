import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MultiplicationTableComponent } from './components/multiplication-table/multiplication-table.component';
import { MultTablePipe } from './pipes/mult-table.pipe';

const pageTitle = 'Unit testing Angular Pipes';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, FormsModule],
        declarations: [
          AppComponent,
          MultiplicationTableComponent,
          MultTablePipe,
        ],
      }).compileComponents();
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '${pageTitle}'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(pageTitle);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.toolbar span').textContent).toContain(
      pageTitle
    );
  });
});
