import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";

import { AuthService } from "../auth.service";

@Component({
    selector: "app-signin",
    templateUrl: "./signin.component.html",
    styleUrls: ["./signin.component.css", "../auth.style.css"],
})
export class SigninComponent {
    signInForm: FormGroup;

    hide = true;

    constructor(
        public fb: FormBuilder,
        public afAuth: AngularFireAuth,
        public authService: AuthService,
    ) {
        this.signInForm = this.fb.group({
            email: [
                "",
                [
                    Validators.required,
                    Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"),
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
        return this.signInForm.get("email");
    }

    get password() {
        return this.signInForm.get("password");
    }

    public google() {
        return this.authService.google();
    }

    public signIn() {
        return this.authService.emailSignIn(this.email.value, this.password.value);
    }

    public sendLink() {
        return this.authService.sendEmailLink(this.email.value);
    }
}
