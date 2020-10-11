import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCardComponent } from './social-card.component';

describe('SocialCardComponent', () => {
  let component: SocialCardComponent;
  let fixture: ComponentFixture<SocialCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
