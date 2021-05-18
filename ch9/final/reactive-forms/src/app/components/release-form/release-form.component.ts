import { Component, OnInit } from '@angular/core';
import { Apps } from 'src/app/constants/apps';

@Component({
  selector: 'app-release-form',
  templateUrl: './release-form.component.html',
  styleUrls: ['./release-form.component.scss'],
})
export class ReleaseFormComponent implements OnInit {
  apps = Object.values(Apps);
  constructor() {}

  ngOnInit(): void {}
}
