import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyD9KmAN-UBv-knSTP4EQIFOfLO4xU-YZSk",
    authDomain: "crown-db-nick.firebaseapp.com",
    databaseURL: "https://crown-db-nick.firebaseio.com",
    projectId: "crown-db-nick",
    storageBucket: "crown-db-nick.appspot.com",
    messagingSenderId: "679850721447",
    appId: "1:679850721447:web:a3cb425a849a547e5e9b82"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle= ()=> auth.signInWithPopup(provider)

  export default firebase

