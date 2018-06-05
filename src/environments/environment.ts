// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAQi7GrU7nYlAbpn5dtsHTCKHn8FvWgq4Y',
    authDomain: 'configr-it.firebaseapp.com',
    databaseURL: 'https://configr-it.firebaseio.com',
    projectId: 'configr-it',
    storageBucket: 'configr-it.appspot.com',
    messagingSenderId: '687811823635'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
