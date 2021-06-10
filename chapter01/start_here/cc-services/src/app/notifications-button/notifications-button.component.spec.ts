import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotificationsButtonComponent } from './notifications-button.component';

describe('NotificationsButtonComponent', () => {
  let component: NotificationsButtonComponent;
  let fixture: ComponentFixture<NotificationsButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
