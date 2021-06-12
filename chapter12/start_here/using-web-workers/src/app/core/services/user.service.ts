import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interface';
import { Observable, of } from 'rxjs';
import createUniqueId from '../constants/create-unique-id';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersApiUrl = 'https://api.randomuser.me?results=10&seed=packt';
  commentsJsonUrl = 'assets/data/comments.json';
  usersCache: IUser[] = [];
  constructor(private http: HttpClient) {}

  getUser(userId: string): Observable<IUser> {
    return this.getUsers().pipe(
      map((users) =>
        users.find((user) => {
          return user.login.uuid === userId;
        })
      )
    );
  }

  getUsers(): Observable<IUser[]> {
    if (this.usersCache && this.usersCache.length) {
      return of(this.usersCache);
    }
    return this.http.get<{ results: IUser[] }>(this.usersApiUrl).pipe(
      map((response) => {
        this.usersCache = response.results;
        return response.results;
      })
    );
  }

  saveUserUniqueIdsToStorage(user: IUser, index) {
    let uniqueId;
    for (let i = 0, len = (index + 1) * 100000; i < len; ++i) {
      uniqueId = createUniqueId(50);
    }
    localStorage.setItem(
      `ng_user__${user.email}`,
      JSON.stringify({
        ...user,
        uniqueId,
      })
    );
  }

  getSimilarUsers(userId: string): Observable<IUser[]> {
    return this.getUsers().pipe(
      map((users) => users.filter((user) => user.login.uuid !== userId))
    );
  }

  searchUsers(username: string): Observable<IUser[]> {
    return this.getUsers().pipe(
      map((users) => {
        if (!username) {
          return users;
        }
        return users.filter((user) => {
          const query = username.toLowerCase();
          return (
            user.email.toLowerCase().includes(query) ||
            `${user.name.first} ${user.name.last}`.toLowerCase().includes(query)
          );
        });
      })
    );
  }

  getDataComments(): Observable<string> {
    return this.http
      .get<{ __comments: string }>(this.commentsJsonUrl)
      .pipe(map((resp) => resp.__comments));
  }
}
