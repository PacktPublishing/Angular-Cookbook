import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';
import { map, takeWhile } from 'rxjs/operators';
import { merge, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  isComponentAlive: boolean;
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  streamsOutput$: Observable<number[]>;
  outputStreamData = [];

  constructor() {}

  ngOnInit() {
    this.isComponentAlive = true;
    this.startStream();
  }

  ngOnDestroy() {
    this.stopStream();
  }

  startStream() {
    const streamSource = interval(1500);
    const secondStreamSource = interval(3000);
    const fastestStreamSource = interval(500);
    this.streamsOutput$ = merge(
      streamSource,
      secondStreamSource,
      fastestStreamSource
    ).pipe(
      takeWhile(() => !!this.isComponentAlive),
      map((output) => {
        console.log(output);
        this.outputStreamData = [...this.outputStreamData, output];
        return this.outputStreamData;
      })
    );
  }

  stopStream() {
    this.isComponentAlive = false;
  }
}
