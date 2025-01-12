// import { auth } from "./services/firebase.js";
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut,
//     sendEmailVerification,
// // } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// } from "firebase/auth";



// const loginEmail = document.getElementById("loginEmail");
// const loginPassword = document.getElementById("loginPassword");
// const loginError = document.getElementById("loginError");
// const loginButton = document.getElementById("loginButton")

// //Login User
// console.log("=>", loginEmail)
// console.log("=>", loginPassword)
// console.log("=>", loginButton)

// loginButton.addEventListener('click', async (e)=>{
//     e.preventDefault();
//     try {
    

//         const created  = await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value);
//         console.log("Logged in: ", created);
//         window.location.href = "https://www.google.com";
        
//         if(!created.user.emailVerified)
//         {
//             signOut(auth);
//             console.log("Your email is not verified");
//             throw new Error("Email is not verified.Please verify your email");
//         }

//     } catch (error) {
//         loginError.textContent = error.message;
//     }
// });

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginError = document.getElementById("loginError");
const loginButton = document.getElementById("loginButton");

//Login User
console.log("=>", loginEmail);
console.log("=>", loginPassword);
console.log("=>", loginButton);

loginButton.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const created = await window.signInWithEmailAndPassword(
            window.auth, 
            loginEmail.value, 
            loginPassword.value
        );
        console.log("Logged in: ", created);
        
        if(!created.user.emailVerified) {
            await window.signOut(window.auth);
            console.log("Your email is not verified");
            throw new Error("Email is not verified. Please verify your email");
        } else {
            window.location.href = "https://www.google.com";
        }

    } catch (error) {
        loginError.textContent = error.message;
    }
});