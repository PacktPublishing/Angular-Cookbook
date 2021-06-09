import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppUserCard } from 'src/interfaces/app-user-card.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users: AppUserCard[];
  constructor(private http: HttpClient) {}

  getUsers(): Observable<AppUserCard[]> {
    if (this.users && this.users.length) {
      return of([...this.users]);
    }
    return this.http.get<AppUserCard[]>('/assets/data.json').pipe(
      map((users) => {
        this.users = [...users];
        return this.users;
      })
    );
  }

  updateUser(updatedUser: AppUserCard) {
    this.users = this.users.map((user) => {
      if (user.email === updatedUser.email) {
        return {
          ...updatedUser,
        };
      }
      // this tells angular that every object has now a different reference
      return { ...user };
    });
  }

  deleteUser(deletedUser: AppUserCard) {
    this.users = this.users
      .filter((user) => {
        return user.email !== deletedUser.email;
      })
      .map((val) => ({ ...val }));
  }
}
