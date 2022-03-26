// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseError } from "firebase/app";

export const environment = {
  production: false,
  firebase:{

      apiKey: "AIzaSyDhnTLPS0nTmZE_A_awXPe-auWXKFB30vU",
      authDomain: "prayas-test-b4ffb.firebaseapp.com",
      projectId: "prayas-test-b4ffb",
      storageBucket: "prayas-test-b4ffb.appspot.com",
      messagingSenderId: "711882854817",
      appId: "1:711882854817:web:f58a08a519d7a2ca69fbe0"
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
