import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"; // インポートする
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDi-Ql9YcCHwjAwdXzWAVj-IQrSQawdoxw",
  authDomain: "discode-clone-8758f.firebaseapp.com",
  projectId: "discode-clone-8758f",
  storageBucket: "discode-clone-8758f.appspot.com",
  messagingSenderId: "938019391987",
  appId: "1:938019391987:web:b46a25b6c002ab06e5ea86",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // 記述する
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
