import * as types from '../constants/ActionTypes'
var initialState = {
    name : '',
    status : -1
};
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_PRODUCT:
            state = {
                name : action.filter.name,
                status :parseInt(action.filter.status)
            }
            return state;
        default: return state;

    }
};
export default appReducer;