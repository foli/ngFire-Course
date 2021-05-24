import { Component, Input } from "@angular/core";
import { Thread } from "../thread.model";
import { ThreadService } from "../thread.service";

@Component({
    selector: "app-chat-thread",
    templateUrl: "./chat-thread.component.html",
    styleUrls: ["./chat-thread.component.css"],
})
export class ChatThreadComponent {
    @Input() thread: Thread;

    constructor(private threadService: ThreadService) {}

    delete(threadId) {
        this.threadService.deleteThread(threadId);
    }
}
