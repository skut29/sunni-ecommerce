import firebase from "firebase"
import "firebase/analytics"

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCZFfFde_6LyJVNNTACaB96egrvXFcRcmo",
    authDomain: "sunni-ecommerce.firebaseapp.com",
    databaseURL: "https://sunni-ecommerce-default-rtdb.firebaseio.com",
    projectId: "sunni-ecommerce",
    storageBucket: "sunni-ecommerce.appspot.com",
    messagingSenderId: "743617258354",
    appId: "1:743617258354:web:aee953fca2c0b03a20b3eb",
    measurementId: "G-PQ7LDD3KJW"
  });
  firebase.analytics();

  export default firebaseConfig