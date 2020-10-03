import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterCardComponent } from './twitter-card.component';

describe('TwitterCardComponent', () => {
  let component: TwitterCardComponent;
  let fixture: ComponentFixture<TwitterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
