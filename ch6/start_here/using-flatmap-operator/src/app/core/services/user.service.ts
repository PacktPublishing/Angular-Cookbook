import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiBaseUrl = '/assets/data'
  constructor(private http: HttpClient) { }

  getUser(userId: string): Observable<IUser> {
    return this.http.get<{results: IUser[]}>(`${this.apiBaseUrl}/users.json`).pipe(
      map((resp) => resp.results.find(user => {
        return user.login.uuid === userId;
      }))
    )
  }

  getSimilarUsers(): Observable<IUser[]> {
    return this.http.get<{results: IUser[]}>(
      `${this.apiBaseUrl}/users.json`
    ).pipe(
      map((resp) => resp.results)
    )
  }

  getDataComments(): Observable<string> {
    return this.http.get<{__comments: string}>(`${this.apiBaseUrl}/user.json`).pipe(
      map((resp) => resp.__comments)
    )
  }
}
