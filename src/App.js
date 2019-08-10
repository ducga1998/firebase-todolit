import React from 'react';
import logo from './logo.svg';
import './App.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"
// TODO: Replace the following with your app's Firebase project configuration
 (async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCe4cMlbPBEXnslEZImJmXipWbnk2mfBV4",
    authDomain: "todolit.firebaseapp.com",
    databaseURL: "https://todolit.firebaseio.com",
    projectId: "todolit",
    storageBucket: "todolit.appspot.com",
    messagingSenderId: "606802076189",
    appId: "1:606802076189:web:c21820ced69e4156"
  };
  
  // Initialize Firebase'
  console.log('bo may run ')
  await firebase.initializeApp(firebaseConfig);
})()
class App extends React.Component {
 getDataToFireBase  = async () => {
   console.log('firebase',firebase)
   const database = firebase.database()
   console.log('databae',database)
  // let userId = firebase.auth().currentUser.uid;
  const data = await firebase.database().ref('/todolit/')
  console.log('data',data)
 }

  render(){
   this.getDataToFireBase()
  
    return (
      <div>
        sacasc
      </div>
    );
  }
}

export default App;
