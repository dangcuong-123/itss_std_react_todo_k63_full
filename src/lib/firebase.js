import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJv1cnmggBf7L4aybP2hZ3fq0imA9HsDs",
  authDomain: "itss-9794b.firebaseapp.com",
  projectId: "itss-9794b",
  storageBucket: "itss-9794b.appspot.com",
  messagingSenderId: "318169148154",
  appId: "1:318169148154:web:db7e3718ec80b97a763743",
  measurementId: "G-X2EEPRCK63"
};

firebase.initializeApp(firebaseConfig);