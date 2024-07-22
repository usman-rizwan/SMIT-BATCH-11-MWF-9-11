import {
  app,
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "./firebase.js";
const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const signup_btn = document.getElementById("signup_btn");

const signin_email = document.getElementById("signin_email");
const signin_password = document.getElementById("signin_password");
const signin_btn = document.getElementById("signin_btn");

const user_email = document.getElementById("user_email");
const logout_btn = document.getElementById("logout_btn");

const auth_container = document.getElementById("auth_container");
const user_container = document.getElementById("user_container");

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

signup_btn.addEventListener("click", createUserAccount);
signin_btn.addEventListener("click", signIn);
logout_btn.addEventListener("click", logout);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is logged in==>");
    const uid = user.uid;
    auth_container.style.display = "none";
    user_container.style.display = "block";
    user_email.innerText = user.email;
  } else {
    console.log("user is not logged in==>");
    auth_container.style.display = "block";
    user_container.style.display = "none";
  }
});

function validateSignup() {

}

function createUserAccount() {
  //   console.log("email=>", signup_email.value);
  //   console.log("password=>", signup_password.value);

  if (
    !signup_email.value.trim().match(emailRegex) ||
    signup_password.value.length < 6
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Credentials is not valid",
     
    });
    console.log("Credentials is not valid");
    return;
  }
  createUserWithEmailAndPassword(
    auth,
    signup_email.value,
    signup_password.value
  )
    .then((userCredential) => {
      const user = userCredential.user;
      Swal.fire({
        icon: "success",
        title: "Goood ho gaya...",
        text: "User register succeessfully",
       
      });
      console.log("User=>", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
}

function signIn() {
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function logout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

// function sum(a,b){
//   console.log("app.js " , a+b);
// }
// myFunction(8,2)
// multiply(4,4)
// sum(4,4)
