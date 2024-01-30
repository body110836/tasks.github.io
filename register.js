// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import {
  getDatabase,
  get,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
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
const auth = getAuth(app);

// References///////////////////////////////////////////
let email = document.getElementById("email"); //
let password = document.getElementById("password"); //
let name = document.getElementById("name"); //
let job_title = document.getElementById("job"); //
let position = document.getElementById("poss_sel"); //
let gender = document.getElementById("gender_sel"); //
let btn = document.getElementById("reg-btn"); //
////////////////////////////////////////////////////

// Sign Up Function

let RegisterUser = (evt) => {
  evt.preventDefault();

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((credentials) => {
      console.log(credentials);
      alert("Well Done!" + " " + name.value);

      set(ref(db, "The Users/" + `The ${position.value}s/` + name.value), {
        Email: email.value,
        Job_Title: job_title.value,
        Gender: gender.value,
        UID: credentials.user.uid,
        Date_Created: Date.now(),
      })
        .then(() => {
          alert("you are saved");
          set(ref(db, "For Profile/" + credentials.user.uid), {
            name: name.value,
            Job_Title: job_title.value,
            Email: email.value,
            Gender: gender.value,
          })
            .then(() => {
              alert("saved");
            })
            .catch((error) => {
              alert(error);
            });
        })
        .catch((error) => {
          alert(error);
        });

      document.location = "index.html";
    })
    .catch((error) => {
      console.log(error.message);
      alert("error" + error);
      console.log(error.code);
    });
};

// Assign btns

btn.addEventListener("click", RegisterUser);
