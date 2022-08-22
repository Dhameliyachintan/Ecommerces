import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase"
import { GoogleAuthProvider } from "firebase/auth";


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

export const LogoutAPI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        signOut(auth)
            .then((user) => {
                resolve({ payload: "Logout Sucessfull" });
            }).catch((error) => {
                reject({ payload: error.code });
            })
    })
}

export const googleLoginAPI = () => {
    const provider = new GoogleAuthProvider();
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                resolve({ payload: user })
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                reject({ payload: errorCode })
            });
    })
}

export const ForgetpasswordAPI = (data) => {
    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, data.email)
            .then((user) => {
                resolve({ payload: "Please check verify email" })
            }).catch((error) => {
                const errorCode = error.code;
                
                if (error.code.localeCompare("auth/user-not-found"))
                    reject({ payload: "Please ragistred email" })
                reject({ payload: error.code })
            })
    })
}