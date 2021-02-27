import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/services/chat.service';
import { Message } from '../../models/message';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chatMessages: Array<Message> = [];
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    // get messages on component init
    this.chatService.getMessages().subscribe((messages: Array<Message>) => {
      this.chatMessages = messages;
    });
  }

  /**
   * @author Ahsan Ayaz
   * Handler for a new message creation. Pushes the new message to the message list
   * @param message {Message}
   */
  newMessageSent(message: Message) {
    this.chatMessages = [...this.chatMessages, message];
  }
}
