import firebase from 'firebase/app';

// Import components of firebase
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyBv7KnCwEoJHmUuA9Ik-PxSozHutQUPcGg",
    authDomain: "notes-769a5.firebaseapp.com",
    projectId: "notes-769a5",
    storageBucket: "notes-769a5.appspot.com",
    messagingSenderId: "483074483793",
    appId: "1:483074483793:web:f10f16bbfb21e94d48ba70",
    measurementId: "G-BCZNBC10GH"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
