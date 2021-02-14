import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAmazingListComponent } from './the-amazing-list.component';

describe('TheAmazingListComponent', () => {
  let component: TheAmazingListComponent;
  let fixture: ComponentFixture<TheAmazingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheAmazingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheAmazingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
