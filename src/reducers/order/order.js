import * as types from '../../constants/ActionTypes'
var initialState = {};
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHECKOUT_CART:
            state = action.order;
            return state;
        default: return state;
    }
};
export default appReducer;