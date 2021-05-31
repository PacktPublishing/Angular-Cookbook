import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersioningRoutingModule } from './versioning-routing.module';
import { VersioningComponent } from './versioning.component';
import { NotificationsManagerComponent } from './components/notifications-manager/notifications-manager.component';
import { NotificationsService } from '../services/notifications.service';

@NgModule({
  declarations: [VersioningComponent, NotificationsManagerComponent],
  imports: [
    CommonModule,
    VersioningRoutingModule,
  ],
  providers: [
    NotificationsService
  ]
})
export class VersioningModule { }
