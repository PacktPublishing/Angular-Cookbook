import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { COLORS } from '../constants';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sizeOptions = [100, 200, 300, 400, 500, 600, 700];
  colorOptions = COLORS;
  borderRadiusOptions = [4, 6, 8, 10, 12, 14, 16, 18, 20]
  boxStyles$: Observable<{
    width: string,
    height: string,
    backgroundColor: string,
    color: string
    borderRadius: string
  }>;

  boxForm = new FormGroup({
    size: new FormControl(''),
    borderRadius: new FormControl(''),
    textColor: new FormControl(''),
    backgroundColor: new FormControl(''),
  })

  constructor() {
  }

  ngOnInit() {
    this.listenToInputChanges();
  }

  listenToInputChanges() {
    this.boxStyles$ = combineLatest([
      this.boxForm.get('size').valueChanges,
      this.boxForm.get('borderRadius').valueChanges,
      this.boxForm.get('backgroundColor').valueChanges,
      this.boxForm.get('textColor').valueChanges
    ]).pipe(
      startWith([
        this.sizeOptions[0],
        this.colorOptions[0],
        this.colorOptions[1],
        this.borderRadiusOptions[0]
      ]),
      map(([size, borderRadius, backgroundColor, textColor]) => {
      return {
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor,
        color: textColor,
        borderRadius: `${borderRadius}px`
      }
    }));
  }

  ngOnDestroy() {}
}
