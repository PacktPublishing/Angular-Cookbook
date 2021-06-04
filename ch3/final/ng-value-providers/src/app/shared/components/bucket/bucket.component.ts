import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BucketService } from 'src/app/services/bucket.service';
import { Fruit } from '../../../constants/fruit';
import { IFruit } from '../../../interfaces/fruit.interface';
import { IAppConfig, APP_CONFIG } from '../../../constants/app-config';
@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss'],
})
export class BucketComponent implements OnInit {
  $bucket: Observable<IFruit[]>;
  selectedFruit: Fruit = '' as null;
  fruits: string[] = Object.values(Fruit);
  canDeleteItems: boolean;
  constructor(
    private bucketService: BucketService,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {}

  ngOnInit(): void {
    this.$bucket = this.bucketService.$bucket;
    this.bucketService.loadItems();
    this.canDeleteItems = this.config.canDeleteItems;
  }

  addSelectedFruitToBucket() {
    this.bucketService.addItem({
      id: Date.now(),
      name: this.selectedFruit,
    });
  }
  deleteFromBucket(fruit: IFruit) {
    this.bucketService.removeItem(fruit);
  }
}
