import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../Firebase"


export const SignAPI = (data) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        sendEmailVerification(user)
                        const uid = user.uid;

                    } else {
                    }
                });
            })
            .then((emailverified) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        if (user.emailVerified) {
                            console.log("Login sucessfull");
                        } else {
                            console.log("Please verify email");
                        }
                    } else {
                        console.log("wrong verify");
                    }
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/already email-use")) {
                    console.log("email already ragistred");
                } else {
                    console.log(error.code);
                }
             
            });


    })
}
