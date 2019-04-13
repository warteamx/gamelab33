import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAsFV6oddVNePcYl-hSuzBf70_ciJw-bfU",
    projectId: "lab-33",
    authDomain: "lab-33.firebaseapp.com",
    databaseURL: "https://lab-33.firebaseio.com",
    storageBucket: "lab-33.appspot.com"
  };

 firebase.initializeApp(config);
 var fire = firebase.firestore()

export default fire;
