import { Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  count$: Observable<number> = this.count.asObservable();
  constructor(@Optional() @SkipSelf() existingService: NotificationsService) {
    if (existingService) {
      throw Error(
        'The service has already been provided in the app. Avoid providing it again in child modules'
      );
    }
  }

  setCount(countVal) {
    this.count.next(countVal);
  }
}
