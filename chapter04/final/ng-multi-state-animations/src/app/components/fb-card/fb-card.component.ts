import { Component, HostListener, OnInit } from '@angular/core';
import { cardAnimation } from '../../animations';

@Component({
  selector: 'app-fb-card',
  templateUrl: './fb-card.component.html',
  styleUrls: ['./fb-card.component.scss'],
  animations: [cardAnimation],
})
export class FbCardComponent implements OnInit {
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
