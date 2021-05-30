import { Component } from '@angular/core';
import { HighlightColor } from './directives/highlight.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchText = '';
  hColor: HighlightColor = HighlightColor.LightCoral;
}
