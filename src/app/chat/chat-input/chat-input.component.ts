import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { AuthService } from "../../core/auth.service";
import { MessageService } from "../message.service";

import { Message } from "../message.model";

@Component({
  selector: "app-chat-input",
  templateUrl: "./chat-input.component.html",
  styleUrls: ["./chat-input.component.css"]
})
export class ChatInputComponent implements OnInit {
  message: string;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  send(): void {
    const channelId = this.route.snapshot.paramMap.get("id");
    const photoURL = this.auth.authState.photoURL;
    const sender = this.auth.authState.displayName || this.auth.authState.email;
    const senderId = this.auth.currentUserId;
    const message = this.message;
    this.messageService.sendMessage(
      channelId,
      photoURL,
      sender,
      senderId,
      message
    );
    this.message = "";
  }

  handleSubmit(event) {
    if(event.keyCode === 13) {
      this.send()
    }
  }
}
