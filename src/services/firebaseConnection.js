import firebase from 'firebase/app';

// Import components of firebase
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig = {
apiKey: "AIzaSyC_2-UsX8F-kvvaAVF1T9ou7ztWy4Rwr8M",
authDomain: "notes-36a79.firebaseapp.com",
projectId: "notes-36a79",
storageBucket: "notes-36a79.appspot.com",
messagingSenderId: "302653146405",
appId: "1:302653146405:web:e6ac924be863db14b086cc",
measurementId: "G-5GN9W0ZT8Z"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
