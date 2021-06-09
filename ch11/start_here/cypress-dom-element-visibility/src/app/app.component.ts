import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Validating if a DOM element is visible on the view';
  isCounterVisible = false;
  constructor() {}

  ngOnInit() {}

  toggleCounterVisibility() {
    this.isCounterVisible = !this.isCounterVisible;
  }
}
