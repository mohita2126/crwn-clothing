import firebase from 'firebase/app';
import  'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCynzevkBRZQiCn2CL41rd34Y1d7crkf8A",
    authDomain: "crwn-db-f3457.firebaseapp.com",
    databaseURL: "https://crwn-db-f3457.firebaseio.com",
    projectId: "crwn-db-f3457",
    storageBucket: "crwn-db-f3457.appspot.com",
    messagingSenderId: "520838135065",
    appId: "1:520838135065:web:dff3e5c5ed930b0c861988",
    measurementId: "G-JX7GQKMEBW"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt : 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;