import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAr2R1sryYvVbSNdplyeKYrIHHZ6D0uZyc",
  authDomain: "calcium-pod-256305.firebaseapp.com",
  projectId: "calcium-pod-256305",
  storageBucket: "calcium-pod-256305.appspot.com",
  messagingSenderId: "182256618793",
  appId: "1:182256618793:web:c3c627824b1c28feea3b38",
  measurementId: "G-3R2S7KYERZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const numbers_list = document.getElementById("numbers_list");
const add_number = document.getElementById("add_number");
//collection -> collection ke reference ke lye
//addDoc -> document ko collection mein add krne ke lye

const numberCollection = collection(db, "number");

getNumbersFromDb();

add_number.addEventListener("click", async () => {
  const number = Math.round(Math.random() * 10000);
  console.log(number);
  try {
    add_number.disabled = true;
    const docRef = await addDoc(numberCollection, {
      number,
    });
    add_number.disabled = false;
    getNumbersFromDb();
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    add_number.disabled = false;
    console.error("Error adding document: ", e);
  }
});

async function getNumbersFromDb() {
  const querySnapshot = await getDocs(numberCollection);
  numbers_list.innerHTML = "";
  querySnapshot.forEach((doc) => {
    var obj = doc.data();
    const li = `<li id= ${doc.id}> <b>${obj.number}</b>  <button> Edit </button> <button> Delete </button>  </li>`;
    numbers_list.innerHTML += li;
  });

  numbers_list.childNodes.forEach((node) => {
    node.children[1].addEventListener("click", async function () {
      const docRef = doc(db, "number", this.parentNode.id);
      const newNumber = prompt("New Number");

      await updateDoc(docRef, {
        number: newNumber,
      });
      console.log("Document update hogya he");
      getNumbersFromDb();
    });

    node.children[2].addEventListener("click", async function () {
      const docRef = doc(db, "number", this.parentNode.id);
      await deleteDoc(docRef);
      console.log("Doc deleted");
      getNumbersFromDb();
    });
  });
}
