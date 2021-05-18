import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TheAmazingListComponent } from './components/the-amazing-list/the-amazing-list.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TheAmazingListItemComponent } from './components/the-amazing-list-item/the-amazing-list-item.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PopoverPositionalClassDirective } from './directives/popover-positional-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    TheAmazingListComponent,
    LoaderComponent,
    TheAmazingListItemComponent,
    PopoverPositionalClassDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollingModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
