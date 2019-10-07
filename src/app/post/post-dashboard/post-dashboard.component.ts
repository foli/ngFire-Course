// add ViewChild from ng core
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { AngularFireStorage } from '@angular/fire/storage';

import { AuthService } from '../../core/auth.service';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  // here we can use the ViewChild from angular
  // to check if the input has anything inside hence the 'child'
  // inputField and resetMe is just a variable, you can name it as you like
  @ViewChild('resetMe', { static: true })
  inputField: any;

  postForm: FormGroup;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  imageURL: string;

  constructor(
    private postService: PostService,
    private storage: AngularFireStorage,
    private auth: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.postForm = this.fb.group({
      title: [''],
      content: [''],
      draft: false
    });
  }

  async savePost() {
    const user = await this.auth.authState;
    console.log(user);
    const formData: Post = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      title: this.postForm.get('title').value,
      image: this.imageURL || null,
      content: this.postForm.get('content').value,
      draft: this.postForm.get('draft').value || false,
      published: new Date(),
      trending: 0
    };
    if (!this.postForm.untouched) {
      this.postService.create(formData);
      this.postForm.reset();
      this.imageURL = '';
      // here we set the inputField back to empty
      this.inputField.nativeElement.value = '';
    }
  }

  uploadPostImage(event) {
    const file = event.target.files[0];
    const path = `posts/${file.name}`;

    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files');
    } else {
      const task = this.storage.upload(path, file);

      // add the following lines
      const ref = this.storage.ref(path);
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = ref.getDownloadURL();
          this.downloadURL.subscribe(url => (this.imageURL = url));
          console.log('Image Uploaded!');
        })
      );
    }
  }
}
