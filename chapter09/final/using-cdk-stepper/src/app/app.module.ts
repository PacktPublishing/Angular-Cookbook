import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceComponent } from './components/dice/dice.component';
import { ValueGuesserComponent } from './components/value-guesser/value-guesser.component';
import { GameComponent } from './game/game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { GameStepperComponent } from './components/game-stepper/game-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    ValueGuesserComponent,
    GameComponent,
    LeaderBoardComponent,
    GameStepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CdkStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
