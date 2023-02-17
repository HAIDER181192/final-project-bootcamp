// Your web app's Firebase configuration
import app from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDh83wlLY4xGO4x-O3koNV_q_V-vKBR370",
    authDomain: "joblisting-9add2.firebaseapp.com",
    projectId: "joblisting-9add2",
    storageBucket: "joblisting-9add2.appspot.com",
    messagingSenderId: "728417346789",
    appId: "1:728417346789:web:77d3fbdd52dcfc6b0c200c"
  };
  // Initialize Firebase
  const firebase = app.initializeApp(firebaseConfig)
  const firestore=firebase.firestore();
  export {firebase,firestore,app};
