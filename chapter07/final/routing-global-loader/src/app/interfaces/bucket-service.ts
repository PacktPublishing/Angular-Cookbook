
import { IFruit } from './fruit.interface';
export interface IBucketService {
  loadItems(): void
  addItem(fruit: IFruit) : void
  removeItem(fruit: IFruit): void
}
