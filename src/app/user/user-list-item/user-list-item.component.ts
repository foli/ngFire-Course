import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user.model';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  @Input() user: User

  constructor() { }

  ngOnInit() {
  }

}
