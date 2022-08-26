import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss']
})
export class NotificationsButtonComponent implements OnInit {
  @Input() Count:any;
  constructor() { }

  ngOnInit(): void {
  }

}
