import { Component } from '@angular/core';
import { SocialCardType } from './constants/social-card-type';
import { buttonTextAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    buttonTextAnimation('fbButtonTextAnimation', '80px'),
    buttonTextAnimation('twButtonTextAnimation', '50px'),
  ]
})
export class AppComponent {
  title = 'ng-dynamic-components';
  selectedCardType: SocialCardType;
  cardTypes = SocialCardType;
  isFBBtnActive = false;
  isTwBtnActive = false;
  setCardType(type: SocialCardType) {
    this.selectedCardType = type;
    this.isFBBtnActive = (this.selectedCardType === this.cardTypes.Facebook);
    this.isTwBtnActive = (this.selectedCardType === this.cardTypes.Twitter);
  }
}
