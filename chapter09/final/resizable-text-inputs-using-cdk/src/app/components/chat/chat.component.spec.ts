import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { ChatService } from '../../core/services/chat.service';
import { MockChatService } from '../../mock-providers/mock-chat.service';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatComponent],
      providers: [{ provide: ChatService, useClass: MockChatService }],
    })
      .overrideTemplate(
        ChatComponent,
        `
                        <h3 class="heading text-center">Angular4 Rockstar Chat</h3>
                      `
      )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get messages from server on component load', () => {
    expect(component.chatMessages.length).toBe(4);
  });

  it('should push the new message to list when a new message is sent', () => {
    component.newMessageSent(component.chatMessages[0]);
    expect(component.chatMessages.length).toBe(5);
  });
});
