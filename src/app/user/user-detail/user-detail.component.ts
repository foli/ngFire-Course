import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.model';
import { ThreadService } from '../../chat/thread.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private threadService: ThreadService
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => (this.user = user));
  }

  chat() {
    const profileId = this.route.snapshot.paramMap.get('id');
    return this.threadService
      .createThread(profileId)
      .then(() => console.log('Thread created!'))
      .catch(error => console.log(error));
  }
}
