import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, merge } from 'rxjs/operators';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
})
export class StreamComponent implements OnInit {
  subscription: Subscription = null;
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  cartoonsStreamData = ['thunder cats', 'Dragon Ball Z', 'Ninja Turtles'];
  outputStreamData = [];

  ngOnInit() {}

  startStream() {
    const streamSource = interval(1500);
    const cartoonStreamSource = interval(1000).pipe(
      map((output) => output % this.cartoonsStreamData.length),
      map((index) => this.cartoonsStreamData[index])
    );
    this.subscription = streamSource
      .pipe(
        map((output) => output % this.inputStreamData.length),
        map((index) => this.inputStreamData[index]),
        merge(cartoonStreamSource)
      )
      .subscribe((element) => {
        this.outputStreamData.push(element);
      });
  }

  stopStream() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }
}
