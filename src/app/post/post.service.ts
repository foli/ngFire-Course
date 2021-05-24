import { Injectable } from "@angular/core";
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
} from "@angular/fire/firestore";
// import { Observable } from "rxjs";

import { Post } from "./post.model";

@Injectable()
export class PostService {
    postsCollection: AngularFirestoreCollection<Post>;

    postDoc: AngularFirestoreDocument<Post>;

    constructor(private afs: AngularFirestore) {
        this.postsCollection = this.afs.collection("posts", (ref) =>
            ref.orderBy("trending", "desc").limit(10),
        );
    }

    // getPosts(): Observable<Post[]> {
    //     return this.postsCollection.snapshotChanges().map((actions) => {
    //         return actions.map((a) => {
    //             const data = a.payload.doc.data() as Post;
    //             const { id } = a.payload.doc;
    //             return { id, ...data };
    //         });
    //     });
    // }

    getPost(id: string) {
        return this.afs.doc<Post>(`posts/${id}`);
    }

    getPostData(id: string) {
        this.postDoc = this.afs.doc<Post>(`posts/${id}`);
        return this.postDoc.valueChanges();
    }

    create(data: Post) {
        this.postsCollection.add(data);
    }

    delete(id: string) {
        return this.getPost(id).delete();
    }

    update(id: string, formData) {
        return this.getPost(id).update(formData);
    }
}
