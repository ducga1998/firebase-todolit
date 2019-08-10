import React from 'react';
import logo from './logo.svg';
import './App.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe4cMlbPBEXnslEZImJmXipWbnk2mfBV4",
  authDomain: "todolit.firebaseapp.com",
  databaseURL: "https://todolit.firebaseio.com",
  projectId: "todolit",
  storageBucket: "todolit.appspot.com",
  messagingSenderId: "606802076189",
  appId: "1:606802076189:web:c21820ced69e4156"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
