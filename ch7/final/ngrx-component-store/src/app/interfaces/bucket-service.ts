
import { Subscription } from 'rxjs';
import { IFruit } from './fruit.interface';
export interface IBucketService {
  loadItems(): void
  addItem(fruit: IFruit) : Subscription
  removeItem(fruit: IFruit): Subscription
}
