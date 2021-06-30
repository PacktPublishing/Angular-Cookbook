import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiplicationTableComponent } from './components/multiplication-table/multiplication-table.component';
import { MultTablePipe } from './pipes/mult-table.pipe';

@NgModule({
  declarations: [AppComponent, MultiplicationTableComponent, MultTablePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
