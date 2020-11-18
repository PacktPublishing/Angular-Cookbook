import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../core/interfaces/user.interface';
import { AppState } from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { getUsers } from '../store/app.actions';
import { selectUsers } from '../store/app.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  users$: Observable<IUser[]>;
  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.users$ = this.store.select(selectUsers);
    this.store.dispatch(getUsers())
  }


  ngOnDestroy() {}
}
