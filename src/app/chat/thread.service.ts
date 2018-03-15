import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

import { Thread } from "./thread.model";
import { Message } from "./message.model";

import { AuthService } from "../core/auth.service";
import { MessageService } from "./message.service";

@Injectable()
export class ThreadService {
  threadsCollection: AngularFirestoreCollection<Thread>;
  threadDoc: AngularFirestoreDocument<Thread>;

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private messageService: MessageService
  ) {}

  getThreads() {
    this.threadsCollection = this.afs.collection("chats");
    return this.threadsCollection.valueChanges();
  }

  getThread(profileId: string) {
    this.threadDoc = this.afs.doc<Thread>(`chats/${profileId}`);
    return this.threadDoc.valueChanges();
  }

  createThread(profileId) {
    const currentUserId = this.auth.currentUserId

    const id =
      profileId < currentUserId
        ? `${profileId}_${currentUserId}`
        : `${currentUserId}_${profileId}`
    const avatar = this.auth.authState.photoURL
    const members = { [profileId]: true, [currentUserId]: true }

    const thread: Thread = { id, avatar, members }
    const threadPath = `chats/${id}`

    return this.afs.doc(threadPath).set(thread, { merge: true })
  }
}
