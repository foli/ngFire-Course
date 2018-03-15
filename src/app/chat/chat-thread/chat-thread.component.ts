import { Component, OnInit, Input } from "@angular/core";
import { Thread } from "../thread.model";
import { ThreadService } from "../thread.service";

@Component({
  selector: "app-chat-thread",
  templateUrl: "./chat-thread.component.html",
  styleUrls: ["./chat-thread.component.css"]
})
export class ChatThreadComponent implements OnInit {
  @Input() thread: Thread;

  constructor(private threadService: ThreadService) {}

  ngOnInit() {}

  delete(threadId) {
    this.threadService.deleteThread(threadId);
  }
}
