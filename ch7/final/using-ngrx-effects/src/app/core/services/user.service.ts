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

  getUsers(): Observable<IUser[]> {
    return this.http.get<{results: IUser[]}>(this.usersApiUrl).pipe(
      map((resp) => resp.results)
    )
  }

  getDataComments(): Observable<string> {
    return this.http.get<{__comments: string}>(this.commentsJsonUrl).pipe(
      map((resp) => resp.__comments)
    )
  }
}
