# ng-fire :metal:

This repo contains the exercise files for the Udemy course: 
Build Angular 5 apps with Firebase and Angular Material 
https://goo.gl/8HZJLm


## how to use the exercise files

to list all branches use:
```
git branch -a
```

to navigate into the lecture use:
```
git checkout name-of-the-branch
```

## how to use it

1. Add your firebase keys to environments
```
export const environment = {
  production: false,
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  }
};
```

2. remove git remotes (original git repo) then add yours
```
git remote rm origin
```

3. install dependencies
```
yarn install
// or
npm install
```

4. Check it out in the browser
```
ng serve -aot --open
```

## What is included in the boilerplate

* Authentication
- [x] SignIn
- [x] SignUp
- [x] Reset Password
- [x] Oauth

* User Module
- [x] Dashboard (View/Edit profile) `private`
- [x] User List `public`
- [x] User Detail `public`

* Blog Module
- [x] Dashboard (View/Edit profile) `private`
- [x] Blog List `public`
- [x] Blog Detail `public`

* Image Gallery
- [x] Gallery Uploader `private`
- [x] Gallery List `public`
- [x] Gallery Detail `public`

* Chat Module
- [x] Button (Initiate conversation) `public`
- [x] Thread List `private`
- [x] Thread Detail `private`
