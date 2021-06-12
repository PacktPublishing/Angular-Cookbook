import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  storageKey = 'counterValue';
  constructor() {}

  getFromStorage() {
    const counterValue = localStorage.getItem(this.storageKey);
    return counterValue ? Number(counterValue) : 0;
  }

  saveToStorage(counterValue: number) {
    localStorage.setItem(this.storageKey, counterValue.toString());
  }
}
