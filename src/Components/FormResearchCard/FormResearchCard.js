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

  return (
    <div> It it working </div>

  )
}