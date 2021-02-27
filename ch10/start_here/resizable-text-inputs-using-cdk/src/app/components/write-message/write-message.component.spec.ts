import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteMessageComponent } from './write-message.component';

xdescribe('WriteMessageComponent', () => {
  let component: WriteMessageComponent;
  let fixture: ComponentFixture<WriteMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
