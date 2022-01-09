import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAhiVTuH3dNYItZoliXWTrli0O0HSUgdcA",
    authDomain: "crawn-cloth-38f17.firebaseapp.com",
    projectId: "crawn-cloth-38f17",
    storageBucket: "crawn-cloth-38f17.appspot.com",
    messagingSenderId: "571933329125",
    appId: "1:571933329125:web:aab96028d3897244c5760c",
    measurementId: "G-QJ1KY5RH14"
};
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore=firebase.firestore()

const provider=new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
