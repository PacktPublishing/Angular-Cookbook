import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { APP_CONFIG } from '../constants/app-config';
import { EmployeeConfig } from './constants/employee-config';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [CommonModule, EmployeeRoutingModule, SharedModule],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: EmployeeConfig,
    },
  ],
})
export class EmployeeModule {}
