import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit, Query, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DiceComponent } from '../components/dice/dice.component';
import { ValueGuesserComponent } from '../components/value-guesser/value-guesser.component';
import { LeaderboardService } from '../core/services/leaderboard.service';
import { IDiceSide } from '../interfaces/dice.interface';
import { IScore } from '../interfaces/score.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @ViewChild(CdkStepper) stepper: CdkStepper;
  @ViewChild(DiceComponent) diceComponent: DiceComponent;
  @ViewChild(ValueGuesserComponent)
  valueGuesserComponent: ValueGuesserComponent;
  nameForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  guessedValue = null;
  isCorrectGuess = null;
  scores: IScore[] = [];
  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit(): void {
    this.scores = this.leaderboardService.getScores();
    this.nameForm.valueChanges.pipe().subscribe(() => {
      this.valueGuesserComponent.reset();
      this.isCorrectGuess = null;
      this.guessedValue = null;
    });
  }

  submitName() {
    this.stepper.next();
  }

  rollTheDice(guessedValue) {
    this.isCorrectGuess = null;
    this.guessedValue = guessedValue;
    this.diceComponent.rollDice();
  }

  showResult(diceSide: IDiceSide) {
    this.isCorrectGuess = this.guessedValue === diceSide.value;
    if (!this.isCorrectGuess) {
      return;
    }
    this.scores = this.leaderboardService.setScores({
      name: this.nameForm.get('name').value,
      score: 50,
    });
  }
}
