import { Injectable } from "@angular/core";
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import firebase from "firebase/app";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

import { Post } from "./post.model";

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

    async create(data: Partial<Post>, imageFile: File) {
        const { id } = firebase.firestore().collection("posts").doc();
        const { uid, displayName } = await this.authService.user$.pipe(first()).toPromise();
        const { title, content, draft } = data;
        const imagePath = `posts/${id}`;
        const post: Post = {
            id,
            title,
            content,
            draft,
            image: imagePath,
            author: displayName,
            authorId: uid,
            published: firebase.firestore.Timestamp.fromDate(new Date()),
            likes: 0,
        };
        console.log(post);
        console.log(imageFile);
        this.postsCollection.doc(id).set(post);
        return this.uploadImage(imageFile, imagePath);
    }

    delete(id: string) {
        return this.getPost(id).delete();
    }

    update(id: string, post: Partial<Post>) {
        return this.getPost(id).update(post);
    }

    uploadImage(imageFile: File, imagePath: string): Observable<number> {
        try {
            const task = this.storage.upload(imagePath, imageFile);
            const uploadPercent = task.percentageChanges();

            // TODO: Let user know file has been uploaded successfully
            console.log("Uploading image...");

            return uploadPercent;
        } catch (error) {
            // TODO: handle error messages
            console.log(error.message);
            return error.message;
        }
    }
}
