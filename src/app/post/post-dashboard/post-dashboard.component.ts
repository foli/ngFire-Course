import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

import { AuthService } from "../../core/auth.service";
import { PostService } from "../post.service";
import { Post } from "../post.model";

@Component({
  selector: "app-post-dashboard",
  templateUrl: "./post-dashboard.component.html",
  styleUrls: ["./post-dashboard.component.css"]
})
export class PostDashboardComponent implements OnInit {
  postForm: FormGroup;

  imageURL: string;

  constructor(
    private postService: PostService,
    private auth: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.postForm = this.fb.group({
      title: [""],
      content: [""],
      draft: false
    });
  }

  savePost() {
    const formData: Post = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      title: this.postForm.get("title").value,
      image: this.imageURL || null,
      content: this.postForm.get("content").value,
      draft: this.postForm.get("draft").value || false,
      published: new Date(),
      claps: 0
    };
    if (!this.postForm.untouched) {
      this.postService.create(formData);
      this.postForm.reset();
    }
  }
}
