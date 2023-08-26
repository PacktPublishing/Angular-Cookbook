import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  subscription: Subscription = null;
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  outputStreamData = [];

  constructor() {}

  ngOnInit() {}

  startStream() {
    const streamSource = interval(1500);
    this.subscription = streamSource.subscribe((input) => {
      this.outputStreamData.push(input);
    });
  }

  stopStream() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }
}
