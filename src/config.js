import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"
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
    return  await firebase.initializeApp(firebaseConfig);
  })()
  export default  firebase