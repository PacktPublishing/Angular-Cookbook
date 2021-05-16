import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Apps } from 'src/app/constants/apps';
import { ReleaseFormComponent } from '../release-form/release-form.component';
import { ReleaseLogsComponent } from '../release-logs/release-logs.component';

import { VersionControlComponent } from './version-control.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ReleaseFormComponentHarness } from '../release-form/release-form.component.harness';
import { ReleaseLogsComponentHarness } from '../release-logs/release-logs.component.harness';

describe('VersionControlComponent', () => {
  let component: VersionControlComponent;
  let fixture: ComponentFixture<VersionControlComponent>;
  let harnessLoader: HarnessLoader;

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
    harnessLoader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the first app selected for the new release log', async () => {
    const rfHarness = await harnessLoader.getHarness(
      ReleaseFormComponentHarness
    );
    const appSelect = await rfHarness.getSelectedAppName();
    expect(appSelect).toBe(Apps.DRIVE);
  });

  it('should show error on wrong version number input', async () => {
    const rfHarness = await harnessLoader.getHarness(
      ReleaseFormComponentHarness
    );
    await rfHarness.setNewAppVersion('abcd');
    const isErrorshown = await rfHarness.isVersionErrorShown();
    expect(isErrorshown).toBeTruthy();
  });

  it('should show the new log in the list after adding submitting a new log', async () => {
    const rfHarness = await harnessLoader.getHarness(
      ReleaseFormComponentHarness
    );
    const rLogsHarness = await harnessLoader.getHarness(
      ReleaseLogsComponentHarness
    );
    let logsLength = await rLogsHarness.getLogsLength();
    expect(logsLength).toBe(0); // no logs initially
    const APP = Apps.DRIVE;
    const VERSION = '2.3.6';
    await rfHarness.setNewAppVersion(VERSION);
    await rfHarness.clickSubmit();
    logsLength = await rLogsHarness.getLogsLength();
    expect(logsLength).toBe(1);
    const isNewLogAdded = await rLogsHarness.validateLatestLog(VERSION, APP);
    expect(isNewLogAdded).toBe(true);
  });
});
