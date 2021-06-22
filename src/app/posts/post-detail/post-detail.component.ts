import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs";
import { SidenavService } from "src/app/navigation/sidenav.service";
import { StorageService } from "src/app/shared/storage.service";
import { PostService } from "../post.service";
import { Post } from "../post.model";

@Component({
    selector: "app-post-detail",
    templateUrl: "./post-detail.component.html",
    styleUrls: ["./post-detail.component.css"],
})
export class PostDetailComponent implements OnInit {
    post: Post;

    title: string = "Post";

    image$: Observable<string>;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        public sidenavService: SidenavService,
        public storageService: StorageService,
    ) {}

    ngOnInit() {
        this.getPost();
    }

    getPost(): void {
        const id = this.route.snapshot.paramMap.get("id");
        this.postService.getPost(id).subscribe((data) => {
            this.post = data;
            this.image$ = this.storageService.getDownloadURL(data.image);
        });
    }
}
