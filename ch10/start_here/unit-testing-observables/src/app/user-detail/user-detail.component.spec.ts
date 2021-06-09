import { HttpClientModule } from '@angular/common/http';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoaderComponent } from '../core/components/loader/loader.component';
import { UserCardComponent } from '../core/components/user-card/user-card.component';
import { UserService } from '../core/services/user.service';

import { UserDetailComponent } from './user-detail.component';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UserDetailComponent, LoaderComponent, UserCardComponent],
        imports: [HttpClientModule, RouterTestingModule],
        providers: [UserService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
