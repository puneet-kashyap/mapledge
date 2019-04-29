import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import auth from '../redux/actions/auth.actions';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);
// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    auth.signIn(user);
  } else {
    auth.signOut();
  }
});

export const authRef = firebase.auth();
