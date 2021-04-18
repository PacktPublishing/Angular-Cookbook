import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueGuesserComponent } from './value-guesser.component';

describe('ValueGuesserComponent', () => {
  let component: ValueGuesserComponent;
  let fixture: ComponentFixture<ValueGuesserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueGuesserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueGuesserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
