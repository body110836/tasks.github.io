// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import {
  getAuth,
  signOut,
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
const auth = getAuth(app);

let greeting = document.getElementById("greeting");
let msg = document.getElementById("msg");

let userCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let userInfo = JSON.parse(sessionStorage.getItem("user-info"));

let sign = document.getElementById("sign-out-btn");
let mainform = document.getElementById("MainForm");

//  msg.innerText = `user with name ${userInfo.name}`

let SignOut = () => {
  sessionStorage.removeItem("user-creds");
  sessionStorage.removeItem("user-info");
  document.location = "/html/sign_in.html";
};

// let CheckCred = ()=>{
//     if(!sessionStorage.getItem("user-creds"))
//     document.location = "sign_in.html"
// }

// window.addEventListener('load',CheckCred)
sign.addEventListener("click", SignOut);
