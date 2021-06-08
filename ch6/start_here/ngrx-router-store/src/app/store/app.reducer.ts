import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '../core/interfaces/user.interface';
import { getUsersSuccess } from './app.actions';

export interface AppState {
  users: IUser[];
}

const initialState: AppState = {
  users: null
}

const appReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, action) => ({
    ...state,
    users: action.users
  }))
);

export function reducer(state: AppState = initialState, action: Action) {
  return appReducer(state, action);
}
