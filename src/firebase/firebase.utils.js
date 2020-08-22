import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config ={
    apiKey: "AIzaSyCr3KdJ48V3cRMCFUwl1SyPSph3TRi4lPI",
    authDomain: "crwn-project-25b3a.firebaseapp.com",
    databaseURL: "https://crwn-project-25b3a.firebaseio.com",
    projectId: "crwn-project-25b3a",
    storageBucket: "crwn-project-25b3a.appspot.com",
    messagingSenderId: "405873445452",
    appId: "1:405873445452:web:1ffdcfa0e4043bad5dc2e9",
    measurementId: "G-6YY3Z2R1N5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



