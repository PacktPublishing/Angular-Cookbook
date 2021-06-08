import { createAction, props } from '@ngrx/store';
import { IFruit } from '../interfaces/fruit.interface';

export const addItemToBucket = createAction(
  '[Bucket] Add Item',
  props<{fruit: IFruit}>()
);

export const removeItemFromBucket = createAction(
  '[Bucket] Remove Item',
  props<{fruit: IFruit}>()
);
