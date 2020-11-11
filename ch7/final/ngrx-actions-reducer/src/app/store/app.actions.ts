import { createAction, props } from '@ngrx/store';
import { IFruit } from '../interfaces/fruit.interface';

export const addItemToBucket = createAction(
  '[Bucket] Add Item',
  props<IFruit>()
);

export const removeItemFromBucket = createAction(
  '[Bucket] Remove Item',
  props<IFruit>()
);
