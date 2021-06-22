import { Component, OnDestroy, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { SidenavService } from "src/app/navigation/sidenav.service";
import { Post } from "../post.model";
import { PostService } from "../post.service";

@Component({
    selector: "app-post-list",
    templateUrl: "./post-list.component.html",
    styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit, OnDestroy {
    posts: Observable<Post[]>;

    title: string = "Blog";

    cols: number;

    destroyed = new Subject<void>();

    displayNameMap = new Map([
        [Breakpoints.XSmall, "XSmall"],
        [Breakpoints.Medium, "Medium"],
        [Breakpoints.XLarge, "XLarge"],
    ]);

    constructor(
        private breakpointObserver: BreakpointObserver,
        private postService: PostService,
        public sidenavService: SidenavService,
    ) {}

    ngOnInit() {
        this.getPosts();
        this.breakpointObserver
            .observe([Breakpoints.XSmall, Breakpoints.Medium, Breakpoints.XLarge])
            .pipe(takeUntil(this.destroyed))
            .subscribe((result) => {
                // eslint-disable-next-line no-restricted-syntax
                for (const query of Object.keys(result.breakpoints)) {
                    if (result.breakpoints[query]) {
                        const currentScreenSize = this.displayNameMap.get(query) ?? "Unknown";
                        if (currentScreenSize === "XSmall") this.cols = 1;
                        if (currentScreenSize === "Medium") this.cols = 2;
                        if (currentScreenSize === "XLarge") this.cols = 3;
                    }
                }
            });
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }

    getPosts() {
        this.posts = this.postService.getPosts();
    }
}
