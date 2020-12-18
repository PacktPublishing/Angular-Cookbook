import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionControlComponent } from './components/version-control/version-control.component';
import { ReleaseLogsComponent } from './components/release-logs/release-logs.component';
import { ReleaseFormComponent } from './components/release-form/release-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VersionControlComponent,
    ReleaseLogsComponent,
    ReleaseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
