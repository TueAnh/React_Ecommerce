import * as types from './../constants/ActionTypes'
var initialState = [];
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.products
            return [...state];
        default: return state;
    }
};
export default appReducer;