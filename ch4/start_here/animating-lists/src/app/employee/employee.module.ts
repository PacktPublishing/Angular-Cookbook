import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { BucketService } from '../services/bucket.service';
import { EmployeeBucketService } from './services/employee-bucket.service';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ],
  providers: [{
    provide: BucketService,
    useClass: EmployeeBucketService
  }]
})
export class EmployeeModule { }
