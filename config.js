import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBncLD2JpBnmPwqxw4y3qG3Jnga649VTVo",
  authDomain: "midnets.firebaseapp.com",
  projectId: "midnets",
  storageBucket: "midnets.appspot.com",
  messagingSenderId: "624437194499",
  appId: "1:624437194499:web:fa4bc2df19859756c70336",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
