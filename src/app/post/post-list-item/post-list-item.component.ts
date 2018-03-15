import { Component, OnInit, Input } from '@angular/core'

import { Post } from '../post.model'
import { Observable } from 'rxjs/Observable'

import { PostService } from '../post.service'
import { AuthService } from '../../core/auth.service'
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post
  editing = false

  uploadPercent: Observable<number>
  downloadURL: Observable<string>
  imageURL: string

  constructor(
    private postService: PostService,
    public auth: AuthService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {}

  delete(id: string) {
    this.postService.delete(id)
  }

  update() {
    const formData = {
      title: this.post.title,
      image: this.imageURL || this.post.image,
      content: this.post.content,
      draft: this.post.draft
    }
    this.postService.update(this.post.id, formData)
    this.editing = false
  }

  uploadPostImage(event) {
    const file = event.target.files[0]
    const path = `posts/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files')
    } else {
      const task = this.storage.upload(path, file)
      this.downloadURL = task.downloadURL()
      this.uploadPercent = task.percentageChanges()
      console.log('Image Uploaded!')
      this.downloadURL.subscribe(url => (this.imageURL = url))
    }
  }

  trending(value: number) {
    if (this.post.id) {
      this.postService.update(this.post.id, { trending: value + 1 })
    }
  }
}
