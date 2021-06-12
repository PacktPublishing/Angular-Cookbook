import { Component, HostListener, OnInit } from '@angular/core';
import { cardAnimation } from '../../animations';

@Component({
  selector: 'app-twitter-card',
  templateUrl: './twitter-card.component.html',
  styleUrls: ['./twitter-card.component.scss'],
  animations: [cardAnimation],
})
export class TwitterCardComponent implements OnInit {
  cardState;
  constructor() {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hovered';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'active';
  }

  ngOnInit(): void {
    this.cardState = 'active';
  }
}
