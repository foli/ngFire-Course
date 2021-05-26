# ng-fire :metal:

A simple application build with Angular and Firebase for learning purposes.

## Features

-   [x] authentication
    -   [x] email auth
    -   [x] social media logins
    -   [x] passwordless auth
    -   [x] reset password
-   [ ] user management
-   [ ] blogging
-   [ ] comments
-   [ ] photo gallery
-   [ ] private chat
-   [ ] notifications

## Getting started

### Setup Firebase SDK

Create `src/environments/firebase.ts` file and add your firebase config

```ts
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
};
export default firebaseConfig;
```

Add it to `.gitignore`

```bash
echo "src/environments/firebase.ts" >> .gitignore
```

Import it in on the environment

```ts
import firebaseConfig from "./firebase";

export const environment = {
    production: false,
    firebase: firebaseConfig,
    // for development only | link accordingly on prod
    baseURL: "http://localhost:4200",
};
```
