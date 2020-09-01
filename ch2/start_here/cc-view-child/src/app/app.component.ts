import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cc-view-child';

  addNewPicture() {
    console.log('added new picture');
  }

  removeFirstPicture() {
    console.log('removed first picture');
  }
}
