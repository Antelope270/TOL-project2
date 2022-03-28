/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyAl4Bt2JHo8fsLlAPA1QMaqO8IbyDuOaU4",
  authDomain: "friendlychat-a88f3.firebaseapp.com",
  projectId: "friendlychat-a88f3",
  storageBucket: "friendlychat-a88f3.appspot.com",
  messagingSenderId: "604781333985",
  appId: "1:604781333985:web:777f8a3375cf092d44d6a0",
  measurementId: "G-62CZH5F3QF"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}