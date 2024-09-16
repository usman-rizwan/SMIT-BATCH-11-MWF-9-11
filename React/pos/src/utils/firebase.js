import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCWAVhFv7IwAgMNGrkWC3JTog-MWju_TWE",
  authDomain: "cvbuilder-8c605.firebaseapp.com",
  databaseURL: "https://cvbuilder-8c605.firebaseio.com",
  projectId: "cvbuilder-8c605",
  storageBucket: "cvbuilder-8c605.appspot.com",
  messagingSenderId: "881020178789",
  appId: "1:881020178789:web:df1f693cad61ea14f1118c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
