import { call, put, takeEvery, all } from 'redux-saga/effects'
import { SignAPI } from '../../commone/api/Login.api';
import { setalert } from '../Action/alert.action';
import { emailverify } from '../Action/auth.Action';
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

function* watchSaga() {
    yield takeEvery(ActionTypes.SIGNUP_USER, signup);
}

export function* authsagacall() {
    yield all([
        watchSaga()
    ])
}


