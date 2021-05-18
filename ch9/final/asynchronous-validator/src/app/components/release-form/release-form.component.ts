import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { IReleaseLog, ReleaseLog } from 'src/app/classes/release-log';
import { Apps } from 'src/app/constants/apps';
import { REGEXES } from 'src/app/constants/regexes';
import { VersionService } from 'src/app/core/services/version.service';
@Component({
  selector: 'app-release-form',
  templateUrl: './release-form.component.html',
  styleUrls: ['./release-form.component.scss'],
})
export class ReleaseFormComponent implements OnInit, OnDestroy {
  @Output() newReleaseLog = new EventEmitter<IReleaseLog>();
  isComponentAlive = false;
  apps = Object.values(Apps);
  versionInputRegex = REGEXES.SEMANTIC_VERSION;
  releaseForm = new FormGroup({
    app: new FormControl('', Validators.required),
    version: new FormControl('', [
      Validators.required,
      Validators.pattern(this.versionInputRegex),
    ]),
  });
  constructor(private versionService: VersionService) {}

  ngOnInit(): void {
    this.isComponentAlive = true;
    this.releaseForm
      .get('version')
      .setAsyncValidators(
        this.versionService.versionValidator(this.releaseForm.get('app'))
      );
    this.releaseForm
      .get('app')
      .valueChanges.pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(() => {
        this.releaseForm.get('version').updateValueAndValidity();
      });
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }

  formSubmit(form: FormGroup): void {
    if (form.get('version').status === 'PENDING') {
      return;
    }
    const { app, version } = form.value;
    console.log({ app, version });
    const newLog: ReleaseLog = new ReleaseLog(app, version);
    this.newReleaseLog.emit(newLog);
  }
}
