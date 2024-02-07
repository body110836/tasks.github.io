// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import {
  getDatabase,
  get,
  set,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoN1Snqk6DdCaKpxmcRsUvPX_53ElL0R8",
  authDomain: "tasks-a86bf.firebaseapp.com",
  projectId: "tasks-a86bf",
  storageBucket: "tasks-a86bf.appspot.com",
  messagingSenderId: "1022751367932",
  appId: "1:1022751367932:web:7a5c93abb903d2a5092d79",
  measurementId: "G-1D9JVD4828",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const dbref = ref(db);
const auth = getAuth(app);

// References///////////////////////////////////////////
let email = document.getElementById("email"); //
let password = document.getElementById("password"); //
let btn = document.getElementById("reg-btn");
////////////////////////////////////////////////////

// Sign Up Function

let signInUser = (evt) => {
  evt.preventDefault();

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((credentials) => {
      get(child(dbref, "For Profile/" + credentials.user.uid)).then(
        (snapshot) => {
          if(snapshot.exists){
            sessionStorage.setItem("name",JSON.stringify({
              name:snapshot.val().name
            }))

          }
          document.location = "home.html"
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.message);
      console.log(error.code);
    });
    
});
}
// Assign btns

btn.addEventListener("click", signInUser);
