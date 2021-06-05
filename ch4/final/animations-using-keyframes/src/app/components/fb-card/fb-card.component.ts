import { Component, OnInit } from '@angular/core';
import { cardAnimation } from '../../animations';

@Component({
  selector: 'app-fb-card',
  templateUrl: './fb-card.component.html',
  styleUrls: ['./fb-card.component.scss'],
  animations: [cardAnimation]
})
export class FbCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
