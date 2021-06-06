import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../core/services/user.service';
import { IUser } from '../core/interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user$: Observable<IUser>;
  similarUsers$: Observable<IUser[]>;
  isComponentAlive: boolean;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isComponentAlive = true;
    this.route.paramMap.pipe(
      takeWhile(() => !!this.isComponentAlive)
    ).subscribe((params) => {
      const userId = params.get('uuid');
      this.similarUsers$ = this.userService.getSimilarUsers(userId);
      this.user$ = this.userService.getUser(userId);
    })
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }

}
