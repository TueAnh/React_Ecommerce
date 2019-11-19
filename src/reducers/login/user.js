import * as types from './../../constants/ActionTypes'
var initialState = {
    // email :'',
    // password :'',
    // admin : false
}
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            state = action.user
            return state;
        case types.LOGOUT:
            state = {}
            return state;
        default: return state;

    }
};
export default appReducer;