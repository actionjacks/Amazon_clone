import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBke00XkRwCYJEzCHrTc2bQxB6sohubcyM",
  authDomain: "clone-9a468.firebaseapp.com",
  databaseURL: "https://clone-9a468.firebaseio.com",
  projectId: "clone-9a468",
  storageBucket: "clone-9a468.appspot.com",
  messagingSenderId: "619291328969",
  appId: "1:619291328969:web:fc0bc8d8dff43e8c0ee818",
  measurementId: "G-Q2TDB91XVH",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
//------------------------------firebase
// npm i firebase



// const firebaseConfig = {
//   apiKey: "AIzaSyBke00XkRwCYJEzCHrTc2bQxB6sohubcyM",
//   authDomain: "clone-9a468.firebaseapp.com",
//   databaseURL: "https://clone-9a468.firebaseio.com",
//   projectId: "clone-9a468",
//   storageBucket: "clone-9a468.appspot.com",
//   messagingSenderId: "619291328969",
//   appId: "1:619291328969:web:fc0bc8d8dff43e8c0ee818",
//   measurementId: "G-Q2TDB91XVH",
// };
