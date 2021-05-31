import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  count$: Observable<number> = this.count.asObservable();
  constructor() {}
  setCount(countVal) {
    this.count.next(countVal);
  }
}
