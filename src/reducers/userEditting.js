import * as types from '../constants/ActionTypes'
var initialState = {
    id: '',
    txtEmail: '',
    txtPassword: '',
    txtIsAdmin: '',
};
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_USER:
            state = action.user
            return state;
        default: return state;

    }
};
export default appReducer;