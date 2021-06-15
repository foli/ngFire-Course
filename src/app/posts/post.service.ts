import { Injectable } from "@angular/core";

import firebase from "firebase/app";
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";

import { finalize, first } from "rxjs/operators";

import { FormData, Post } from "./post.model";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: "root",
})
export class PostService {
    postsCollection: AngularFirestoreCollection<Post>;

    postDoc: AngularFirestoreDocument<Post>;

    constructor(
        private afs: AngularFirestore,
        private storage: AngularFireStorage,
        private authService: AuthService,
    ) {
        this.postsCollection = this.afs.collection("posts");
    }

    getPosts() {
        return this.postsCollection.valueChanges();
    }

    getPost(id: string) {
        return this.afs.doc<Post>(`posts/${id}`);
    }

    getPostData(id: string) {
        this.postDoc = this.afs.doc<Post>(`posts/${id}`);
        return this.postDoc.valueChanges();
    }

    async create(payload: FormData, imageFile: File) {
        try {
            const { id } = firebase.firestore().collection("posts").doc();
            const { uid, displayName } = await this.authService.user$.pipe(first()).toPromise();

            const post: Post = {
                ...payload,
                id,
                image: null,
                author: displayName,
                authorId: uid,
                published: firebase.firestore.Timestamp.fromDate(new Date()),
                likes: 0,
            };

            this.postsCollection.doc(id).set(post);
            return this.uploadImage(imageFile, id);
        } catch (error) {
            return error;
        }
    }

    delete(id: string) {
        return this.getPost(id).delete();
    }

    update(id: string, post: Partial<Post>) {
        return this.getPost(id).update(post);
    }

    uploadImage(imageFile: File, id: string) {
        try {
            const imagePath = `posts/${id}`;

            const task = this.storage.upload(imagePath, imageFile);
            const fileRef = this.storage.ref(imagePath);

            task.snapshotChanges()
                .pipe(
                    finalize(() => {
                        fileRef.getDownloadURL().subscribe((url) => {
                            // TODO: Let user know file has been uploaded successfully
                            console.log("Uploading image...");
                            this.postsCollection.doc(id).update({ image: url });
                        });
                    }),
                )
                .subscribe();

            return task.percentageChanges();
        } catch (error) {
            // TODO: handle error messages
            console.log(error.message);
            return error.message;
        }
    }
}
