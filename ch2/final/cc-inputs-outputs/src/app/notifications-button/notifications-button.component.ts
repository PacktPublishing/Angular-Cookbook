import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss'],
})
export class NotificationsButtonComponent implements OnInit {
  @Input() count = 0;
  constructor() {}

  ngOnInit(): void {}
}
