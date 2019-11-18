import * as types from './../../constants/ActionTypes'
var initialState = {
    email : '',
    password : -1,
    isAdmin : false
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