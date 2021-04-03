import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { IUser } from '../core/interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[];
  constructor(
    private userService: UserService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.cdRef.detach();
    this.searchUsers();
  }

  searchUsers(searchQuery = '') {
    this.userService.searchUsers(searchQuery).subscribe((users) => {
      this.users = users;
      this.cdRef.detectChanges();
    });
  }

  userEmail(user: IUser) {
    return user.email;
  }

  ngOnDestroy() {}
}
