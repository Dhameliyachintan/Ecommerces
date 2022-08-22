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
                        if (user.emailverified) {
                            // console.log("Login sucessfull");
                            resolve({ payload: "Login sucessfull" });
                        } else {
                            // console.log("Please verify email");
                            resolve({ payload: "Please verify email" });
                        }
                    } else {
                        reject("wrong verify");
                    }
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/already email-use")) {
                    // console.log("email already ragistred");
                    reject({ payload: "email already ragistred" });
                } else {
                    // console.log(error.code);
                    reject({ payload: errorCode });
                }

            });


    })
}