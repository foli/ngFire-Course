import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { UserService } from "../user.service";
import { User } from "../user.model";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getUser()
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.userService.getUser(id).subscribe(user => this.user = user)
  }

}
