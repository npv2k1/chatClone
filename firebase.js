import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXwLi5uyhr2Ep70pTwkEc_XU-t8RUXIA4",
  authDomain: "chat-2a4dd.firebaseapp.com",
  projectId: "chat-2a4dd",
  storageBucket: "chat-2a4dd.appspot.com",
  messagingSenderId: "582688715794",
  appId: "1:582688715794:web:65d59a09418882755494cb",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
