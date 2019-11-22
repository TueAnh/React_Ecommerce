import * as types from '../../constants/ActionTypes'
var initialState = 0;

var appReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SELECTED_PRODUCT:
            state = action.product
            return state
        default: return state
    }
}
export default appReducer;