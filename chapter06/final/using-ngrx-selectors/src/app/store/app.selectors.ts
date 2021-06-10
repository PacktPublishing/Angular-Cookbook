import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.reducer';
import { IUser } from '../core/interfaces/user.interface';

export const selectApp = createFeatureSelector<AppState>('app');

export const selectUsers = createSelector(
  selectApp,
  (state: AppState) => state.users
);

export const selectCurrentUser = (uuid) =>
  createSelector(selectUsers, (users: IUser[]) =>
    users
      ? users.find((user) => {
          return user.login.uuid === uuid;
        })
      : null
  );

export const selectSimilarUsers = (uuid) =>
  createSelector(selectUsers, (users: IUser[]) =>
    users
      ? users.filter((user) => {
          return user.login.uuid !== uuid;
        })
      : null
  );
