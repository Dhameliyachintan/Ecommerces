import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
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

export const LoginApI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((user) => {
                if (user.user.emailVerified) {
                    resolve({ payload: user.user });
                } else {
                    reject({ payload: "Please verify email" })
                }
            }).catch((error) => {

                if (error.code.localeCompare("auth/wrong password")) {
                    reject({ payload: "wrong email or password" })
                }
                else if (error.code.localeCompare("auth/user-not-found")) {
                    reject({ payload: "ragistred email" })
                }
                else {
                    reject({ payload: error.code })
                }
            })
    })
}
