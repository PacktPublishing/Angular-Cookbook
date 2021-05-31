import { Component, OnInit, Input } from '@angular/core';
import { SocialCardType } from 'src/app/constants/social-card-type';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit {
  @Input() type: SocialCardType;
  cardTypes = SocialCardType;
  constructor() { }

  ngOnInit(): void {
  }

}
