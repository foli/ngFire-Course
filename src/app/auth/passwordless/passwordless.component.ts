import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../auth.service";

@Component({
    selector: "app-passwordless",
    templateUrl: "./passwordless.component.html",
    styleUrls: ["./passwordless.component.css"],
})
export class PasswordlessComponent implements OnInit {
    constructor(private router: Router, public authService: AuthService) {}

    ngOnInit(): void {
        this.verifyLogin();
    }

    private verifyLogin() {
        return this.authService.verifyEmailLogin(this.router.url);
    }
}
