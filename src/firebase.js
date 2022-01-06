// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUq04z8Lwsmxs98uL6qEW0DTIyAo4AgrU",
  authDomain: "linkedin-clone-a7f98.firebaseapp.com",
  projectId: "linkedin-clone-a7f98",
  storageBucket: "linkedin-clone-a7f98.appspot.com",
  messagingSenderId: "56531731446",
  appId: "1:56531731446:web:2dfcdd468c42348d547dd7",
  measurementId: "G-D7YQ8SJJ77",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
