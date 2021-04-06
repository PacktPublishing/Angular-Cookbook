import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchBoxComponent } from './watch-box.component';

describe('WatchBoxComponent', () => {
  let component: WatchBoxComponent;
  let fixture: ComponentFixture<WatchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
