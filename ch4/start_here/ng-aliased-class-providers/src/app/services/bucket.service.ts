import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IFruit } from '../interfaces/fruit.interface';
import { IBucketService } from '../interfaces/bucket-service';

@Injectable({
  providedIn: 'root'
})
export class BucketService implements IBucketService {
  bucketSource = new BehaviorSubject([]);
  $bucket: Observable<IFruit[]> = this.bucketSource.asObservable();
  constructor() { }

  addItem(fruit: IFruit) {
    const fruits = this.bucketSource.value;
    this.bucketSource.next([fruit, ...fruits]);
  }

  removeItem(fruit: IFruit) {
    const bucket = this.bucketSource.value.filter(item => item.id !== fruit.id);
    this.bucketSource.next([...bucket]);
  }
}
