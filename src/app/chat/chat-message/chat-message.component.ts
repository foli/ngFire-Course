import { Component, OnInit, Input } from '@angular/core'
import { AuthService } from "../../auth/auth.service";

import { Message } from '../message.model'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message
  incoming: boolean

  constructor(
    private messageService: MessageService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.checkIncoming()
  }
  
  checkIncoming() {
    const user = this.auth.currentUserId
    if(this.message.sender && user) {
      this.incoming = this.message.senderId !== user
    }
  }

}
