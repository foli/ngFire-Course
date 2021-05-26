import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../auth.service";

@Component({
    selector: "app-reset-password",
    templateUrl: "./reset-password.component.html",
    styleUrls: ["./reset-password.component.css", "../auth.style.css"],
})
export class ResetPasswordComponent {
    email: FormControl;

    constructor(private authService: AuthService, private router: Router) {
        this.email = new FormControl("", [
            Validators.required,
            Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"),
        ]);
    }

    public resetPassword() {
        try {
            return this.authService.resetPassword(this.email.value);
        } catch (error) {
            console.log(error.message);
            return error;
        }
    }
}
