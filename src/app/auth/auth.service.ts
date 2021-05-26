import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";

import firebase from "firebase/app";

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { BrowserService } from "../shared/browser.service";

interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
}

@Injectable({
    providedIn: "root",
})
export class AuthService {
    public user$: Observable<User>;

    private windowRef: Window;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router,
        private browserService: BrowserService,
    ) {
        this.windowRef = this.browserService.getBrowserWindow();

        this.user$ = this.afAuth.authState.pipe(
            switchMap((user: firebase.User) => {
                if (user) {
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                }
                return of(null);
            }),
        );
    }

    public async emailSignIn(
        email: string,
        password: string,
    ): Promise<firebase.auth.UserCredential> {
        try {
            const result = await this.afAuth.signInWithEmailAndPassword(email, password);
            if (result) {
                this.router.navigate(["home"]);
                // TODO: use snackBar for login message || toast service
                console.log("You have successfully signed in");
            }
            return result;
        } catch (error) {
            return error;
        }
    }

    public async emailSignUp(
        email: string,
        password: string,
    ): Promise<firebase.auth.UserCredential> {
        try {
            const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
            if (result) {
                await firebase.auth().currentUser.sendEmailVerification();
                // TODO: save user data on firestore
                // TODO: use snackBar for welcome message || toast service
                console.log("We've sent you an email verification link!");
                console.log("Welcome, your account has been created!");
                this.router.navigate(["home"]);
            }
            return result;
        } catch (error) {
            console.log(error.message);
            return error;
        }
    }

    public google(): Promise<firebase.auth.UserCredential> {
        try {
            const result = this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
            if (result) {
                console.log("Welcome!");
                this.router.navigate(["home"]);
            }
            return result;
        } catch (error) {
            console.log(error.message);
            return error;
        }
    }

    public async verifyEmailLogin(url: string): Promise<firebase.auth.UserCredential> {
        try {
            if (this.afAuth.isSignInWithEmailLink(url)) {
                let email = this.windowRef.localStorage.getItem("emailForSignIn");

                if (!email) {
                    email = this.windowRef.prompt("Please confirm your email.");
                }

                const result = await this.afAuth.signInWithEmailLink(email, url);

                if (result) {
                    console.log(result);
                    console.log("Login successful");
                    this.windowRef.localStorage.removeItem("emailForSignIn");
                }

                this.router.navigate(["home"]);
            }
            return null;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    public async sendEmailLink(email: string): Promise<string> {
        try {
            const actionCodeSettings = {
                url: `${environment.baseURL}/auth`,
                handleCodeInApp: true,
            };
            if (email) {
                await this.afAuth.sendSignInLinkToEmail(email, actionCodeSettings);
                this.windowRef.localStorage.setItem("emailForSignIn", email);
                // TODO: use snackBar for login message || toast service
                console.log("Email link sent.");
            }
            return "Email link sent.";
        } catch (error) {
            return error;
        }
    }

    public async resetPassword(email: string): Promise<string> {
        try {
            const actionCodeSettings = {
                url: `${environment.baseURL}/auth/signin`,
                handleCodeInApp: true,
            };
            await firebase.auth().sendPasswordResetEmail(email, actionCodeSettings);
            // TODO: use snackBar for reset message
            console.log("We've sent you a password reset link");
            this.router.navigate(["home"]);
            return "We've sent you a password reset link";
        } catch (error) {
            return error;
        }
    }

    public async signOut(): Promise<string> {
        try {
            await this.afAuth.signOut();
            console.info("signOut");
            this.router.navigate(["home"]);
            return "You have been signed out.";
        } catch (error) {
            console.warn(error.message);
            return error;
        }
    }
}
