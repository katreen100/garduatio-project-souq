import firebase from 'firebase';
import 'firebase/firestore';

const Config = {
    apiKey: "AIzaSyChjdJkToFESdr0paKRt2wUkKVwHJiQc4Y",
    authDomain: "ecommerce-clone-site.firebaseapp.com",
    projectId: "ecommerce-clone-site",
    storageBucket: "ecommerce-clone-site.appspot.com",
    messagingSenderId: "539446440742",
    appId: "1:539446440742:web:e59ae9d8f0661afcc647e7"
};

// Initialize Firebase
firebase.initializeApp(Config);
const db = firebase.firestore();

export default db;