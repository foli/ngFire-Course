import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { UserService } from "../user.service";

import { User } from "../user.model";

@Component({
    selector: "app-user-list",
    templateUrl: "./user-list.component.html",
    styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
    users: Observable<User[]>;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.users = this.userService.getUsers();
    }
}
