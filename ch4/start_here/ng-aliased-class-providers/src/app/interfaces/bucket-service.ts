
import { IFruit } from './fruit.interface';
export interface IBucketService {
  addItem(fruit: IFruit) : void
  removeItem(fruit: IFruit): void
}
