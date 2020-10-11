import { Component } from '@angular/core';
import { SocialCardType } from './constants/social-card-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
