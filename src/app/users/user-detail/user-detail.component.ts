import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

import { UserService } from "../user.service";

import { User } from "../user.model";

@Component({
    selector: "app-user-detail",
    templateUrl: "./user-detail.component.html",
    styleUrls: ["./user-detail.component.css"],
})
export class UserDetailComponent implements OnInit {
    user$: Observable<User>;

    constructor(private route: ActivatedRoute, private userService: UserService) {}

    ngOnInit(): void {
        this.getUser();
    }

    getUser(): void {
        const uid = this.route.snapshot.paramMap.get("id");
        this.user$ = this.userService.getUser(uid);
    }
}
