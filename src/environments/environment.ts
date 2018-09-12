// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBJ2PmC4ofF32MYshOFpdCQ_3K-PPjZOco',
    authDomain: 'fwd-sandbox.firebaseapp.com',
    databaseURL: 'https://fwd-sandbox.firebaseio.com',
    projectId: 'fwd-sandbox',
    storageBucket: 'fwd-sandbox.appspot.com',
    messagingSenderId: '515462969115'
  }
};
