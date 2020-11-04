import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscription: Subscription = null;
  combinedStreamData = [{
    type: 'movie',
    title: 'john wick'
  }, {
    type: 'cartoon',
    title: 'Thunder Cats'
  }, {
    type: 'movie',
    title: 'inception'
  }, {
    type: 'cartoon',
    title: 'Dragon Ball Z'
  }, {
    type: 'cartoon',
    title: 'Ninja Turtles'
  }, {
    type: 'movie',
    title: 'interstellar'
  }];
  outputStreamData = [];
  ngOnInit() {
  }

  startStream() {
    const streamSource = interval(1500).pipe(
      map(input => {
        const index = input % this.combinedStreamData.length;
        return this.combinedStreamData[index];
      })
    );
    this.subscription = streamSource
      .subscribe(input => {
        this.outputStreamData.push(input);
      });

  }

  stopStream() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }

}
