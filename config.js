import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBDQftBl6qp4_FoQiJrX_bUbFiAqnZPOxE",
  authDomain: "biblioteca-ff754.firebaseapp.com",
  projectId: "biblioteca-ff754",
  storageBucket: "biblioteca-ff754.appspot.com",
  messagingSenderId: "554029691200",
  appId: "1:554029691200:web:e101e401039512dc534aa5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
