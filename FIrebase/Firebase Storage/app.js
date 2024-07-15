import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAr2R1sryYvVbSNdplyeKYrIHHZ6D0uZyc",
  authDomain: "calcium-pod-256305.firebaseapp.com",
  projectId: "calcium-pod-256305",
  storageBucket: "calcium-pod-256305.appspot.com",
  messagingSenderId: "182256618793",
  appId: "1:182256618793:web:c3c627824b1c28feea3b38",
  measurementId: "G-3R2S7KYERZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
getRecipes();
const recipes_form = document.getElementById("recipes_form");

recipes_form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);

  const recipeObj = {
    img: e.target[0].files[0],
    title: e.target[1].value,
    desc: e.target[2].value,
  };
  console.log(e);
  /// Upload file
  const reference = ref(storage, recipeObj.img.name);
  e.target[3].disabled = true;
  // upload file to storage
  uploadBytes(reference, recipeObj.img)
    .then(() => {
      console.log("File Upload Hogye");

      getDownloadURL(reference).then((url) => {
        console.log("url=>", url);
        recipeObj.img = url;
        // create collection
        const recipeCollection = collection(db, "recipes");
        addDoc(recipeCollection, recipeObj).then(() => {
          console.log("Document Uploaded Successfully");
          e.target[3].disabled = false;
          getRecipes()
          e.reset()
        });
      });
    })
    .catch((err) => console.log(err));
});

async function getRecipes() {
  const querySnapshot = await getDocs(collection(db, "recipes"));
  recipes_container.innerHTML = "";
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);

    const recipe = doc.data();

    const card = `  <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg h-64 w-full d-block"
            src="${recipe.img}"
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
            ${recipe.title}
            </h5>
          </a>
          <p class="mb-3 h-32 overflow-hidden font-normal text-gray-700 dark:text-gray-400">
          ${recipe.desc}
          </p>
        
        </div>
      </div>`;

    recipes_container.innerHTML += card;
  });
}
