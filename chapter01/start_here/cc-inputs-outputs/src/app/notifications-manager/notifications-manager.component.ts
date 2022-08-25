import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  @Input() Count:any;
  constructor() { }

  ngOnInit(): void {
  }

  addNotification() {
    this.Count++;
  }

  removeNotification() {
    if (this.Count === 0) {
      return;
    }
    this.Count--;
  }

  resetCount() {
    this.Count = 0;
  }

}
