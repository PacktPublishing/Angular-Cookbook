import { Component, OnInit } from '@angular/core';

enum Visibility {
  On = 'on',
  Off = 'off'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  visibility: Visibility;
  VISIBILITY = Visibility;

  title = 'ng-if-not-directive';
  ngOnInit() {
    this.setVisibility(this.VISIBILITY.Off)
  }

  setVisibility(value: Visibility) {
    this.visibility = value;
  }
}
