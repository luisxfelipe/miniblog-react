import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAe1vLwv9H8b6aKJIf9k2Qqz7PkxkUHm6M",
  authDomain: "miniblog-35e25.firebaseapp.com",
  projectId: "miniblog-35e25",
  storageBucket: "miniblog-35e25.appspot.com",
  messagingSenderId: "917905218959",
  appId: "1:917905218959:web:a76b26fc83dea46a80bffa"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };