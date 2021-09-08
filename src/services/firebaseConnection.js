import firebase from 'firebase/app';

// Import components of firebase
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDySPhbGgaZaVS9VlKFRPmtk0V7UQml6IA",
    authDomain: "note-a7b68.firebaseapp.com",
    projectId: "note-a7b68",
    storageBucket: "note-a7b68.appspot.com",
    messagingSenderId: "883758163513",
    appId: "1:883758163513:web:080663f50ede29a2464fe8",
    measurementId: "G-1D810BCG2T"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
