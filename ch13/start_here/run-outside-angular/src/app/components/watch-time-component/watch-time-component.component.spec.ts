import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchTimeComponentComponent } from './watch-time-component.component';

describe('WatchTimeComponentComponent', () => {
  let component: WatchTimeComponentComponent;
  let fixture: ComponentFixture<WatchTimeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchTimeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchTimeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
