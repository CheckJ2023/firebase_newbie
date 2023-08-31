

//console.log('hello from index.js')

//For firebase 8: import core part of firebase library 
//import firebase from 'firebase/app';

//For firebase 9: import core part of firebase library 
 import { initializeApp } from 'firebase/app'

//config object firebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyA_IFmRBnnUgElLMZAWXxcplNkoeTf3azo",
  authDomain: "fir-9-dojo-48e97.firebaseapp.com",
  projectId: "fir-9-dojo-48e97",
  storageBucket: "fir-9-dojo-48e97.appspot.com",
  messagingSenderId: "47072493462",
  appId: "1:47072493462:web:5edb41fc7af225fe7be7b7"
};

//For firebase 8:
//firebase.initializeApp(firebaseConfig)

//For firebase 9:
initializeApp(firebaseConfig)
