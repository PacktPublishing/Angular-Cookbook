import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersApiUrl = 'https://api.randomuser.me?results=10&seed=packt'
  commentsJsonUrl = 'assets/data/comments.json'
  constructor(private http: HttpClient) { }

  getUser(userId: string): Observable<IUser> {
    return this.http.get<{results: IUser[]}>(this.usersApiUrl).pipe(
      map((resp) => resp.results.find(user => {
        return user.login.uuid === userId;
      }))
    )
  }

  getSimilarUsers(userId: string): Observable<IUser[]> {
    return this.http.get<{results: IUser[]}>(
      this.usersApiUrl
    ).pipe(
      map((resp) => resp.results.filter(user => user.login.uuid !== userId))
    )
  }

  searchUsers(username: string): Observable<IUser[]> {
    return this.getSimilarUsers(null).pipe(map(users => {
      if (!username) {
        return users;
      }
      return users.filter(user => {
        const query = username.toLowerCase();
        return (
          user.email.toLowerCase().includes(query) ||
          user.name.first.toLowerCase().includes(query) ||
          user.name.last.toLowerCase().includes(query)
        )
      })
    }) )
  }

  getDataComments(): Observable<string> {
    return this.http.get<{__comments: string}>(this.commentsJsonUrl).pipe(
      map((resp) => resp.__comments)
    )
  }
}
