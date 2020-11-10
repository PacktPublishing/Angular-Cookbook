import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input('user') user: IUser;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cardClicked() {
    this.router.navigate([`/user/${this.user.login.uuid}`])
  }

}
