import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { vLog } from 'src/app/interfaces/vLog';
import { compareVersion } from 'src/app/utils';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  constructor(private http: HttpClient) {}

  getVersionLog() {
    return this.http.get<{ vLog: vLog }>('assets/data.json').pipe(
      map((res) => res.vLog),
      delay(2000)
    );
  }
  versionValidator(appNameControl: AbstractControl): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      // if we don't have an app selected, do not validate
      if (!appNameControl.value) {
        return of(null);
      }
      return this.getVersionLog().pipe(
        map((vLog) => {
          const newVersion = control.value;
          const previousVersion = vLog[appNameControl.value];
          // check if the new version is greater than previous version
          return compareVersion(newVersion, previousVersion) === 1
            ? null
            : {
                newVersionRequired: previousVersion,
              };
        })
      );
    };
  }
}
