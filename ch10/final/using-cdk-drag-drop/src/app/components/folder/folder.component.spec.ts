import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderComponent } from './folder.component';

describe('FolderComponent', () => {
  let component: FolderComponent;
  let fixture: ComponentFixture<FolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
