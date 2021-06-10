import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Observable } from "rxjs";

import { User } from "src/app/users/user.model";
import { Post } from "../post.model";
import { PostService } from "../post.service";

@Component({
    selector: "app-post-create",
    templateUrl: "./post-create.component.html",
    styleUrls: ["./post-create.component.css"],
})
export class PostCreateComponent implements OnInit {
    @Input() user: User;

    @ViewChild("fileInput", { static: true }) fileInput: ElementRef;

    postForm: FormGroup;

    uploadPercent: Observable<number>;

    imagePlaceholder: string | ArrayBuffer;

    imageFile: File;

    constructor(private fb: FormBuilder, private postService: PostService) {}

    ngOnInit() {
        this.postForm = this.fb.group({
            title: ["", Validators.required],
            content: ["", Validators.required],
            draft: false,
        });
    }

    async savePost() {
        try {
            const post: Partial<Post> = {
                title: this.postForm.get("title").value,
                content: this.postForm.get("content").value,
                draft: this.postForm.get("draft").value,
            };
            console.log(post);
            this.uploadPercent = await this.postService.create(post, this.imageFile);
            this.reset();
        } catch (error) {
            console.log(error.message);
        }
    }

    async onFileInput(event: Event) {
        try {
            const target = event.target as HTMLInputElement;
            this.imageFile = target.files[0] as File;

            const reader = new FileReader();

            if (this.imageFile.type.split("/")[0] !== "image") {
                this.fileInput.nativeElement.value = null;
                throw Error("only images allowed");
            }
            reader.readAsDataURL(this.imageFile);

            reader.onload = () => {
                this.imagePlaceholder = reader.result;
            };
        } catch (error) {
            console.log(error.message);
        }
    }

    reset() {
        this.postForm.reset();
        this.imagePlaceholder = null;
        this.fileInput.nativeElement.value = null;
        this.uploadPercent = null;
    }
}
