import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZQ34SzKLItSuFm1MmA_MmajRlpJi8gis",
  authDomain: "gymm-80cf2.firebaseapp.com",
  databaseURL: "https://gymm-80cf2-default-rtdb.firebaseio.com",
  projectId: "gymm-80cf2",
  storageBucket: "gymm-80cf2.appspot.com",
  messagingSenderId: "109182274740",
  appId: "1:109182274740:web:ff5016350ef87c9babdbe1",
  measurementId: "G-1Q5TT8JRWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)

export {auth, app};