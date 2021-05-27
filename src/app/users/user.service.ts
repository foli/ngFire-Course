import { Injectable } from "@angular/core";
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
} from "@angular/fire/firestore";

import { User } from "./user.model";

@Injectable({
    providedIn: "root",
})
export class UserService {
    userCollection: AngularFirestoreCollection<User>;

    userDoc: AngularFirestoreDocument<User>;

    constructor(private afs: AngularFirestore) {
        this.userCollection = this.afs.collection("users");
    }

    getUsers() {
        return this.userCollection.valueChanges();
    }

    getUser(uid: string) {
        this.userDoc = this.afs.doc<User>(`users/${uid}`);
        return this.userDoc.valueChanges();
    }
}
