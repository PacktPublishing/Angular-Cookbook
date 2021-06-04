import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VersioningComponent } from './versioning.component';

describe('VersioningComponent', () => {
  let component: VersioningComponent;
  let fixture: ComponentFixture<VersioningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VersioningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
