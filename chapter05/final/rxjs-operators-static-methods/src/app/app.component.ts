import { Component } from '@angular/core';
import { interval, partition, merge, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  subscription: Subscription = null;
  combinedStreamData = [
    {
      type: 'movie',
      title: 'john wick',
    },
    {
      type: 'cartoon',
      title: 'Thunder Cats',
    },
    {
      type: 'movie',
      title: 'inception',
    },
    {
      type: 'cartoon',
      title: 'Dragon Ball Z',
    },
    {
      type: 'cartoon',
      title: 'Ninja Turtles',
    },
    {
      type: 'movie',
      title: 'interstellar',
    },
  ];
  outputStreamData = [];
  movies = [];
  cartoons = [];

  ngOnInit() {}

  startStream() {
    const streamSource = interval(1500).pipe(
      map((input) => {
        const index = input % this.combinedStreamData.length;
        return this.combinedStreamData[index];
      })
    );
    const [moviesStream, cartoonsStream] = partition(
      streamSource,
      (item) => item.type === 'movie'
    );
    this.subscription = merge(
      moviesStream.pipe(
        tap((movie) => {
          this.movies.push(movie.title);
        })
      ),
      cartoonsStream.pipe(
        tap((cartoon) => {
          this.cartoons.push(cartoon.title);
        })
      )
    ).subscribe((output) => {
      console.log(output);
    });
  }

  stopStream() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }
}
