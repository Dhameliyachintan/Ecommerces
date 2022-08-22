import { call, put, takeEvery, all } from 'redux-saga/effects'
import { SignAPI } from '../../commone/api/Login.api';
import { emailverify } from '../Action/auth.Action';
import * as ActionTypes from '../ActionTypes';

function* signup(action) {
    try {
        const user = yield call(SignAPI, action.payload);
        console.log(user);
        yield put(emailverify(user))
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
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


