import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Apps } from 'src/app/constants/apps';
import { ReleaseFormComponent } from '../release-form/release-form.component';
import { ReleaseLogsComponent } from '../release-logs/release-logs.component';

import { VersionControlComponent } from './version-control.component';

describe('VersionControlComponent', () => {
  let component: VersionControlComponent;
  let fixture: ComponentFixture<VersionControlComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          VersionControlComponent,
          ReleaseLogsComponent,
          ReleaseFormComponent,
        ],
        imports: [ReactiveFormsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the first app selected for the new release log', () => {
    const appSelect = fixture.debugElement.query(By.css('#appName'));
    expect(appSelect.nativeElement.value).toBe(Apps.DRIVE);
  });

  it('should have the first app selected for the new release log', () => {
    const appSelect = fixture.debugElement.query(By.css('#appName'));
    expect(appSelect.nativeElement.value).toBe(Apps.DRIVE);
  });

  it('should show error on wrong version number input', async () => {
    const versionNumberInput = fixture.debugElement.query(
      By.css('#versionNumber')
    ).nativeElement;
    versionNumberInput.value = 'abcd';
    versionNumberInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();
    const errorAlert = fixture.debugElement.query(
      By.css('.alert.alert-danger:not([hidden])')
    ).nativeElement;
    expect(errorAlert).toBeTruthy();
    const errorAlertText = errorAlert.textContent.trim();
    expect(errorAlertText).toBe('Please write an appropriate version number');
  });

  it('should show the new log in the list after adding submitting a new log', async () => {
    const versionNumberInput = fixture.debugElement.query(
      By.css('#versionNumber')
    ).nativeElement;
    const VERSION = '2.3.6';
    versionNumberInput.value = VERSION;
    versionNumberInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();
    const submitButton = fixture.debugElement.query(
      By.css('button[type=submit]')
    ).nativeElement;
    submitButton.click();
    fixture.detectChanges();
    await fixture.whenStable();
    const logs = fixture.debugElement.queryAll(By.css('.logs__item'));
    expect(logs.length).toBe(1);
    const logsText = logs[0].nativeElement.textContent.trim();
    expect(logsText).toBe(`Version ${VERSION} released for app Drive App`);
  });
});
