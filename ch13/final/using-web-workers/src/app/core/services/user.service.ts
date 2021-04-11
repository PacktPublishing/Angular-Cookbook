import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interface';
import { Observable, of } from 'rxjs';
import getUniqueIdWorker from '../constants/get-unique-id-worker';
import createUniqueId from '../constants/create-unique-id';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersApiUrl = 'https://api.randomuser.me?results=10&seed=packt';
  commentsJsonUrl = 'assets/data/comments.json';
  usersCache: IUser[] = [];
  worker: Worker = getUniqueIdWorker();
  constructor(private http: HttpClient) {
    if (this.worker === null) {
      return;
    }
    this.worker.onmessage = ({ data: { uniqueId, email } }) => {
      console.log('received message from worker', uniqueId, email);
      const user = this.usersCache.find((user) => user.email === email);
      localStorage.setItem(
        `ng_user__${user.email}`,
        JSON.stringify({
          ...user,
          uniqueId,
        })
      );
    };
  }

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
    if (this.worker !== null) {
      this.worker.postMessage({ index, email: user.email });
    } else {
      // fallback
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
