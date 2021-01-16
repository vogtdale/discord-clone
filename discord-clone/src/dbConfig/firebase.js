import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlgcea5M4wIyqV28WnHcwOIbKQT5eoyV0",
  authDomain: "discord-clone-d5bc0.firebaseapp.com",
  projectId: "discord-clone-d5bc0",
  storageBucket: "discord-clone-d5bc0.appspot.com",
  messagingSenderId: "126250684537",
  appId: "1:126250684537:web:89c59f1b7139b2b6cd84a8",
  measurementId: "G-6G9QBEMFWM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
