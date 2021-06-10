import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../core/services/user.service';
import { IUser } from '../core/interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users$: Observable<IUser[]>;
  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.users$ = this.userService.getSimilarUsers(null);
  }

  ngOnDestroy() {}
}
