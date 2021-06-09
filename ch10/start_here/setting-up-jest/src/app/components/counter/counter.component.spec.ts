import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should increment the counter value upon tapping increment button', () => {
    component.counter = 0;
    component.increment();
    expect(component.counter).toBe(1);
  });

  it('should decrement the counter value upon tapping decrement button', () => {
    component.counter = 10;
    component.decrement();
    expect(component.counter).toBe(9);
  });

  it('should reset the counter value upon tapping reset button', () => {
    component.counter = 5;
    component.increment(); // 6
    component.increment(); // 7
    component.reset();
    expect(component.counter).toBe(0);
  });
});
