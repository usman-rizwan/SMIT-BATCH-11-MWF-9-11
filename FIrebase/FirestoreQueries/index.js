import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore(app);

const product_form = document.getElementById("product_form");
const container = document.getElementById("container");
const category = document.getElementById("category");

category.addEventListener("change", (e) => {
  getRealtimeProducts(e.target.value);
});

product_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    name: e.target[0].value,
    price: +e.target[1].value,
    category: e.target[2].value,
    img: e.target[3].value,
    likes: [],
  };

  console.log(obj);

  const ref = collection(db, "products");
  addDoc(ref, obj).then(() => console.log("product added"));
});

getRealtimeProducts();

function getRealtimeProducts(type) {
  const q = query(collection(db, "products"), type ?  where("category", "==", type) : 
  where("category", "!=", ""));
  const unsub = onSnapshot(q, (snapshot) => {
    const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
    console.log(source, " data: ", snapshot);
    container.innerHTML = "";
    snapshot.forEach((doc) => {
      console.log("doc->", doc.id, doc.data());
      const { img, category, name, price } = doc.data();
      const card = `<div id = ${doc.id} style=" width: 300px; border: 1px solid black">
        <img src = ${img} style="height: 200px; width:300px" />
    
        <span>Product Name : ${name}</span> <br />
        <span>Product Category : ${category}</span> <br />
        <span>Product Price : ${price}</span> <br />
      </div>`;
      container.innerHTML += card;
    });
  });
}
