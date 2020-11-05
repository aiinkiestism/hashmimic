// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebase: {
      apiKey: "AIzaSyC--O2OVFJCYDrjkyy4nqTOzNrpgkOTnco",
      authDomain: "hashmimic-4f222.firebaseapp.com",
      databaseURL: "https://hashmimic-4f222.firebaseio.com",
      projectId: "hashmimic-4f222",
      storageBucket: "hashmimic-4f222.appspot.com",
      messagingSenderId: "775388395988",
      appId: "1:775388395988:web:02e4c97666dbe86a8bfe41",
      measurementId: "G-XZP1H6F96P"
    },
    contentful: {
      spaceId: 'nogihygq5a57',
      token: 'zbzKr4-9g_4TsP1yTkSX69_XW5M1VMrbIRyAqqZQqjc'
    }
};

/*
* For easier debugging in development mode, you can import the following file
* to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
*
* This import should be commented out in production mode because it will have a negative impact
* on performance if an error is thrown.
*/
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.