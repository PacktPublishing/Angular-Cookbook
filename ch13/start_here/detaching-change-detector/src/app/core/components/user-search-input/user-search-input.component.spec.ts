import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchInputComponent } from './user-search-input.component';

describe('UserSearchInputComponent', () => {
  let component: UserSearchInputComponent;
  let fixture: ComponentFixture<UserSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
