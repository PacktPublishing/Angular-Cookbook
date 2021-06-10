import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketComponent } from './components/bucket/bucket.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BucketComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [BucketComponent]
})
export class SharedModule { }
