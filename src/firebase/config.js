// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDKF4DqXzmiszP6zJ75JmXPeVgIN7MpVVo",
  authDomain: "firegram-8f96b.firebaseapp.com",
  projectId: "firegram-8f96b",
  storageBucket: "firegram-8f96b.appspot.com",
  messagingSenderId: "1081578676459",
  appId: "1:1081578676459:web:9cf3c17cd3c2b05fdc5eae",
  measurementId: "G-9SGSB2NJVZ",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const ProjectStorage = firebase.storage(app);
const projectFireStore = firebase.firestore(app);

export { ProjectStorage, projectFireStore };
