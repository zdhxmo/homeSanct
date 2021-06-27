import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcyyh4P-r7dmkZ-1_OBS5nUhkM_htU79s",
  authDomain: "homesanct-dm.firebaseapp.com",
  projectId: "homesanct-dm",
  storageBucket: "homesanct-dm.appspot.com",
  messagingSenderId: "389351191315",
  appId: "1:389351191315:web:272a2a5dc98dcbe20ca0e6",
  measurementId: "G-86MCS6QL4W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
