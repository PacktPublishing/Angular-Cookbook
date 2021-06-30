import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { IUser } from '../core/interfaces/user.interface';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user: IUser;
  similarUsers: IUser[];
  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    const userId = null;
    this.userService.getUser(userId)
      .pipe(
        mergeMap((user: IUser) => {
          this.user = user;
          return this.userService.getSimilarUsers(userId);
        })
      ).subscribe((similarUsers: IUser[]) => {
        this.similarUsers = similarUsers;
      })
  }

  ngOnDestroy() {
  }

}
