import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription = null;
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  outputStreamData = [];

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.stopStream();
  }

  startStream() {
    const streamSource = interval(1500);
    this.subscription = streamSource.subscribe((input) => {
      this.outputStreamData.push(input);
      console.log('stream output', input);
    });
  }

  stopStream() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }
}
