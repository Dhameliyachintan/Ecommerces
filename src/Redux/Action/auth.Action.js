import * as ActionTypes  from '../ActionTypes';

export const signupAction = (data) => (dispatch) => {
    dispatch({type : ActionTypes.SIGNUP_USER, payload : data})
}

export const emailverify = (user) => (dispatch) => {
    dispatch({type : ActionTypes.EMAILVERIFY_USER, payload : user})
}