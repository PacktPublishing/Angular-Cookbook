import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-value-guesser',
  templateUrl: './value-guesser.component.html',
  styleUrls: ['./value-guesser.component.scss'],
})
export class ValueGuesserComponent implements OnInit {
  @Output() valueGuessed = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  guessValue(value) {
    this.valueGuessed.emit(value);
  }
}
