// // import { auth } from "./services/firebase.js";
// // import {
// //     createUserWithEmailAndPassword,
// //     signInWithEmailAndPassword,
// //     onAuthStateChanged,
// //     signOut,
// //     sendEmailVerification,
// // // } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// // } from "firebase/auth";

// // const registerEmail = document.getElementById("registerEmail");
// // const registerPassword = document.getElementById("registerPassword");
// // const registerError = document.getElementById("registerError");
// // const registerButton = document.getElementById("registerButton")


// // //Register User
// // registerButton.addEventListener('click', async (e)=>{
// //     e.preventDefault();
// //     try {
// //         const create = await createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value);
// //         registerError.textContent="";
// //         if(create)
// //         {
// //             console.log(create);
// //             await sendEmailVerification(create.user);
// //         }

// //         alert("Register successful! Check your email for verification");

        
// //     } catch (error) {
// //         registerError.textContent=error.message;
// //     }
// // });



// import { auth } from "./services/firebase.js";
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut,
//     sendEmailVerification,
// // } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// } from "firebase/auth";

// const registerEmail = document.getElementById("registerEmail");
// const registerPassword = document.getElementById("registerPassword");
// const registerError = document.getElementById("registerError");
// const registerButton = document.getElementById("registerButton")


// //Register User
// registerButton.addEventListener('click', async (e)=>{
//     e.preventDefault();
//     try {
//         const create = await createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value);
//         registerError.textContent="";
//         if(create)
//         {
//             console.log(create);
//             await sendEmailVerification(create.user);
//         }

//         alert("Register successful! Check your email for verification");

        
//     } catch (error) {
//         registerError.textContent=error.message;
//     }
// });


const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const registerError = document.getElementById("registerError");
const registerButton = document.getElementById("registerButton");

//Register User
registerButton.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const create = await window.createUserWithEmailAndPassword(
            window.auth, 
            registerEmail.value, 
            registerPassword.value
        );
        
        registerError.textContent = "";
        
        if(create) {
            console.log(create);
            await window.sendEmailVerification(create.user);
        }

        alert("Register successful! Check your email for verification");
        
    } catch (error) {
        registerError.textContent = error.message;
    }
});