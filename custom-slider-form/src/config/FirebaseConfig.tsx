import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const API_KEY = import.meta.env.VITE_API_KEY
// console.log(API_KEY)

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "dream-and-conscience.firebaseapp.com",
    projectId: "dream-and-conscience",
    storageBucket: "dream-and-conscience.appspot.com",
    messagingSenderId: "637527635705",
    appId: "1:637527635705:web:d589b3dcb3dcb0b9681428",
    measurementId: "G-6M6QNH28X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);