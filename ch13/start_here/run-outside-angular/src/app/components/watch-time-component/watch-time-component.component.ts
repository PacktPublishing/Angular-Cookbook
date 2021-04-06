import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-time-component',
  templateUrl: './watch-time-component.component.html',
  styleUrls: ['./watch-time-component.component.scss'],
})
export class WatchTimeComponentComponent implements OnInit, AfterViewChecked {
  @Input() value: number;
  @Input() name;
  @Input() digits = 2;
  constructor() {}

  ngOnInit(): void {
    if (!window['appLogs']) {
      window['appLogs'] = {};
    }
    window['appLogs'][this.name] = 0;
  }

  get timeVal() {
    let str = this.value.toString();
    if (str.length === this.digits) {
      return str;
    }
    for (let i = 0, len = this.digits - str.length; i < len; ++i) {
      str = `0${str}`;
    }
    return str;
  }

  ngAfterViewChecked() {
    window['appLogs'][this.name]++;
  }
}
