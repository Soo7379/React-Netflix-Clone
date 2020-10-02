import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOQ8EBA6ohFUoaxYSB5tk4bi3-XA8f52k",
  authDomain: "react-netflix-e888a.firebaseapp.com",
  databaseURL: "https://react-netflix-e888a.firebaseio.com",
  projectId: "react-netflix-e888a",
  storageBucket: "react-netflix-e888a.appspot.com",
  messagingSenderId: "784995439033",
  appId: "1:784995439033:web:aefb615d1aa965670a2668",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
