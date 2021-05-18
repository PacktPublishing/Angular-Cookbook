import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-game-stepper',
  templateUrl: './game-stepper.component.html',
  styleUrls: ['./game-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: GameStepperComponent }],
})
export class GameStepperComponent extends CdkStepper {}
