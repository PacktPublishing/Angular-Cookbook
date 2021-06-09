import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { IUser } from '../core/interfaces/user.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  users: IUser[];
  searchForm: FormGroup
  componentAlive: boolean;
  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.componentAlive = true;
    this.searchForm = new FormGroup({
      username: new FormControl('', [])
    })
    this.searchUsers();
    this.searchForm.get('username').valueChanges
      .pipe(
        takeWhile(() => !!this.componentAlive)
      )
      .subscribe(() => {
        this.searchUsers();
      })
  }

  searchUsers() {
    const query = this.searchForm.get('username').value;
    this.userService.searchUsers(query)
      .subscribe(users => {
        this.users = users;
      });
  }

  ngOnDestroy() {}
}
