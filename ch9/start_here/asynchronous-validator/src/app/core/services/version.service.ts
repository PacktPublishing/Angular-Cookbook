import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { vLog } from 'src/app/interfaces/vLog';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private http: HttpClient) {}

  getVersionLog() {
    return this.http.get<{vLog: vLog}>('assets/data.json')
      .pipe(
        map((res) => res.vLog)
      );
  }
}
