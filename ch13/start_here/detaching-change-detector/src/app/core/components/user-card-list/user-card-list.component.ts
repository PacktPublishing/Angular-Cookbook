import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.scss'],
})
export class UserCardListComponent implements OnInit {
  @Input() users: IUser[];
  constructor() {}

  ngOnInit(): void {}
}
