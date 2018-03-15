import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

import { User } from "./user.model";
import { AuthService } from "../core/auth.service";

@Injectable()
export class UserService {
  userCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;

  constructor(private afs: AngularFirestore, private auth: AuthService) {}

  getUsers() {
    this.userCollection = this.afs.collection("users");
    return this.userCollection.valueChanges();
  }

  getUser(id: string) {
    this.userDoc = this.afs.doc<User>(`users/${id}`);
    return this.userDoc.valueChanges();
  }

  updateProfileData(displayName: string, photoURL: string) {
    const user = this.auth.authState;
    const data = { displayName, photoURL };
    return user
      .updateProfile(data)
      .then(() =>
        this.afs.doc(`users/${user.uid}`).update({ displayName, photoURL })
      )
      .then(() => console.log("Your profile has been updated!"))
      .catch(error => console.log(error.message));
  }

  updateEmailData(email: string) {
    const user = this.auth.authState
    return user
      .updateEmail(email)
      .then(() => this.afs.doc(`users/${user.uid}`).update({ email }))
      .then(() => console.log('Your email has been updated to: ' + email))
      .then(user => {
        this.auth.authState
          .sendEmailVerification()
          .then(() => console.log('We sent you an email verification'))
          .catch(error => console.log(error.message))
      })
      .catch(error => console.log(error.message))
  }
  
  updateUserData(data: any) {
    const uid = this.auth.currentUserId
    return this.afs.doc(`users/${uid}`).update(data)
  }
}
