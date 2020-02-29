import firebase from "firebase/app";
import "firebase/auth";

const appAuth = firebase.initializeApp({
    apiKey: "AIzaSyCdtN7vR6EW8W43tGNe_OSMKU6eaJbRU94",
    authDomain: "my-first-app-a668e.firebaseapp.com",
    databaseURL: "https://my-first-app-a668e.firebaseio.com",
    projectId: "my-first-app-a668e",
    storageBucket: "my-first-app-a668e.appspot.com",
    messagingSenderId: "202491844631",
    appId: "1:202491844631:web:e030ff635c65122ca3a452"
});

export default appAuth;