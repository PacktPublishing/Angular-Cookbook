import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;
  @Input() index: number;
  uniqueId: string = 'abc';
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.saveUserUniqueIdsToStorage(this.user, this.index);
  }

  cardClicked() {
    this.router.navigate([`/users/${this.user.login.uuid}`]);
  }
}
