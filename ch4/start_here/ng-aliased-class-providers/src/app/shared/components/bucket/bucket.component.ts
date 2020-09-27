import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BucketService } from 'src/app/services/bucket.service';
import { Fruit } from '../../../constants/fruit';
import { IFruit } from '../../../interfaces/fruit.interface';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit {
  $bucket: Observable<IFruit[]>;
  selectedFruit: Fruit = '' as null;
  fruits: string[] = Object.values(Fruit);
  MAX_BUCKET_LENGTH = 10;
  constructor(private bucketService: BucketService) { }

  ngOnInit(): void {
    this.$bucket = this.bucketService.$bucket;
  }

  addSelectedFruitToBucket() {
    this.bucketService.addItem({
      id: Date.now(),
      name: this.selectedFruit
    })
  }
  deleteFromBucket(fruit: IFruit) {
    this.bucketService.removeItem(fruit);
  }

}
