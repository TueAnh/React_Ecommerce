import * as types from '../../constants/ActionTypes'
var initialState = [];
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHECKOUT_CART:
            var order = action.order;
            state.push(order)
            console.log(state)
            return state;
        default: return state;
    }
};
export default appReducer;