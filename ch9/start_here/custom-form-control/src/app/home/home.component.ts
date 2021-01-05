import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  reviewForm = new FormGroup({
    comment: new FormControl('', []),
    rating: new FormControl('', [ Validators.required, Validators.min(1), Validators.max(5) ])
  })
  constructor() {}

  ngOnInit() {
  }

  submitReview(form: FormGroup) {
    console.log(form.value);
  }

  ngOnDestroy() {}
}
