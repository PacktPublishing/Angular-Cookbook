import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { IUser } from '../core/interfaces/user.interface';
import { mergeMap, takeWhile } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user: IUser;
  similarUsers: IUser[];
  componentIsAlive = false;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.componentIsAlive = true;
    this.route.paramMap
      .pipe(takeWhile(() => this.componentIsAlive))
      .subscribe((params) => {
        const userId = params.get('uuid');
        this.getUserAndSimilarUsers(userId);
      });
  }

  getUserAndSimilarUsers(userId) {
    this.userService
      .getUser(userId)
      .pipe(
        mergeMap((user: IUser) => {
          this.user = user;
          return this.userService.getSimilarUsers(userId);
        })
      )
      .subscribe((similarUsers: IUser[]) => {
        this.similarUsers = similarUsers;
      });
  }

  ngOnDestroy() {
    this.componentIsAlive = false;
  }
}
