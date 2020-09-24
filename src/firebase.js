import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpH6fAghdaHKV10WVgrHa9waHq7yfCCxY",
  authDomain: "whatsapp-e76a2.firebaseapp.com",
  databaseURL: "https://whatsapp-e76a2.firebaseio.com",
  projectId: "whatsapp-e76a2",
  storageBucket: "whatsapp-e76a2.appspot.com",
  messagingSenderId: "976722573863",
  appId: "1:976722573863:web:eb14e0ffc33c91828b6c02",
  measurementId: "G-L89QKGZ494",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
