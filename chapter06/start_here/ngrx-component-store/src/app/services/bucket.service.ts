import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IFruit } from '../interfaces/fruit.interface';
import { IBucketService } from '../interfaces/bucket-service';

@Injectable({
  providedIn: 'root',
})
export class BucketService implements IBucketService {
  bucketSource = new BehaviorSubject([]);
  bucket$: Observable<IFruit[]> = this.bucketSource.asObservable();
  constructor() {}

  loadItems() {
    const bucket = JSON.parse(window.localStorage.getItem('bucket') || '[]');
    this.bucketSource.next(bucket);
  }

  addItem(fruit: IFruit) {
    const bucket = [fruit, ...this.bucketSource.value];
    this.bucketSource.next(bucket);
    window.localStorage.setItem('bucket', JSON.stringify(bucket));
  }

  removeItem(fruit: IFruit) {
    const bucket = this.bucketSource.value.filter(
      (item) => item.id !== fruit.id
    );
    this.bucketSource.next([...bucket]);
    window.localStorage.setItem('bucket', JSON.stringify(bucket));
  }
}
