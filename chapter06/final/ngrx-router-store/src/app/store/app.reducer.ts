import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '../core/interfaces/user.interface';
import { getUsersSuccess } from './app.actions';
import { RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  users: IUser[];
  router: RouterReducerState<any>;
}

const initialState: AppState = {
  users: null,
  router: null,
};

const appReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, action) => ({
    ...state,
    users: action.users,
  }))
);

export function reducer(state: AppState = initialState, action: Action) {
  return appReducer(state, action);
}
