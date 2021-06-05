import { Component } from '@angular/core';
import { SocialCardType } from './constants/social-card-type';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('socialBtnText', [
      state(
        'btn-active-text',
        style({
          width: '80px',
          visibility: 'visible',
        })
      ),
      state(
        'btn-inactive-text',
        style({
          width: '0px',
          visibility: 'hidden',
        })
      ),
      transition('btn-active-text => btn-inactive-text', [
        group([
          animate(
            '0s',
            style({
              width: '80px',
            })
          ),
          animate(
            '0s',
            style({
              visibility: 'hidden',
            })
          ),
        ]),
      ]),
      transition('btn-inactive-text => btn-active-text', [
        animate(
          '0.3s ease',
          style({
            width: '80px',
          })
        ),
        animate(
          '0.3s ease',
          style({
            visibility: 'visible',
          })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'ng-dynamic-components';
  selectedCardType: SocialCardType;
  cardTypes = SocialCardType;

  setCardType(type: SocialCardType) {
    this.selectedCardType = type;
  }
}
