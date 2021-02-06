import { Component, Input, OnInit } from '@angular/core';
import { AppUserCard } from 'src/interfaces/app-user-card.interface';

@Component({
  selector: 'app-the-amazing-list',
  templateUrl: './the-amazing-list.component.html',
  styleUrls: ['./the-amazing-list.component.scss']
})
export class TheAmazingListComponent implements OnInit {
  @Input() listItems: Partial<AppUserCard>[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
