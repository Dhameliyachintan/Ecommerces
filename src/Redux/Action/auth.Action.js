import * as ActionTypes from '../ActionTypes';

export const signupAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNUP_USER, payload: data })
}

export const emailverify = (user) => (dispatch) => {
    dispatch({ type: ActionTypes.EMAILVERIFY_USER, payload: user })
}


// Login/ home page push

export const LoginAction = (user) => (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_USER, payload: user })
}

export const Loggeduser = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.LOGGED_USER, payload: data })
}


// Logout/ Login page

export const Logoutuser = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOGOUT_USER })
}

export const Logginuser = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOGGIN_USER })
}

