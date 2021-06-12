import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IReleaseLog, ReleaseLog } from 'src/app/classes/release-log';
import { Apps } from 'src/app/constants/apps';
@Component({
  selector: 'app-release-form',
  templateUrl: './release-form.component.html',
  styleUrls: ['./release-form.component.scss']
})
export class ReleaseFormComponent implements OnInit {
  @Output() newReleaseLog = new EventEmitter<IReleaseLog>();
  apps = Object.values(Apps);
  releaseForm = new FormGroup({
    app: new FormControl(''),
    version: new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
  }

  formSubmit(form: FormGroup): void {
    const { app, version } = form.value;
    console.log({app, version});
    const newLog: ReleaseLog = new ReleaseLog(app, version)
    this.newReleaseLog.emit(newLog);

  }


}
