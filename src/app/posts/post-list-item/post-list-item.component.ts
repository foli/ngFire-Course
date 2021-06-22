import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { StorageService } from "src/app/shared/storage.service";

import { Post } from "../post.model";

@Component({
    selector: "app-post-list-item",
    templateUrl: "./post-list-item.component.html",
    styleUrls: ["./post-list-item.component.css"],
})
export class PostListItemComponent implements OnInit {
    @Input() post: Post;

    image$: Observable<string>;

    constructor(public storageService: StorageService) {}

    ngOnInit() {
        this.image$ = this.storageService.getDownloadURL(this.post.image);
    }
}
