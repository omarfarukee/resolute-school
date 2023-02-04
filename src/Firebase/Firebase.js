// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-wSIPGYa1KjwI4QZIWTnnN6GSqSWBBtg",
  authDomain: "resolute-school.firebaseapp.com",
  projectId: "resolute-school",
  storageBucket: "resolute-school.appspot.com",
  messagingSenderId: "774713538141",
  appId: "1:774713538141:web:7fd750ee6da2da93f47fb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export default app;