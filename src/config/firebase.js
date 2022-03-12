import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/auth'
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBGCP4JD-mPI8RaBBioqVjh1TzuiKu3EKk",
    authDomain: "conneqion.firebaseapp.com",
    projectId: "conneqion",
    storageBucket: "conneqion.appspot.com",
    messagingSenderId: "663679860058",
    appId: "1:663679860058:web:7245ac36829937a81dc763",
    measurementId: "G-BVNYR21ENQ"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;