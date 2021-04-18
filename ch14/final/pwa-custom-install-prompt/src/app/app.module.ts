import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceComponent } from './components/dice/dice.component';
import { ValueGuesserComponent } from './components/value-guesser/value-guesser.component';
import { GameComponent } from './game/game.component';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { GameStepperComponent } from './components/game-stepper/game-stepper.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InstallablePromptComponent } from './core/components/installable-prompt/installable-prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    ValueGuesserComponent,
    GameComponent,
    LeaderBoardComponent,
    GameStepperComponent,
    InstallablePromptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CdkStepperModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
