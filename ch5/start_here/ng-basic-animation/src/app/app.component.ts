import { Component } from '@angular/core';
import { SocialCardType } from './constants/social-card-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-dynamic-components';
  selectedCardType: SocialCardType;
  cardTypes = SocialCardType;

  setCardType(type: SocialCardType) {
    this.selectedCardType = type;
  }
}
