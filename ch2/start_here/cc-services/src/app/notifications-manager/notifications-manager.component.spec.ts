import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotificationsManagerComponent } from './notifications-manager.component';

describe('NotificationsManagerComponent', () => {
  let component: NotificationsManagerComponent;
  let fixture: ComponentFixture<NotificationsManagerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
