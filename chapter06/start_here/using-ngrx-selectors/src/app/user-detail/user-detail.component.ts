import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../core/interfaces/user.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user: IUser = null;
  similarUsers: IUser[] = [];
  isComponentAlive: boolean;
  constructor() {}

  ngOnInit() {
    this.isComponentAlive = true;
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }
}
