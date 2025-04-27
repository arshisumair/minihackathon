//login
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDTaoeGBlrsCzteOoeS-97PDZRRSf-Rz0Y",
  authDomain: "signup-844da.firebaseapp.com",
  projectId: "signup-844da",
  storageBucket: "signup-844da.firebasestorage.app",
  messagingSenderId: "935405939422",
  appId: "1:935405939422:web:9d40c2abdf20de5badf04f",
  measurementId: "G-SQFJYGQW1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const submit = document.getElementById('btn')
submit.addEventListener("click", function (event) {
  event.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const auth = getAuth(); // Initialize Firebase Auth outside
 signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // alert("login successfully")
        window.location.href="success.html"     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage =error.message;
alert(errorMessage)  ; 
   });
  });  