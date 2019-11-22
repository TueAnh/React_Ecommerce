import * as types from '../../constants/ActionTypes'
var initialState = [];

var appReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LIST_LAPTOP:
            state = action.laptops
            return [...state]
        default: return state
    }
}
export default appReducer;