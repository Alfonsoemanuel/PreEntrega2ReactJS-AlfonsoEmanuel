import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB7ZHL3rS2PXYakA0WWvNl2plEkrV9kJis",
  authDomain: "e-commerce-la-magica.firebaseapp.com",
  projectId: "e-commerce-la-magica",
  storageBucket: "e-commerce-la-magica.appspot.com",
  messagingSenderId: "1093559880323",
  appId: "1:1093559880323:web:de7eb30790bf67f5c669b6"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)