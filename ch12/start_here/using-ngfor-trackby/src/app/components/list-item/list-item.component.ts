import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppUserCard } from 'src/interfaces/app-user-card.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() item: AppUserCard;
  @Output() itemClicked = new EventEmitter<AppUserCard>();
  @Output() itemDeleted = new EventEmitter<AppUserCard>();
  constructor() {}

  ngOnInit(): void {
    console.log('ListItemComponent initiated');
  }

  deleteItem($event, item: AppUserCard) {
    if ($event) {
      $event.stopImmediatePropagation();
    }
    this.itemDeleted.emit(item);
  }
}
