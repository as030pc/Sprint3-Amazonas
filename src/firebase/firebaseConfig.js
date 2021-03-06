
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDytakM-1nogZxv95DlRVS2Ksb-LZ8bQM4",
  authDomain: "sprint3-as.firebaseapp.com",
  projectId: "sprint3-as",
  storageBucket: "sprint3-as.appspot.com",
  messagingSenderId: "98076559906",
  appId: "1:98076559906:web:e798ed03e6d8fc7791187b",
  measurementId: "G-VF40F11PKZ"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()
const db = getFirestore()

export {google,  facebook ,app, db}
