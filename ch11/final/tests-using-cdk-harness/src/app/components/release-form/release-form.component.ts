import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IReleaseLog, ReleaseLog } from 'src/app/classes/release-log';
import { Apps } from 'src/app/constants/apps';
import { REGEXES } from 'src/app/constants/regexes';

@Component({
  selector: 'app-release-form',
  templateUrl: './release-form.component.html',
  styleUrls: ['./release-form.component.scss'],
})
export class ReleaseFormComponent implements OnInit {
  @Output() newReleaseLog = new EventEmitter<IReleaseLog>();
  apps = Object.values(Apps);
  versionInputRegex = REGEXES.SEMANTIC_VERSION;
  releaseForm = new FormGroup({
    app: new FormControl(this.apps[0], Validators.required),
    version: new FormControl('', [
      Validators.required,
      Validators.pattern(this.versionInputRegex),
    ]),
  });
  constructor() {}

  ngOnInit(): void {}

  formSubmit(form: FormGroup): void {
    const { app, version } = form.value;
    console.log({ app, version });
    const newLog: ReleaseLog = new ReleaseLog(app, version);
    this.newReleaseLog.emit(newLog);
  }
}
