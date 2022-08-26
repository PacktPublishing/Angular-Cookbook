import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  @Input() Count:any;
  @Output() countChanged= new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  addNotification() {
    this.Count++;
    this.countChanged.emit(this.Count);
  }

  removeNotification() {
    if (this.Count === 0) {
      return;
    }
    this.Count--;
    this.countChanged.emit(this.Count);
  }

  resetCount() {
    this.Count = 0;
    this.countChanged.emit(this.Count);
  }

}
