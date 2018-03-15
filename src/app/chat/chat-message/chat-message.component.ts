import { Component, OnInit, Input } from '@angular/core'

import { Message } from '../message.model'
import { MessageService } from '../message.service';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message

  constructor() { }

  ngOnInit() {
  }

}
