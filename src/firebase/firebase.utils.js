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

export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        }catch(error){
            console.log("error creating user",error.message);
        }
    }
    console.log("8");
    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



