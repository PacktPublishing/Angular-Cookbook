import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent implements OnInit {
  @Input() name = '';
  @Input() hours: number = 0;
  @Input() minutes: number = 0;
  @Input() seconds: number = 0;
  @Input() milliseconds: number = 0;
  @ViewChild('stopWatch') stopWatch: ElementRef;
  hover = true;
  xCoordinate = 0;
  yCoordinate = 0;
  minSpeed = 1;
  maxSpeed = 3;
  xVelocity;
  yVelocity;
  intervalTimer;
  constructor() {
    this.xVelocity = this.minSpeed;
    this.yVelocity = this.minSpeed;
  }

  get greetingMessage() {
    window['appLogs']['watch']++;
    return this.name ? `Greetings ${this.name}` : '';
  }

  ngOnInit(): void {
    if (!window['appLogs']) {
      window['appLogs'] = {};
    }
    window['appLogs']['watch'] = 0;
    this.intervalTimer = setInterval(() => {
      this.animate();
    }, 30);
  }

  calcSpeed() {
    return Math.ceil(Math.random() * this.maxSpeed + this.minSpeed);
  }

  animate() {
    const el = this.stopWatch.nativeElement;
    const width = el.clientWidth;
    const height = el.clientHeight;
    const speed = this.calcSpeed();
    this.xCoordinate += this.xVelocity;
    this.yCoordinate += this.yVelocity;
    el.style.setProperty('--x', `${this.xCoordinate}px`);
    el.style.setProperty('--y', `${this.yCoordinate}px`);
    if (this.xCoordinate >= width) {
      this.xVelocity = speed * -1;
    } else if (this.xCoordinate <= 0) {
      this.xVelocity = speed;
    } else if (this.yCoordinate >= height) {
      this.yVelocity = speed * -1;
    } else if (this.yCoordinate <= 0) {
      this.yVelocity = speed;
    }
  }
}
