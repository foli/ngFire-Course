import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from "firebase/app";
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { environment } from "src/environments/environment";

import { first } from "rxjs/operators";

import { User } from "./user.model";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: "root",
})
export class UserService {
    userCollection: AngularFirestoreCollection<User>;

    userDoc: AngularFirestoreDocument<User>;

    constructor(
        private route: Router,
        private afs: AngularFirestore,
        private storage: AngularFireStorage,
        private authService: AuthService,
    ) {
        this.userCollection = this.afs.collection("users");
    }

    getUsers() {
        try {
            return this.userCollection.valueChanges();
        } catch (error) {
            // TODO: handle error messages
            return error.message;
        }
    }

    getUser(uid: string) {
        try {
            this.userDoc = this.afs.doc<User>(`users/${uid}`);
            return this.userDoc.valueChanges();
        } catch (error) {
            // TODO: handle error messages
            return error.message;
        }
    }

    async updateUser(data: Partial<User>) {
        try {
            const { uid } = await this.authService.user$.pipe(first()).toPromise();
            if (uid) {
                await this.afs.doc(`users/${uid}`).update(data);
                // TODO: user feedback
                console.log("Data has been saved on firestore.");
            }
        } catch (error) {
            // TODO: handle error messages
            console.log(error.message);
        }
    }

    async changeEmail(newEmail: string) {
        try {
            const actionCodeSettings = {
                url: `${environment.baseURL}/auth/signin`,
                handleCodeInApp: true,
            };
            if (!firebase.auth().currentUser) {
                // TODO: use route guard to avoid unauthorized user to access this page.
                console.log("Please login");
                this.route.navigate(["auth", "signin"]);
            }
            await firebase.auth().currentUser.updateEmail(newEmail);
            await firebase.auth().currentUser.sendEmailVerification(actionCodeSettings);

            this.updateUser({ email: newEmail });
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

    async changeProfile(profile: { displayName?: string; photoURL?: string }) {
        try {
            await firebase.auth().currentUser.updateProfile(profile);

            this.updateUser(profile);
            console.log("update profile");
        } catch (error) {
            // TODO: handle error messages
            console.log(error.message);
        }
    }

    uploadPhotoURL(files: FileList, user: User) {
        try {
            const file = files[0];

            if (file.type.split("/")[0] !== "image") {
                throw Error("only images allowed");
            }

            const filePath: string = `users/${user.uid}/photoURL/${file.name}`;
            const fileRef = this.storage.ref(filePath);

            const task = this.storage.upload(filePath, file);

            // TODO: Let user know file has been uploaded successfully
            console.log("File has been uploaded.");

            return { fileRef, task };
        } catch (error) {
            // TODO: handle error messages
            console.log(error.message);
            return error.message;
        }
    }
}
