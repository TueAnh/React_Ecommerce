import * as types from './../constants/ActionTypes'
var initialState = 0; // index
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREASE_INDEX:
            state = state + 1;
            state = (state == 5) ? 0 : state;
            return state;
        case types.REDUCTION_INDEX:
            state = (state == 0) ? 5 : state; 
            state = state - 1;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
            return state;
        default: return state;

    }
};
export default appReducer;