import { of } from 'rxjs';
import { Message } from '../models/message';

const dummyMessages: Array<Message> = [
  {
    id: 0,
    text: 'Hello there',
  },
  {
    id: 1,
    text: 'Hi',
  },
  {
    id: 2,
    text: "How're you doing?",
  },
  {
    id: 3,
    text: 'Perfectly fine. How are you ?',
  },
];

export class MockChatService {
  getMessages() {
    return of(this.processMessages(dummyMessages));
  }

  processMessages(messages: Array<Message>): Array<Message> {
    return messages;
  }
}
