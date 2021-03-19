import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isComponentAlive: boolean;
  formSubmitSuccess: boolean;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.isComponentAlive = true;
    this.loginForm.valueChanges
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(() => {
        this.formSubmitSuccess = false;
      });
  }

  submitForm(loginForm) {
    this.formSubmitSuccess = true;
    console.log('loginForm', loginForm);
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }
}
