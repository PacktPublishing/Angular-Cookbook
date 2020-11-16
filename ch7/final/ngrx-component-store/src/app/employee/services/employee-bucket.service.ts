import { Injectable } from '@angular/core';
import { IFruit } from 'src/app/interfaces/fruit.interface';
import { BucketService } from 'src/app/services/bucket.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeBucketService extends BucketService {

  constructor() {
    super();
  }

  readonly removeItem = this.updater((state, _: IFruit) => {
    alert('Employees can not delete items');
    return state;
  });

}
