import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from "firebase/app";
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

    constructor(private route: Router, private afs: AngularFirestore) {
        this.userCollection = this.afs.collection("users");
    }

    getUsers() {
        return this.userCollection.valueChanges();
    }

    getUser(uid: string) {
        this.userDoc = this.afs.doc<User>(`users/${uid}`);
        return this.userDoc.valueChanges();
    }

    async changeEmail(newEmail: string) {
        try {
            if (!firebase.auth().currentUser) {
                // TODO: use route guard to avoid unauthorized user to access this page.
                console.log("Please login");
                this.route.navigate(["auth", "signin"]);
            }
            await firebase.auth().currentUser.updateEmail(newEmail);
            await firebase.auth().currentUser.sendEmailVerification();

            // TODO: create a message bus to notify users
            return `Your email has been changed to ${newEmail}.`;
        } catch (error) {
            if (error.code === "auth/requires-recent-login") {
                // TODO: let user known that recent auth is needed.
                this.route.navigate(["auth", "signin"]);
            }
            return error.message;
        }
    }
}
