import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBICur0vknVU9v2fdAxMrdF_N4NsEuiVzY",
  authDomain: "chat-app-2f360.firebaseapp.com",
  projectId: "chat-app-2f360",
  storageBucket: "chat-app-2f360.appspot.com",
  messagingSenderId: "1055790039265",
  appId: "1:1055790039265:web:6205cbd45c145421ceb7a0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);