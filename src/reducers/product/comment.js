import * as types from '../../constants/ActionTypes'
var initialState = [];

var appReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_COMMENT:
            state = action.comment
            return state
        default: return state
    }
}
export default appReducer;