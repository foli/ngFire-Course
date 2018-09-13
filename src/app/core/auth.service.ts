import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Md5 } from 'ts-md5/dist/md5';

// replace interface with user.model
import { User } from '../user/user.model';

@Injectable()
export class AuthService {
  // this is our own User (ie: extra info)
  user: Observable<User>;
  // this is the firebase User Object
  authState: firebase.User;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        this.authState = user;
        console.log('Firebase User Object: ', this.authState);
        if (user) {
          console.log('App User: ', this.user);
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  get authenticated(): boolean {
    // update user ref
    return this.authState !== null;
  }

  get currentUserId(): string {
    // update user ref
    return this.authenticated ? this.authState.uid : null;
  }

  emailSignIn(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => console.log('You have successfully signed in'))
      .catch(error => console.log(error.message));
  }

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.updateUserData(user))
      .then(() => console.log('Welcome, your account has been created!'))
      .then(() => {
        this.afAuth.auth.currentUser
          .sendEmailVerification()
          .then(() => console.log('We sent you an email verification'))
          .catch(error => console.log(error.message));
      })
      .catch(error => console.log(error.message));
  }

  resetPassword(email: string) {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => console.log(`We've sent you a password reset link`))
      .catch(error => console.log(error.message));
  }

  signOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialLogin(provider);
  }

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.socialLogin(provider);
  }
  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialLogin(provider);
  }
  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.socialLogin(provider);
  }

  private socialLogin(provider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => {
        this.updateUserData(credential.user);
      })
      .catch(error => console.log(error.message));
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName,
      photoURL:
        user.photoURL || 'https://www.gravatar.com/avatar/' + Md5.hashStr(user.uid) + '?d=identicon'
    };
    return userRef.set(data, { merge: true });
  }
}
