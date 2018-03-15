import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { ChatDetailComponent } from "./chat-detail/chat-detail.component";
import { ChatListComponent } from "./chat-list/chat-list.component";
import { ChatInputComponent } from "./chat-input/chat-input.component";
import { ChatFeedComponent } from "./chat-feed/chat-feed.component";
import { ChatMessageComponent } from "./chat-message/chat-message.component";
import { ChatMessagesComponent } from "./chat-messages/chat-messages.component";
import { ChatThreadComponent } from "./chat-thread/chat-thread.component";
import { ChatThreadsComponent } from "./chat-threads/chat-threads.component";
import { MessageService } from './message.service';
import { ThreadService } from './thread.service';

const routes: Routes = [
  { path: "chat/detail", component: ChatDetailComponent },
  { path: "chat", component: ChatListComponent }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [
    ChatFeedComponent,
    ChatInputComponent,
    ChatMessagesComponent,
    ChatThreadsComponent
  ],
  declarations: [
    ChatDetailComponent,
    ChatListComponent,
    ChatInputComponent,
    ChatFeedComponent,
    ChatMessageComponent,
    ChatMessagesComponent,
    ChatThreadComponent,
    ChatThreadsComponent
  ],
  providers: [MessageService, ThreadService]
})
export class ChatModule {}
