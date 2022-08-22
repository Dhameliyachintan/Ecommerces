import * as ActionType from "../ActionType"

export const ThemeReducer = (state, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionType.TOGGLE_THEME:
            return {
                ...state,
                theme: action.payload
            }

        default:
            return state
    }
}



export default ThemeReducer;