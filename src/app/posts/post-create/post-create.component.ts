import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

import { User } from "src/app/users/user.model";
import { FormData } from "../post.model";
import { PostService } from "../post.service";

@Component({
    selector: "app-post-create",
    templateUrl: "./post-create.component.html",
    styleUrls: ["./post-create.component.css"],
})
export class PostCreateComponent implements OnInit {
    @ViewChild("fileInput", { static: true }) fileInput: ElementRef;

    user$: Observable<User>;

    postForm: FormGroup;

    uploadPercent: Observable<number>;

    imagePlaceholder: string | ArrayBuffer;

    imageFile: File;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private postService: PostService,
    ) {}

    ngOnInit() {
        this.user$ = this.authService.user$;
        this.postForm = this.fb.group({
            title: ["", Validators.required],
            content: ["", Validators.required],
            draft: false,
        });
        this.postForm.setValue({ title: "", content: "", draft: false });
    }

    get title() {
        return this.postForm.get("title");
    }

    get content() {
        return this.postForm.get("content");
    }

    async savePost() {
        try {
            const payload: FormData = {
                title: this.postForm.get("title").value,
                content: this.postForm.get("content").value,
                draft: this.postForm.get("draft").value,
            };
            this.uploadPercent = await this.postService.create(payload, this.imageFile);
            // TODO: give time for progressbar to display animation before reset form
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
