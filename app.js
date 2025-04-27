 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyB8j8GI4VZil-jCczoQyEzf6GUWnIjXKZM",
   authDomain: "web-app-a1440.firebaseapp.com",
   projectId: "web-app-a1440",
   storageBucket: "web-app-a1440.firebasestorage.app",
   messagingSenderId: "509849079384",
   appId: "1:509849079384:web:c64fb5d5bd05e56a32c42d",
   measurementId: "G-NZZJ9DLV0K"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);


 const submit = document.getElementById('btn')
submit.addEventListener("click", function (event) {
  event.preventDefault()

  const Name = document.getElementById('Name').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  alert("successfully")
  window.location.href="login.html"


  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;



      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
  });