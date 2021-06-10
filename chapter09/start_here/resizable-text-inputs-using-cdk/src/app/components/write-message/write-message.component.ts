import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatService } from 'src/app/core/services/chat.service';
import { Message } from '../../models/message';
@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.scss'],
})
export class WriteMessageComponent implements OnInit {
  @Output() public onMessageSent = new EventEmitter<any>();
  public chatInput = '';
  constructor(private chatService: ChatService) {}

  ngOnInit() {}

  /**
   * @author Ahsan Ayaz
   * Creates a new message and emits to parent component
   */
  sendMessage() {
    if (this.chatInput.trim().length) {
      const id = Math.ceil(Math.random() * 1000 + 1);
      const message: Message = this.chatService.processMessages([
        { id: id, text: this.chatInput },
      ])[0];
      this.onMessageSent.emit(message);
      this.chatInput = '';
    }
  }
}
