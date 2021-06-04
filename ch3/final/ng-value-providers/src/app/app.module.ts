import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppConfig, APP_CONFIG } from './constants/app-config';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: AppConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
