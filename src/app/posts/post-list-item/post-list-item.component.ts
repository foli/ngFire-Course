import { Component, Input } from "@angular/core";

import { Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";
import { Post } from "../post.model";

import { PostService } from "../post.service";
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: "app-post-list-item",
    templateUrl: "./post-list-item.component.html",
    styleUrls: ["./post-list-item.component.css"],
})
export class PostListItemComponent {
    @Input() post: Post;

    editing = false;

    uploadPercent: Observable<number>;

    downloadURL: Observable<string>;

    imageURL: string;

    constructor(
        private postService: PostService,
        public auth: AuthService,
        private storage: AngularFireStorage,
    ) {}

    delete(id: string) {
        this.postService.delete(id);
    }

    update() {
        const post = {
            title: this.post.title,
            image: this.imageURL || this.post.image,
            content: this.post.content,
            draft: this.post.draft,
        };
        this.postService.update(this.post.id, post);
        this.editing = false;
    }

    uploadPostImage(event) {
        console.log(event);
    }
    // uploadPostImage(event) {
    //     const file = event.target.files[0];
    //     const path = `posts/${file.name}`;
    //     if (file.type.split("/")[0] !== "image") {
    //         return alert("only image files");
    //     }
    //     const task = this.storage.upload(path, file);
    //     //   this.downloadURL = task.downloadURL()
    //     this.uploadPercent = task.percentageChanges();
    //     console.log("Image Uploaded!");
    //     this.downloadURL.subscribe((url) => (this.imageURL = url));
    // }

    likeIt(value: number) {
        if (this.post.id) {
            this.postService.update(this.post.id, { likes: value + 1 });
        }
    }
}