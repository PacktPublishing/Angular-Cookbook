import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Using CDK Drag And Drop to move items from one list to another';
  constructor() {}

  ngOnInit() {}
}
