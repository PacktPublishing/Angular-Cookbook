import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseLogsComponent } from './release-logs.component';

describe('ReleaseLogsComponent', () => {
  let component: ReleaseLogsComponent;
  let fixture: ComponentFixture<ReleaseLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
