import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Unit testing Angular Pipes';
  digitValue = 1;
  maxFactorValue = 10;

  constructor() {}

  ngOnInit() {}
}
