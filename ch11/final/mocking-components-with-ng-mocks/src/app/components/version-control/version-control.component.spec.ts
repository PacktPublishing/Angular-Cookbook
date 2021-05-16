import {
  MockBuilder,
  MockedComponentFixture,
  MockRender,
  ngMocks,
} from 'ng-mocks';
import { Apps } from 'src/app/constants/apps';
import { ReleaseFormComponent } from '../release-form/release-form.component';
import { ReleaseLogsComponent } from '../release-logs/release-logs.component';
import { VersionControlComponent } from './version-control.component';

describe('VersionControlComponent', () => {
  let component: VersionControlComponent;
  let fixture: MockedComponentFixture<VersionControlComponent>;

  beforeEach(() => {
    return MockBuilder(VersionControlComponent)
      .mock(ReleaseFormComponent)
      .mock(ReleaseLogsComponent);
  });

  beforeEach(() => {
    fixture = MockRender(VersionControlComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set the [logs] @Input for the ReleaseLogsComponent', () => {
    const releaseLogsComponent =
      ngMocks.find<ReleaseLogsComponent>('app-release-logs').componentInstance;
    const logsStub = [{ app: Apps.DRIVE, version: '2.2.2', message: '' }];
    component.releaseLogs = [...logsStub];
    fixture.detectChanges();
    expect(releaseLogsComponent.logs.length).toBe(1);
    expect(releaseLogsComponent.logs).toEqual([...logsStub]);
  });
  it('should add the new log when it is created via ReleaseFormComponent', () => {
    const releaseFormsComponent =
      ngMocks.find<ReleaseFormComponent>('app-release-form').componentInstance;
    const releaseLogsComponent =
      ngMocks.find<ReleaseLogsComponent>('app-release-logs').componentInstance;
    const newLogStub = { app: Apps.DRIVE, version: '2.2.2', message: '' };
    component.releaseLogs = []; // no logs initially
    releaseFormsComponent.newReleaseLog.emit(newLogStub); // add a new log
    fixture.detectChanges(); // detect changes
    expect(component.releaseLogs).toEqual([newLogStub]); // VersionControlComponent logs
    expect(releaseLogsComponent.logs).toEqual([newLogStub]); // ReleaseLogsComponent logs
  });
});
