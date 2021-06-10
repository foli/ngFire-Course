import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { User } from "src/app/users/user.model";
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: "app-post-dashboard",
    templateUrl: "./post-dashboard.component.html",
    styleUrls: ["./post-dashboard.component.css"],
})
export class PostDashboardComponent implements OnInit {
    user$: Observable<User>;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.user$ = this.authService.user$;
    }

    // savePost() {
    //     const formData: Post = {
    //         author: this.auth.authState.displayName || this.auth.authState.email,
    //         authorId: this.auth.currentUserId,
    //         title: this.postForm.get("title").value,
    //         image: this.imageURL || null,
    //         content: this.postForm.get("content").value,
    //         draft: this.postForm.get("draft").value || false,
    //         published: new Date(),
    //         trending: 0,
    //     };
    //     if (!this.postForm.untouched) {
    //         this.postService.create(formData);
    //         this.postForm.reset();
    //         this.imageURL = "";
    //     }
    // }

    // uploadPostImage(event) {
    //     const file = event.target.files[0];
    //     const path = `posts/${file.name}`;
    //     if (file.type.split("/")[0] !== "image") {
    //         return alert("only image files");
    //     }
    //     const task = this.storage.upload(path, file);
    //     //   this.downloadURL = task.downloadURL();
    //     this.uploadPercent = task.percentageChanges();
    //     console.log("Image Uploaded!");
    //     this.downloadURL.subscribe((url) => (this.imageURL = url));
    // }
}
