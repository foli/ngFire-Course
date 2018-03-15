import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore'
import { AuthService } from '../core/auth.service'
import { AngularFireStorage } from 'angularfire2/storage'

@Injectable()
export class GalleryService {
  galleryCollection: AngularFirestoreCollection<any>

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private storage: AngularFireStorage
  ) {}

  getImages() {
    const uid = this.auth.currentUserId
    this.galleryCollection = this.afs.collection(`users/${uid}/gallery`)
    return this.galleryCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data()
        const id = a.payload.doc.id
        return { id, ...data }
      })
    })
  }
  
}
