import * as types from '../constants/ActionTypes'
var initialState = ''
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_PRODUCT:
            state = action.status
            return state;
        default: return state;

    }
};
export default appReducer;