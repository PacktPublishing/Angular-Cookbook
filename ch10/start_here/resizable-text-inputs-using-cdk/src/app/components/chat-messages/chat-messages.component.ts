import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

export interface Message {
  id: string;
  text: string;
  user?: string;
}

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss'],
})
export class ChatMessagesComponent implements OnInit, OnChanges {
  @ViewChild('messagesList') private messagesList: ElementRef;
  @Input('messages') public messages: Array<Message>;
  constructor() {}

  ngOnInit() {
    this.scrollToBottom(); // scroll to bottom on component init
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.messages || changes.messages.isFirstChange()) {
      return;
    }
    if (!(changes.messages.previousValue && changes.messages.currentValue)) {
      return;
    }
    if (
      changes.messages.previousValue.length ===
      changes.messages.currentValue.length
    ) {
      return;
    }
    this.scrollToBottom(); // whenever the change detection happens. I.e. messages are changed.
  }

  removeMessage(message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

  /**
   * @author Ahsan Ayaz
   * Scrolls to bottom
   */
  scrollToBottom() {
    try {
      setTimeout(() => {
        this.messagesList.nativeElement.scrollTop = this.messagesList.nativeElement.scrollHeight;
      }, 0);
    } catch (err) {
      console.log(err);
    }
  }
}
