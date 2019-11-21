import * as types from '../../constants/ActionTypes'
var initialState = [];

var appReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LIST_PRODUCT_PHONE_OR_LAPTOP:
            state = action.products
            return [...state]
        case types.LIST_PRODUCT_WITH_CATEGORY_ID:
            state = action.products
            return [...state]
        default: return state
    }
}
export default appReducer;