// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBsS7MpG6--ARrlc5mYbYpm2bWcNYCaQaY",
    authDomain: "foli-sandbox.firebaseapp.com",
    databaseURL: "https://foli-sandbox.firebaseio.com",
    projectId: "foli-sandbox",
    storageBucket: "foli-sandbox.appspot.com",
    messagingSenderId: "58657445594"
  }
};
