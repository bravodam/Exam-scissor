import app from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKf07pvGfxxkqxO2kw_JbwvtJFQgTt4LA",
    authDomain: "my-url-scissor.firebaseapp.com",
    projectId: "my-url-scissor",
    storageBucket: "my-url-scissor.appspot.com",
    messagingSenderId: "1038037204267",
    appId: "1:1038037204267:web:16aa15b16e733e06a4596e",
    measurementId: "G-E77LZS59X5"
  };


app.initializeApp(firebaseConfig);
  export const db = app.firestore();
