import { Injectable, Optional } from "@angular/core";
import { Router } from "@angular/router";

// import firebase from "firebase/app";
import {
    Auth,
    authState,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    isSignInWithEmailLink,
    sendEmailVerification,
    sendPasswordResetEmail,
    sendSignInLinkToEmail,
    signInWithEmailAndPassword,
    signInWithEmailLink,
    signInWithPopup,
    signOut,
    UserCredential,
} from "@angular/fire/auth";
import { doc, docData, Firestore } from "@angular/fire/firestore";

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { environment } from "../../environments/environment";

import { BrowserService } from "../shared/browser.service";

import { User } from "../users/user.model";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    public user$: Observable<User>;

    private windowRef: Window;

    constructor(
        @Optional() private auth: Auth,
        private firestore: Firestore,
        private router: Router,
        private browserService: BrowserService,
    ) {
        this.windowRef = this.browserService.getBrowserWindow();
        if (auth) {
            this.user$ = authState(this.auth).pipe(
                switchMap((user: any) => {
                    if (user) {
                        const ref = doc(firestore, `users/${user.uid}`);
                        return docData(ref);
                    }
                    return of(null);
                }),
            );
        }
    }

    async signInWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
        try {
            const result = await signInWithEmailAndPassword(this.auth, email, password);
            console.log(result);
            if (result) {
                this.router.navigate(["home"]);
                // TODO: use snackBar for login message || toast service
                console.log("You have successfully signed in");
            }
            return result;
        } catch (error) {
            console.log(error.message);
            return error;
        }
    }

    async createUserWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
        try {
            const result = await createUserWithEmailAndPassword(this.auth, email, password);
            if (result) {
                await sendEmailVerification(result.user);
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

    async signInWithGoogle() {
        try {
            const result = await signInWithPopup(this.auth, new GoogleAuthProvider());
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

    async signInWithEmailLink(url: string): Promise<UserCredential> {
        try {
            let email = this.windowRef.localStorage.getItem("emailForSignIn");

            if (!email) {
                // TODO: don't use prompt
                email = this.windowRef.prompt("Please confirm your email.");
            }

            if (isSignInWithEmailLink(this.auth, url)) {
                const result = await signInWithEmailLink(this.auth, email, url);
                if (result) {
                    console.log(result);
                    console.log("Login successful");
                    this.windowRef.localStorage.removeItem("emailForSignIn");
                }

                this.router.navigate(["home"]);
                return result;
            }
            return null;
        } catch (error) {
            console.log(error.message);
            return error;
        }
    }

    async sendSignInLinkToEmail(email: string): Promise<void> {
        try {
            const actionCodeSettings = {
                url: `${environment.baseURL}/auth`,
                handleCodeInApp: true,
            };
            if (email) {
                await sendSignInLinkToEmail(this.auth, email, actionCodeSettings);
                // TODO: use snackBar for login message || toast service
                console.log("Email link sent.");
            }
            return null;
        } catch (error) {
            console.log(error.message);
            return error;
        }
    }

    async sendPasswordResetEmail(email: string) {
        try {
            const actionCodeSettings = {
                url: `${environment.baseURL}/auth/signin`,
                handleCodeInApp: true,
            };
            await sendPasswordResetEmail(this.auth, email, actionCodeSettings);
            // TODO: use snackBar for reset message
            console.log("We've sent you a password reset link");
            this.router.navigate(["home"]);
            return "We've sent you a password reset link";
        } catch (error) {
            console.log(error.message);
            return error;
        }
    }

    async signOut(): Promise<void> {
        try {
            await signOut(this.auth);
            console.info("signOut");
            // TODO: let user know sign out was completed.
            this.router.navigate(["home"]);
            return null;
        } catch (error) {
            console.warn(error.message);
            return error;
        }
    }
}
