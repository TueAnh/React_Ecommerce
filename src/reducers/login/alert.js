import * as types from './../../constants/ActionTypes'
var initialState = {
    type: '',
    message: ''
}
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ALERT_SUCCESS:
            state = {
                type: 'alert-success',
                message: action.message
            }
            return state;
        case types.ALERT_ERROR:
            state = {
                type: 'alert-danger',
                message: action.message
            }
            return state;

        default: return state;

    }
};
export default appReducer;