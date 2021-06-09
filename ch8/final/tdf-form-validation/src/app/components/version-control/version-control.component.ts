import { Component, OnInit } from '@angular/core';
import { ReleaseLog } from 'src/app/classes/release-log';

@Component({
  selector: 'app-version-control',
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.scss']
})
export class VersionControlComponent implements OnInit {
  releaseLogs: ReleaseLog[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addNewReleaseLog(log: ReleaseLog) {
    this.releaseLogs.unshift(log);
  }

}
