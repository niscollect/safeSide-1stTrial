// import firebase from "firebase/compat/app";
import firebase from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

import { auth } from "./services/firebase.js";
import {
    onAuthStateChanged,
    signOut,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// } from "firebase/auth";


const login= false;

onAuthStateChanged(auth, (user)=>{
    if(user){
        //if user is existing, send a response to the server(app.js) which can verify it there
        login = true;
    }
})

export default login;