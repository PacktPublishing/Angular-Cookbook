import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-user-search-input',
  templateUrl: './user-search-input.component.html',
  styleUrls: ['./user-search-input.component.scss'],
})
export class UserSearchInputComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  componentAlive: boolean;
  @Output() searchQueryChanged = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.componentAlive = true;
    this.searchForm = new FormGroup({
      username: new FormControl('', []),
    });
    this.searchForm
      .get('username')
      .valueChanges.pipe(
        takeWhile(() => !!this.componentAlive),
        debounceTime(300)
      )
      .subscribe((username) => {
        this.searchQueryChanged.emit(username);
      });
  }

  ngOnDestroy() {
    this.componentAlive = false;
  }
}
