 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDp-uDlcdd1zGY52A7XFnCGM77_wNtzJ6I",
    authDomain: "gallery-ef78b.firebaseapp.com",
    projectId: "gallery-ef78b",
    storageBucket: "gallery-ef78b.appspot.com",
    messagingSenderId: "540588196285",
    appId: "1:540588196285:web:c8bd28d208c09d7a4392d4",
    measurementId: "G-DRSKG0FWNY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();
 const projecStorage = firebase.storage();
 const projectFireStore = firebase.firestore();

 export { projectStorage, projectFirestore };