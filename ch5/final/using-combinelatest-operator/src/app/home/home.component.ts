import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { COLORS } from '../constants';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, combineAll } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sizeOptions = [100, 200, 300, 400, 500, 600, 700];
  colorOptions = COLORS;
  borderRadiusOptions = [4, 6, 8, 10, 12, 14, 16, 18, 20];

  boxForm = new FormGroup({
    size: new FormControl(''),
    borderRadius: new FormControl(''),
    textColor: new FormControl(''),
    backgroundColor: new FormControl(''),
  });

  boxStyles$: Observable<{
    width: string;
    height: string;
    backgroundColor: string;
    color: string;
    borderRadius: string;
  }>;

  constructor() {}

  ngOnInit() {
    this.boxForm.get('size').setValue(this.sizeOptions[0]);
    this.boxForm.get('backgroundColor').setValue(this.colorOptions[0]);
    this.boxForm.get('textColor').setValue(this.colorOptions[1]);
    this.boxForm.get('borderRadius').setValue(this.borderRadiusOptions[0]);
    this.listenToInputChanges();
  }

  listenToInputChanges() {
    this.boxStyles$ = combineLatest([
      this.boxForm
        .get('size')
        .valueChanges.pipe(startWith(this.sizeOptions[0])),
      this.boxForm
        .get('borderRadius')
        .valueChanges.pipe(startWith(this.borderRadiusOptions[0])),
      this.boxForm
        .get('backgroundColor')
        .valueChanges.pipe(startWith(this.colorOptions[1])),
      this.boxForm
        .get('textColor')
        .valueChanges.pipe(startWith(this.colorOptions[0])),
    ]).pipe(
      map(([size, borderRadius, backgroundColor, textColor]) => {
        return {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor,
          color: textColor,
          borderRadius: `${borderRadius}px`,
        };
      })
    );
  }

  ngOnDestroy() {}
}
