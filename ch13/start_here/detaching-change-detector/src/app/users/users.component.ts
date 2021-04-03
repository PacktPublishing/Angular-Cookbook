import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { IUser } from '../core/interfaces/user.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.searchUsers();
  }

  searchUsers(searchQuery = '') {
    this.userService.searchUsers(searchQuery).subscribe((users) => {
      this.users = users;
    });
  }

  userEmail(user: IUser) {
    return user.email;
  }

  ngOnDestroy() {}
}
