// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const ProjectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { ProjectStorage, projectFireStore, timeStamp };
