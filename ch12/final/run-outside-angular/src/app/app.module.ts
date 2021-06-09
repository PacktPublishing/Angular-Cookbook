import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WatchBoxComponent } from './components/watch-box/watch-box.component';
import { WatchComponent } from './components/watch/watch.component';
import { WatchTimeComponent } from './components/watch-time/watch-time.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchBoxComponent,
    WatchComponent,
    WatchTimeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
