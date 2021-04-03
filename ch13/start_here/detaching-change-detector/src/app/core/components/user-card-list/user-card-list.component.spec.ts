import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardListComponent } from './user-card-list.component';

describe('UserCardListComponent', () => {
  let component: UserCardListComponent;
  let fixture: ComponentFixture<UserCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
