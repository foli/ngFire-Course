import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AuthService } from "../auth.service";

@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.css", "../auth.style.css"],
})
export class SignupComponent {
    signUpForm: FormGroup;

    hide = true;

    constructor(public fb: FormBuilder, public authService: AuthService) {
        this.signUpForm = this.fb.group({
            email: [
                "",
                [
                    Validators.required,
                    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
                ],
            ],
            password: [
                "",
                [
                    Validators.required,
                    Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$"),
                    Validators.minLength(6),
                ],
            ],
        });
    }

    get email() {
        return this.signUpForm.get("email");
    }

    get password() {
        return this.signUpForm.get("password");
    }

    public google() {
        return this.authService.google();
    }

    public signUp() {
        return this.authService.emailSignUp(this.email.value, this.password.value);
    }

    public sendLink() {
        return this.authService.sendEmailLink(this.email.value);
    }
}
