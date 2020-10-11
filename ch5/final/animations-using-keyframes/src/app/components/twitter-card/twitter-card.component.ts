import { Component, OnInit } from '@angular/core';
import { cardAnimation } from '../../animations';

@Component({
  selector: 'app-twitter-card',
  templateUrl: './twitter-card.component.html',
  styleUrls: ['./twitter-card.component.scss'],
  animations: [cardAnimation]
})
export class TwitterCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }


}
