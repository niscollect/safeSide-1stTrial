// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBMaSahaGoPlBfle1j9NcmduytyuVMQk4E",
    authDomain: "safeside-pre.firebaseapp.com",
    projectId: "safeside-pre",
    storageBucket: "safeside-pre.firebasestorage.app",
    messagingSenderId: "674744021415",
    appId: "1:674744021415:web:5e77ba1887c4a826be0682"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);




// //Global auth for my scripts
// window.firebaseAuth = auth;
// window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
// window.signInWithEmailAndPassword = signInWithEmailAndPassword;
// window.onAuthStateChanged = onAuthStateChanged;
// window.signOut = signOut;
