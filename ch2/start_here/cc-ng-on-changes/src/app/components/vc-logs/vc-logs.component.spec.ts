import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VcLogsComponent } from './vc-logs.component';

describe('VcLogsComponent', () => {
  let component: VcLogsComponent;
  let fixture: ComponentFixture<VcLogsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VcLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
