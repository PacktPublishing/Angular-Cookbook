import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  MAX_VALUE = 10;
  MIN_VALUE = -10;
  constructor() {}

  ngOnInit(): void {
    this.counter = this.getFromStorage();
  }

  increment() {
    this.counter++;
    if (this.counter > this.MAX_VALUE) {
      alert('Value too high');
      this.counter = this.MAX_VALUE;
    }
    this.saveToStorage();
  }

  decrement() {
    this.counter--;
    if (this.counter < this.MIN_VALUE) {
      alert('Value too low');
      this.counter = this.MIN_VALUE;
    }
    this.saveToStorage();
  }

  reset() {
    this.counter = 0;
    this.saveToStorage();
  }

  getFromStorage(): number {
    const counterValue = localStorage.getItem('counterValue');
    if (counterValue) {
      this.counter = Number(counterValue);
    }
    return this.counter;
  }

  saveToStorage() {
    localStorage.setItem('counterValue', this.counter.toString());
  }
}
