import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAsFV6oddVNePcYl-hSuzBf70_ciJw-bfU",
    projectId: "lab-33",
    authDomain: "lab-33.firebaseapp.com",
    databaseURL: "https://lab-33.firebaseio.com",
    storageBucket: "lab-33.appspot.com",
    messagingSenderId: "1035791625247"
  };


  // Firestore

 firebase.initializeApp(config);

 export var fire = firebase.firestore();
 export var fireAuth = firebase;
 export var firebaseApp = firebase;

 



;
