import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUserCard } from 'src/interfaces/app-user-card.interface';
import { DataService } from './core/data.service';

const LOADER_TIMEOUT = 3000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Using *ngFor trackBy function';
  $listItemsData: Observable<AppUserCard[]>;
  showLoader: boolean;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
      this.getUsers();
    }, LOADER_TIMEOUT);
  }

  getUsers() {
    this.$listItemsData = this.dataService.getUsers();
  }

  updateUser(userCard: AppUserCard) {
    console.log('Updating user', userCard);
    userCard.name += ` UPDATED`;
    this.dataService.updateUser(userCard);
    this.getUsers();
  }

  deleteUser(userCard: AppUserCard) {
    console.log('Deleting user', userCard);
    this.dataService.deleteUser(userCard);
    this.getUsers();
  }
}
