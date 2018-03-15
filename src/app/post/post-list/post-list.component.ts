import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Post } from "../post.model";
import { PostService } from "../post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
