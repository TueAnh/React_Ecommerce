import * as types from '../constants/ActionTypes'
var initialState = ''
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_PRODUCT:
            state = action.keyword
            return state;
        default: return state;

    }
};
export default appReducer;