import * as types from './../constants/ActionTypes'
var initialState = [];
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TRENDING_PRODUCTS:
            state = action.trendingproducts.slice(0,12)
            return [...state];
        default: return state;
    }
};
export default appReducer;