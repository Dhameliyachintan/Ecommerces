import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './Reducer/Index'

import { rootsaga } from './Reduxsaga/Rootsaga'

const sagaMiddleware = createSagaMiddleware()

const Middleware = [thunk, sagaMiddleware]


const configreducer = () => {
    const store = createStore(rootReducer, applyMiddleware(...Middleware))
    sagaMiddleware.run(rootsaga)
    return store
}

export const store = configreducer()