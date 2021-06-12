import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallablePromptComponent } from './installable-prompt.component';

describe('InstallablePromptComponent', () => {
  let component: InstallablePromptComponent;
  let fixture: ComponentFixture<InstallablePromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallablePromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallablePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
