import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscription: Subscription = null;
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  outputStreamData = [];

  ngOnInit() {
  }

  startStream() {
    const streamSource = interval(1500);
    this.subscription = streamSource.subscribe(input => {
      this.outputStreamData.push(input);
    });
  }

  stopStream() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }


}
