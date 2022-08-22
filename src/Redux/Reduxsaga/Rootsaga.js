import { all } from 'redux-saga/effects'
import { authsagacall } from './auth.saga'

export function* rootsaga() {
    yield all([
        authsagacall()
    ])
}