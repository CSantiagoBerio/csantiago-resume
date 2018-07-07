// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyALBfap5oEVfw2PPHntkJQjSv_XBOEigXc',
    authDomain: 'resume-visitors.firebaseapp.com',
    databaseURL: 'https://resume-visitors.firebaseio.com',
    projectId: 'resume-visitors',
    storageBucket: 'resume-visitors.appspot.com',
    messagingSenderId: '753474113508'
  }
  // firebase.initializeApp(config);
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
