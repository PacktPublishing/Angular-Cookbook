import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionControlComponent } from './components/version-control/version-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReleaseLogsComponent } from './components/release-logs/release-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionControlComponent,
    ReleaseLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
