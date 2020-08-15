import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount = 0
  constructor() { }

  ngOnInit(): void {
  }

  addNotification() {
    this.notificationsCount++;
  }

  removeNotification() {
    if (this.notificationsCount == 0) {
      return;
    }
    this.notificationsCount--;
  }

  resetCount() {
    this.notificationsCount = 0;
  }

}
