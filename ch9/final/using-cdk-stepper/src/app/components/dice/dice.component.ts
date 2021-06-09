import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { RollTransitions } from 'src/app/constants/roll-transitions';
import { IDice, IDiceSide } from 'src/app/interfaces/dice.interface';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})
export class DiceComponent implements OnInit {
  dice: IDice = {
    sides: [],
  };
  selectedSide: IDiceSide;
  rollTransition: RollTransitions;
  @Output() diceRolled = new EventEmitter<IDiceSide>();
  constructor(private el: ElementRef) {
    this.dice.sides = new Array(6).fill(0).map((_, index) => {
      let value = index + 1;
      return {
        value,
        dots: new Array(index + 1).fill(0),
      };
    });
    this.rollTransition = RollTransitions.TransitionOne;
    this.selectedSide = this.dice.sides[0];
  }

  ngOnInit(): void {}

  rollDice() {
    const index = Math.floor(Math.random() * 6);
    this.selectedSide = this.dice.sides[index];
    this.toggleRollTransition();
    setTimeout(() => {
      // we emit after the dice's animation has finished
      this.diceRolled.emit(this.selectedSide);
    }, 2000);
  }

  toggleRollTransition() {
    if (this.rollTransition === RollTransitions.TransitionOne) {
      this.rollTransition = RollTransitions.TransitionTwo;
    } else {
      this.rollTransition = RollTransitions.TransitionOne;
    }
  }
}
