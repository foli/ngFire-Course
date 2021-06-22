import { Injectable } from "@angular/core";

import firebase from "firebase/app";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

import { Observable } from "rxjs";
import { first } from "rxjs/operators";

import { FormData, Post } from "./post.model";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: "root",
})
export class PostService {
    postsCollection: AngularFirestoreCollection<Post>;

    constructor(private afs: AngularFirestore, private authService: AuthService) {
        this.postsCollection = this.afs.collection("posts");
    }

    getPosts(): Observable<Post[]> {
        return this.postsCollection.valueChanges();
    }

    getPost(id: string): Observable<Post> {
        return this.postsCollection.doc(id).valueChanges();
    }

    async create(payload: FormData) {
        try {
            const { uid, displayName } = await this.authService.user$.pipe(first()).toPromise();

            const post: Post = {
                ...payload,
                author: displayName,
                authorId: uid,
                published: firebase.firestore.Timestamp.fromDate(new Date()),
                likes: 0,
            };

            this.postsCollection.doc(payload.id).set(post);
        } catch (error) {
            console.log(error.message);
        }
    }

    update(id: string, post: Partial<Post>) {
        try {
            this.postsCollection.doc(id).update(post);
        } catch (error) {
            console.log(error.message);
        }
    }

    delete(id: string) {
        try {
            // TODO: delete image on storage
            return this.postsCollection.doc(id).delete();
        } catch (error) {
            console.log(error.message);
            return error;
        }
    }
}
