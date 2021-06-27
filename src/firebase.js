import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkHCnl1Y-UvWszyesrsEynYiG9osrKDes",
  authDomain: "nozama-clone.firebaseapp.com",
  projectId: "nozama-clone",
  storageBucket: "nozama-clone.appspot.com",
  messagingSenderId: "436754823592",
  appId: "1:436754823592:web:d0e080a987ff6a6a42859d",
  measurementId: "G-D79N68MJZH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }