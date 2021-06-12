import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './core/components/user-card/user-card.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppFooterComponent } from './core/components/app-footer/app-footer.component';
import { LoaderComponent } from './core/components/loader/loader.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCardComponent,
    UserDetailComponent,
    AppFooterComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    UsersComponent,
    UserCardComponent,
    UserDetailComponent,
    AppFooterComponent,
    LoaderComponent,
  ],
})
export class AppModule {}
