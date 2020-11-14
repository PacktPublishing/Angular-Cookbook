import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { IUser } from '../core/interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { takeWhile, flatMap, map, min } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user: IUser = null;
  similarUsers: IUser[] = [];
  isComponentAlive: boolean;
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isComponentAlive = true;
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }

}
