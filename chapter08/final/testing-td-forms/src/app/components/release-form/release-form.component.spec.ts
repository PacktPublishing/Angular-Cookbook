import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReleaseLog } from 'src/app/classes/release-log';
import { ReleaseFormComponent } from './release-form.component';

describe('ReleaseFormComponent', () => {
  let component: ReleaseFormComponent;
  let fixture: ComponentFixture<ReleaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReleaseFormComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should submit a new release log with the correct input values', fakeAsync(async () => {
    const submitButton = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );
    const CALENDAR_APP = component.apps[2];
    spyOn(component.newReleaseLog, 'emit');
    await fixture.whenStable(); // wait for Angular to configure the form
    component.releaseForm.controls['version'].setValue('2.2.2');
    component.releaseForm.controls['app'].setValue(CALENDAR_APP);
    submitButton.click();
    const expectedReleaseLog = new ReleaseLog(CALENDAR_APP, '2.2.2');
    expect(component.newReleaseLog.emit).toHaveBeenCalledWith(
      expectedReleaseLog
    );
  }));
  it('should disable the submit button when version is incorrect', fakeAsync(async () => {
    const submitButton = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );
    const CALENDAR_APP = component.apps[2];
    spyOn(component.newReleaseLog, 'emit');
    await fixture.whenStable(); // wait for Angular to configure the form
    const expectedError =
      'Invalid version provided. Please provide a valid version as (major.minor.patch)';
    component.releaseForm.controls['version'].setValue('x.x.x');
    component.releaseForm.controls['app'].setValue(CALENDAR_APP);
    expect(() => component.formSubmit(component.releaseForm)).toThrowError(
      expectedError
    );
    fixture.detectChanges();
    expect(submitButton.hasAttribute('disabled')).toBe(true);
    expect(component.newReleaseLog.emit).not.toHaveBeenCalled();
  }));
  it("should disable the submit button when we don't have an app selected", fakeAsync(async () => {
    const submitButton = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );
    spyOn(component.newReleaseLog, 'emit');
    await fixture.whenStable(); // wait for Angular to configure the form
    component.releaseForm.controls['version'].setValue('2.2.2');
    component.releaseForm.controls['app'].setValue(null);
    fixture.detectChanges();
    expect(submitButton.hasAttribute('disabled')).toBe(true);
    expect(component.newReleaseLog.emit).not.toHaveBeenCalled();
  }));
});
