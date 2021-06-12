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
  searchForm: FormGroup;
  componentAlive: boolean;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.componentAlive = true;
    this.searchForm = new FormGroup({
      username: new FormControl('', []),
    });
    this.searchUsers();
    this.searchForm
      .get('username')
      .valueChanges.pipe(
        takeWhile(() => !!this.componentAlive),
        debounceTime(300)
      )
      .subscribe((username) => {
        this.searchUsers(username);
      });
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
