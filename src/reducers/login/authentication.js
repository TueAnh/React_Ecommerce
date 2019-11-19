import * as types from '../../constants/ActionTypes'
var initialState = false
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return true;
        case types.LOGIN_FAILURE:
            return false;
        case types.LOGIN_CLEAR:
            return false;
        default: return state;

    }
};
export default appReducer;