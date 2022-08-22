import { call, put, takeEvery, all } from 'redux-saga/effects'
import { LoginApI, SignAPI, LogoutAPI, googleLoginAPI, ForgetpasswordAPI } from '../../commone/api/Login.api';
import { history } from '../../History';
import { setalert } from '../Action/alert.action';
import { emailverify, Loggeduser, Logginuser } from '../Action/auth.Action';
import * as ActionTypes from '../ActionTypes';

function* signup(action) {
    try {
        console.log(action.payload);
        const user = yield call(SignAPI, action.payload);
        yield put(setalert({ text: user.payload, color: "successfull" }))
        console.log(user);
        yield put(emailverify(user));
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
        yield put(setalert({ text: e.payload, color: "error" }))
        console.log(e.message);
    }
}

function* Login(action) {
    try {
        const user = yield call(LoginApI, action.payload);
        console.log(user);
        history.push("/")
        yield put(setalert({ text: "Login sucessfull", color: "sucessfull" }))
        yield put(Loggeduser(user))
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
        yield put(setalert({ text: e.payload, color: "error" }))
    }
}

function* Logout(action) {
    try {
        const user = yield call(LogoutAPI, action.payload)
        console.log(user);
        history.push("/Login")
        yield put(setalert({ text: user.payload, color: "Success" }))
        yield put(Logginuser())
    } catch (e) {
        console.log(e);
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
        yield put(setalert({ text: e.payload, color: "error" }))
    }
}

function* googleLogin(action) {
    try {
        const user = yield call(googleLoginAPI)
        console.log(user);
        history.push("/")
        yield put(setalert({ text: "Login sucessfull", color: "Success" }))
        yield put(Loggeduser(user))
    } catch (e) {
        console.log(e);
        yield put(setalert({ text: e.payload, color: "error" }))
    }
}

function* forgetpassword(action) {
    try {
        const user = yield call(ForgetpasswordAPI, action.payload)
        history.push("/")
        yield put(setalert({ text: user.payload, color: "Success" }))
        console.log(user);
    } catch (e) {
        console.log(e);
        yield put(setalert({ text: e.payload, color: "error" }))
    }
}

function* watchSaga() {
    yield takeEvery(ActionTypes.SIGNUP_USER, signup);
    yield takeEvery(ActionTypes.LOGIN_USER, Login);
    yield takeEvery(ActionTypes.LOGOUT_USER, Logout);
    yield takeEvery(ActionTypes.GOOGLE_LOGIN, googleLogin);
    yield takeEvery(ActionTypes.FORGET_PASSWORD, forgetpassword);
}

export function* authsagacall() {
    yield all([
        watchSaga()
    ])
}


