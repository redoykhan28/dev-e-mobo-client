// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhs8JolgD0ytEaJ9NXT62yQzDi_GjqIvU",
    authDomain: "e-mobo.firebaseapp.com",
    projectId: "e-mobo",
    storageBucket: "e-mobo.appspot.com",
    messagingSenderId: "773360602975",
    appId: "1:773360602975:web:20819226c8f86748ecb0ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;