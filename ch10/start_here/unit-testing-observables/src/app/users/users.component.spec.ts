import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserCardComponent } from '../core/components/user-card/user-card.component';
import { UserService } from '../core/services/user.service';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent, UserCardComponent],
      providers: [UserService],
      imports: [HttpClientModule, ReactiveFormsModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call searchUsers() method on component init', () => {
    spyOn(component, 'searchUsers');
    component.ngOnInit();
    expect(component.searchUsers).toHaveBeenCalled();
  });
});
