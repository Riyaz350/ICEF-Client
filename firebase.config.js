// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaQh22pORvxGPN1aCg_jarjlq5Q6gRhHA",
  authDomain: "icef-a93e5.firebaseapp.com",
  projectId: "icef-a93e5",
  storageBucket: "icef-a93e5.appspot.com",
  messagingSenderId: "332926093213",
  appId: "1:332926093213:web:000cc8228ee798d0f29174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
