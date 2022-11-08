// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'plc-plan',
    appId: '1:557619893305:web:9d7046eb5a97e6f96d69e8',
    databaseURL: 'https://plc-plan-default-rtdb.firebaseio.com',
    storageBucket: 'plc-plan.appspot.com',
    apiKey: 'AIzaSyDS6LH9fIf5S5n9zGL5BDo5sqtQAfwqWqU',
    authDomain: 'plc-plan.firebaseapp.com',
    messagingSenderId: '557619893305',
    measurementId: 'G-J6WMZ10H7P',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.