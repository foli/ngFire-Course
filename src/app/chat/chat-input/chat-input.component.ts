import { Component, } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { MessageService } from "../message.service";

import { Message } from "../message.model";
import { ThreadService } from '../thread.service';
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: "app-chat-input",
    templateUrl: "./chat-input.component.html",
    styleUrls: ["./chat-input.component.css"]
})
export class ChatInputComponent {
    message: string;

    constructor(
        private route: ActivatedRoute,
        private messageService: MessageService,
        private threadService: ThreadService,
        private auth: AuthService
    ) { }


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
        this.saveLast(channelId, message)
        this.message = "";
    }

    saveLast(channelId, message) {
        this.threadService.saveLastMessage(channelId, message)
    }

    handleSubmit(event) {
        if (event.keyCode === 13) {
            this.send()
        }
    }
}
