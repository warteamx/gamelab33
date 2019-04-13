import React from 'react'
import firebase from "firebase"

export default function FormResearchCard() {
  
  var config = {
    apiKey: "AIzaSyAsFV6oddVNePcYl-hSuzBf70_ciJw-bfU",
    authDomain: "lab-33.firebaseapp.com",
    databaseURL: "https://lab-33.firebaseio.com",
    storageBucket: "lab-33.appspot.com"
  };
  firebase.initializeApp(config);

  var db = firebase.firestore();

  db.collection("card-research").add({
    description: "Ada",
    link: "Lovelace",
    title: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

  return (
    <div> It it working </div>

  )
}