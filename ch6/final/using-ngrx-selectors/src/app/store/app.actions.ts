import { createAction, props } from '@ngrx/store';
import { IUser } from '../core/interfaces/user.interface';

export const APP_ACTIONS = {
  GET_USERS: '[Users] Get Users',
  GET_USERS_SUCCESS: '[Users] Get Users Success',
  GET_USERS_FAILURE: '[Users] Get Users Failure',
}

export const getUsers = createAction(
  APP_ACTIONS.GET_USERS,
);

export const getUsersSuccess = createAction(
  APP_ACTIONS.GET_USERS_SUCCESS,
  props<{users: IUser[]}>()
);

export const getUsersFailure = createAction(
  APP_ACTIONS.GET_USERS_FAILURE,
  props<{error: string}>()
);
