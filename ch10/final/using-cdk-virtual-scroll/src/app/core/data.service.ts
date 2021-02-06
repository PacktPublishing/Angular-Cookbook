import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUserCard } from 'src/interfaces/app-user-card.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Partial<AppUserCard>[]> {
    return this.http.get<Partial<AppUserCard>[]>('/assets/data.json');
  }
}
