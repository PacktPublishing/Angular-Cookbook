import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadStrategyService implements PreloadingStrategy {
  constructor() {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    try {
      const { shouldPreload } = route.data;
      return shouldPreload
        ? this.loadRoute(route, load)
        : this.noPreload(route);
    } catch (e) {
      console.error(e);
      return this.noPreload(route);
    }
  }

  loadRoute(route: Route, loadFn: () => Observable<any>): Observable<any> {
    console.log(`Preloading done for route: ${route.path}`);
    return loadFn();
  }

  noPreload(route: Route): Observable<any> {
    console.log(`No preloading set for: ${route.path}`);
    return of(null);
  }
}
