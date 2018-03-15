import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore'

import { Post } from './post.model'

@Injectable()
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref =>
      ref.orderBy('claps', 'desc').limit(10)
    )
  }

  create(data: Post) {
    this.postsCollection.add(data)
  }


}
