# ng-fire :metal:

A simple application build with Angular and Firebase for learning purposes.

## Features

-   [x] authentication
    -   [x] email auth
    -   [x] social media logins
    -   [x] passwordless auth
    -   [x] reset password
    -   [ ] link providers
    -   [ ] annonymous accounts
-   [ ] user management
    -   [x] user list
    -   [x] user detail
    -   [ ] user settings (WIP)
        -   [x] update email
        -   [x] update profile (displayName, photoURL)
        -   [x] update Firestore data
        -   [ ] user roles
-   [ ] blogging
-   [ ] comments
-   [ ] photo gallery
-   [ ] private chat
-   [ ] notifications

## Getting started

### Setup Firebase SDK

Create `src/environments/firebase.ts` file and add your firebase config

```ts
const firebase = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
};
export default firebase;
```

Add it to `.gitignore`

```bash
echo "src/environments/firebase.ts" >> .gitignore
```

Import it in on the environment

```ts
import firebase from "./firebase";

export const environment = {
    production: false,
    firebase,
    // for development only | link accordingly on prod
    baseURL: "http://localhost:4200",
};
```

Change `.firebaserc` project name
