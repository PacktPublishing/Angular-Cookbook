import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-value-guesser',
  templateUrl: './value-guesser.component.html',
  styleUrls: ['./value-guesser.component.scss'],
})
export class ValueGuesserComponent implements OnInit {
  @Output() valueGuessed = new EventEmitter<number>();
  selected = null;
  constructor() {}

  ngOnInit(): void {}

  reset() {
    this.selected = null;
  }

  guessValue(value) {
    this.selected = value;
    this.valueGuessed.emit(value);
  }
}
