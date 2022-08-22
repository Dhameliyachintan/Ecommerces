import * as ActionTypes from "../ActionTypes"

const initialState = {
    isLoading: false,
    user: null,
    error: ''
}

export const authReducer = (state = initialState, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.EMAILVERIFY_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        case ActionTypes.LOGGED_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        case ActionTypes.LOGGIN_USER:
            return {
                ...state,
                isLoading: false,
                user: null,
                error: ''
            }
        default:
            return state
    }
}