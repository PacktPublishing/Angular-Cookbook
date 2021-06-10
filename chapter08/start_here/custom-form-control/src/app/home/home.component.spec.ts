import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should submit the form with correct values of rating', () => {
    spyOn(component, 'submitReview');
    const submitButton = fixture.nativeElement.querySelector('#submitBtn');
    component.reviewForm.get('rating').setValue(1);
    fixture.detectChanges();
    expect(submitButton.hasAttribute('disabled')).toBe(false);
    submitButton.click();
    expect(component.submitReview).toHaveBeenCalled();
  });

  it('should show an error the form with correct values of rating', () => {
    spyOn(component, 'submitReview');
    const submitButton = fixture.nativeElement.querySelector('#submitBtn');
    component.reviewForm.get('rating').setValue(-1);
    fixture.detectChanges();
    expect(submitButton.hasAttribute('disabled')).toBe(true);
    submitButton.click();
    const ratingError = fixture.nativeElement.querySelector('#ratingError');
    expect(ratingError).toBeTruthy();
    expect(component.submitReview).not.toHaveBeenCalled();
  });
});
