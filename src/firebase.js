import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKRpH2ayJABWp8sesEYrnOm8nUU2bxxwQ",
  authDomain: "disney-wish.firebaseapp.com",
  projectId: "disney-wish",
  storageBucket: "disney-wish.appspot.com",
  messagingSenderId: "443924151478",
  appId: "1:443924151478:web:10004eda358950a4d0ba17",
  measurementId: "G-NLF6FYBZH3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;