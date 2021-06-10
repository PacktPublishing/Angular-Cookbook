import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '../core/interfaces/user.interface';

export interface AppState {
  users: IUser[];
}

const initialState: AppState = {
  users: []
}

const appReducer = createReducer(
  initialState,
);

export function reducer(state: AppState = initialState, action: Action) {
  return appReducer(state, action);
}
